
import { createRequire } from 'module';
import express from "express";
import pixelmatch from 'pixelmatch';
import pLimit from 'p-limit';

const require = createRequire(import.meta.url);
const fsPromises = require('fs').promises;
const sharp = require('sharp');
const { PNG } = require('pngjs');

const app = express();
const port = 3001;

import { GameModel } from './mongo.js';
import {
    dir_latest,
    briefingAreas,
    loadoutCrops,
    factionNames
} from './constants.js';
import {
    getImageData,
    getFileFromId,
    cropImage,
    extractRegion,
    tesseractRecognize,
    getDifficultyInt,
    getMissionModifiers,
    getFaction,
    getPixelAt,
    isBriefing,
    isLoadout,
    validPlayers,
    deleteFilesBulk,
    stitchAndUploadPair,
    mergePairs,
    normalizeIds
} from './utils.js';

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

async function processBriefing(filePath) {
    const buffer = await fsPromises.readFile(filePath);
    const png = PNG.sync.read(buffer);
    console.log("Briefing: " + filePath)

    const ocrResults = await Promise.all(
        briefingAreas.map(async ({ left, top, width, height }) => {
            const croppedPixels = cropImage(png.data, png.width, left, top, width, height);
            const croppedPng = new PNG({ width, height, filterType: -1 });
            croppedPng.data = croppedPixels;
            const croppedImageBuffer = PNG.sync.write(croppedPng);
            return tesseractRecognize(croppedImageBuffer);
        })
    );

    const [planetData, missionNameData, difficultyData, modifiersData] = ocrResults;
    const { planetName, faction } = getFaction(planetData);

    return {
        id: filePath,
        planet: planetName,
        faction,
        mission: missionNameData.replace(/\n/g, ''),
        difficulty: getDifficultyInt(difficultyData),
        modifiers: getMissionModifiers(modifiersData)
    };
}

async function getBriefingData(files) {
    const limit = pLimit(200);
    return await Promise.all(files.map(file => limit(() => processBriefing(file))));
}

const findBestMatch = (region, regionWidth, regionHeight, assetsData) => {
    return assetsData.reduce((best, { asset, assetImage }) => {
        const diffBuffer = Buffer.alloc(regionWidth * regionHeight * 4);
        const pixelDiff = pixelmatch(
            region,
            assetImage,
            diffBuffer,
            regionWidth,
            regionHeight,
            { threshold: 0.1 }
        );

        return pixelDiff < best.diff
            ? { match: asset, diff: pixelDiff }
            : best;
    }, { match: null, diff: 10000 });
};

const processCropGroup = async (cropGroup, buffer, assetsData) => {
    const results = await Promise.all(
        cropGroup.map(async (crop) => {
            const region = await extractRegion(buffer, crop);
            return findBestMatch(region, crop.regionWidth, crop.regionHeight, assetsData);
        })
    );
    return results;
};

async function processLoadout(file, assetsData) {
    const loadoutBuffer = await fsPromises.readFile(file);
    const stats = await fsPromises.stat(file);
    console.log("Loadout: " + file)

    const players = await Promise.all(
        loadoutCrops.map(cropGroup => processCropGroup(cropGroup, loadoutBuffer, assetsData))
    );

    return {
        id: file,
        createdAt: new Date(stats.mtime),
        players: validPlayers(players)
    };
}

async function getLoadoutData(loadoutFiles) {
    const limit = pLimit(200);
    const assetsDir = 'assets/strategem';
    const assets = await fsPromises.readdir(assetsDir);

    const assetsData = await Promise.all(
        assets.map(async asset => {
            const fileData = await limit(() => fsPromises.readFile(`${assetsDir}/${asset}`));
            const { data: assetImage } = await sharp(fileData).raw().ensureAlpha().toBuffer({ resolveWithObject: true });
            return { asset, assetImage };
        })
    );

    return await Promise.all(
        loadoutFiles.map(file => limit(() => processLoadout(file, assetsData)))
    );
}

app.get('/rescale', async (req, res) => {
    console.time('Execution Time');
    const stitchingPromises = [];

    for (const faction of factionNames) {
        const dir = `Screenshots/${faction}/latest`;
        const files = await fsPromises.readdir(dir);

        for (let i = 0; i < files.length; i += 2) {
            if (i + 1 < files.length) {
                const img1 = `${dir}/${files[i]}`;
                const img2 = `${dir}/${files[i + 1]}`;
                stitchingPromises.push(stitchAndUploadPair(img1, img2, files[i]));
            }
        }
    }

    await Promise.all(stitchingPromises);

    console.timeEnd('Execution Time');
    res.send({ message: 'Images uploaded successfully!' });
});

app.get('/generate', async (req, res) => {
    console.time('Execution Time');
    const files = await fsPromises.readdir(dir_latest);

    const loadoutFiles = files.filter((item, index) => index % 2 === 0)
        .map((item) => `${dir_latest}/${item}`);

    const briefingFiles = files.filter((item, index) => index % 2 !== 0)
        .map((item) => `${dir_latest}/${item}`);

    const [loadoutResult, briefingResult] = await Promise.all([getLoadoutData(loadoutFiles), getBriefingData(briefingFiles)]);

    const matchesRaw = mergePairs(loadoutResult, briefingResult);
    const matches = await normalizeIds(matchesRaw);

    matches.map((match) => {
        const briefingId = Number(match.fileName.match(/\((\d+)\)/)?.[1]) + 1;
        fsPromises.rename(match.fileName,
            `Screenshots/${match.faction}/latest/${getFileFromId(match.id)}`, function (err) { if (err) throw err; });
        fsPromises.rename(`${dir_latest}/${getFileFromId(briefingId)}`,
            `Screenshots/${match.faction}/latest/${getFileFromId(match.id + 1)}`, function (err) { if (err) throw err; });
    });

    const result = matches.map(({ fileName, ...rest }) => rest);
    await GameModel.insertMany(result);

    console.timeEnd('Execution Time');
    res.send({ lenght: matchesRaw.lenght, res: matchesRaw });
});

app.get('/filter', async (req, res) => {
    console.time('Execution Time');
    const files = await fsPromises.readdir(dir_latest);
    const pixelData = [];
    const validPairs = [];

    for (const file of files) {
        console.log(file);
        const imageSharp = await getImageData(file);
        pixelData.push({
            file,
            lPixel: getPixelAt(585, 225, imageSharp.buffer),
            bPixel: getPixelAt(82, 198, imageSharp.buffer)
        })
    }

    for (let i = 0; i < pixelData.length - 1; i++) {
        const element = pixelData[i];
        const nextElement = pixelData[i + 1];
        if (isLoadout(element.lPixel) && isBriefing(nextElement.bPixel)) {
            validPairs.push(element.file);
            validPairs.push(nextElement.file);
        }
    }

    const invalidFiles = files.filter(function (el) {
        return validPairs.indexOf(el) < 0;
    });

    await deleteFilesBulk(invalidFiles.map((item) => `${dir_latest}/${item}`));

    console.timeEnd('Execution Time');
    res.send({ "Matches found:": validPairs.length });
});

app.get('/faction/:id', (req, res) => {
    const factionName = req.params['id'];
    const options = factionName === "all" ? {} : { faction: factionName }

    GameModel.find(options).sort({ id: 1 })
        .then(function (games) {
            res.send(games);
        });
});

app.get('/games/:faction/:id', (req, res) => {
    const factionName = req.params['faction'];
    const strategemName = req.params['id'];

    GameModel.find({
        faction: factionName,
        'players': {
            $elemMatch: { $elemMatch: { $in: [strategemName] } }
        }
    })
        .then(function (games) {
            res.send(games);
        });
});

app.get('/delete/:faction', (req, res) => {
    const factionName = req.params['faction'];
    GameModel.deleteMany({ faction: factionName }).then(function (games) {
        res.send(games);
    });
});

app.get('/delete2', (req, res) => {
    const factionName = 'automaton'
    GameModel.deleteMany({
        faction: factionName,
        id: { $gt: 113822, $lt: 200000 }
    }).then(function (games) {
        res.send(games);
    }).catch(function (err) {
        res.status(500).send(err);
    });
});

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// app.get('/generateAssets', async (req, res) => {
//     const filePath = 'Screenshots/latest/Screenshot (129387).png';
//     processMultipleCrops(filePath)
//         .then(results => {
//             results.forEach((result, index) => {
//                 fsPromises.writeFile(`${index}.png`, result);
//             });
//         })
//         .catch(console.error);
// })

// async function processImage(buffer, x, y, regionWidth, regionHeight) {
//     try {
//         const croppedImage = await sharp(buffer)
//             .extract({ left: x, top: y, width: regionWidth, height: regionHeight })
//             .toBuffer();
//         return croppedImage;
//     } catch (error) {
//         console.error('Error processing image:', error);
//         throw error;
//     }
// }

// async function processMultipleCrops(filePath) {
//     const buffer = await fsPromises.readFile(filePath);
//     const results = [];
//     for (const { x, y, regionWidth, regionHeight } of loadoutCrops.flat()) {
//         const result = await processImage(buffer, x, y, regionWidth, regionHeight);
//         results.push(result);
//     }
//     return results;
// }


