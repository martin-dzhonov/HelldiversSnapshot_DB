
import { createRequire } from 'module';
import express from "express";
import pLimit from 'p-limit';

const require = createRequire(import.meta.url);
const fsPromises = require('fs').promises;
const sharp = require('sharp');
const { PNG } = require('pngjs');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

import { GameModel, GameModelBackup, GameModelBackup_1 } from './mongo.js';
import {
    dir_latest,
    briefingAreas,
    loadoutCrops,
    factionNames,
    weaponsCrops,
    playerLvlAreas,
    briefingColorCoords,
    loadoutColorCoords,
    armorNames,
    weaponNames,
    missionNames
} from './constants.js';
import {
    getImageData,
    processCropGroup,
    loadAssetsFolder,
    getFileFromId,
    tesseractRecognize,
    getDifficultyInt,
    getFaction,
    getPixelAt,
    isBriefing,
    isLoadout,
    validateDiffs,
    deleteFilesBulk,
    stitchAndUpload,
    mergeDataResults,
    normalizeIds,
    normalizeLvl,
    getPixelColorAt,
    getColorId,
    validateDiffs2,
    parsePlayerData,
    getWeaponsFiles,
    normalizeFromSet,
    validateWeapons
} from './utils.js';

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/filter', async (req, res) => {
    console.time('Execution Time');
    const files = await fsPromises.readdir(dir_latest);
    const pixelData = [];
    const validPairs = [];

    for (const file of files) {
        const imageSharp = await getImageData(file);
        console.log(file);
        const lPixel = getPixelAt(585, 225, imageSharp.buffer)
        const bPixel = getPixelAt(80, 100, imageSharp.buffer)

        pixelData.push({
            file,
            isLoadout: isLoadout(lPixel),
            isBriefing: isBriefing(bPixel)
        })
    }

    // for (let i = 0; i < pixelData.length - 2; i++) {
    //     const element = pixelData[i];
    //     const element_1 = pixelData[i + 1];
    //     const element_2 = pixelData[i + 2];

    //     if (isLoadout(element.lPixel) && isLoadout(element_1.lPixel) && isBriefing(element_2.bPixel)) {
    //         validPairs.push(element.file);
    //         validPairs.push(element_1.file);
    //         validPairs.push(element_2.file);
    //     }
    // }
    for (let i = 7; i < pixelData.length; i++) {
        const element = pixelData[i];
        if (element.isBriefing) {
            let flag = true;
            for (let j = 1; j < 8; j++) {
                const newIndex = i - j;
                const isLoadout = pixelData[newIndex].isLoadout;
                if (!isLoadout) {
                    flag = false;
                }
            }
            if (flag) {
                validPairs.push(element.file);
                for (let j = 1; j < 8; j++) {
                    const newIndex = i - j
                    validPairs.push(pixelData[newIndex].file);
                }
            }
        }

    }

    const invalidFiles = files.filter((el) => { return validPairs.indexOf(el) < 0; });
    await deleteFilesBulk(invalidFiles.map((item) => `${dir_latest}/${item}`));

    console.timeEnd('Execution Time');
    res.send({ "Matches found:": validPairs.length });
});

app.get('/generate', async (req, res) => {
    console.time('Execution Time');

    const files = await fsPromises.readdir(dir_latest);
    const loadoutFiles = files.filter((item, index) => index % 3 === 0).map((item) => `${dir_latest}/${item}`);
    const weaponsFiles = files.filter((item, index) => index % 3 === 1).map((item) => `${dir_latest}/${item}`);
    const briefingFiles = files.filter((item, index) => index % 3 === 2).map((item) => `${dir_latest}/${item}`);

    const [loadoutResult, weaponsResult, briefingResult] = await Promise.all(
        [getLoadoutData(loadoutFiles), getWeaponsData(weaponsFiles), getBriefingData(briefingFiles)]);

    const matchesRaw = mergeDataResults(loadoutResult, weaponsResult, briefingResult);
    const matchesParse = parsePlayerData(matchesRaw);
    const matches = await normalizeIds(matchesParse);

    matches.forEach((match) => {
        const fileNames = match.fileNames;
        fileNames.forEach((fileName, index) => {
            fsPromises.rename(fileName, `Screenshots/${match.faction}/latest/${getFileFromId(match.id + index)}`,
                function (err) { if (err) throw err; });
        });
    });

    const result = matches.map((match) => {
        const { fileNames, ...trimmed } = match;
        return trimmed;
    })

    await GameModel.insertMany(matches, { ordered: false });

    console.timeEnd('Execution Time');
    res.send(result);
});

app.get('/upload', async (req, res) => {
    const stitchingPromises = [];

    for (const faction of factionNames) {
        const dir = `Screenshots/${faction}/latest`;
        const files = await fsPromises.readdir(dir);

        for (let i = 0; i < files.length; i += 8) {
            const img1 = `${dir}/${files[i]}`;
            const img2 = `${dir}/${files[i + 1]}`;
            const img3 = `${dir}/${files[i + 7]}`;
            stitchingPromises.push(stitchAndUpload(img1, img2, img3, files[i]));
        }
    }

    await Promise.all(stitchingPromises);

    res.send({ message: 'Images uploaded successfully!' });
});
// const equipmentFiles = files.filter((item, index) => index % 8 > 0 && index % 8 < 7);

//     const weaponsFiles = equipmentFiles.filter((item, index) => index % 2 === 0).map((item) => `${dir_latest}/${item}`);
app.get('/generate_1', async (req, res) => {
    console.time('Execution Time');

    const files = await fsPromises.readdir(dir_latest);
    const loadoutFiles = files.filter((item, index) => index % 8 === 0).map((item) => `${dir_latest}/${item}`);
    const weaponsFiles = files.filter((item, index) => index % 8 === 1).map((item) => `${dir_latest}/${item}`);

    const briefingFiles = files.filter((item, index) => index % 8 === 7).map((item) => `${dir_latest}/${item}`);

    const [loadoutResult, weaponsResult, briefingResult] = await Promise.all(
        [getLoadoutData(loadoutFiles), getWeaponsData(weaponsFiles), getBriefingData(briefingFiles)]);

    const matchesRaw = mergeDataResults(loadoutResult, weaponsResult, briefingResult);

    const primariesResult = await Promise.all(
        matchesRaw.map(async (item) => {
            const playerCount = item.weaponColorIds.length;
            let result = {
                primaries: null,
                armors: null
            };
            if (playerCount > 0) {
                const weaponsFiles = getWeaponsFiles(item.fileNames[0], playerCount, 0);
                const weaponsData = await getEquiptmentData(weaponsFiles, false);

                const armorFiles = getWeaponsFiles(item.fileNames[0], playerCount, 1);
                const armorData = await getEquiptmentData(armorFiles, true);

                result.primaries = weaponsData;
                result.armors = armorData;
            }
            return result;
        })
    );
    for (let i = 0; i < matchesRaw.length; i++) {
        matchesRaw[i].primaries = primariesResult[i].primaries;
        matchesRaw[i].armors = primariesResult[i].armors;
    }

    const matchesParse = parsePlayerData(matchesRaw);
    const matches = await normalizeIds(matchesParse);

    matches.forEach((match) => {
        const fileNames = match.fileNames;
        fileNames.forEach((fileName, index) => {
            fsPromises.rename(`Screenshots/ulatest/${fileName}`, `Screenshots/${match.faction}/latest/${getFileFromId(match.id + index)}`,
                function (err) { if (err) throw err; });
        });
    });

    const result = matches.map((match) => {
        const { fileNames, ...trimmed } = match;
        return trimmed;
    })

    await GameModel.insertMany(result, { ordered: false });

    res.send({matchesRaw, matchesParse});
});


async function getEquiptmentData(files, isArmors) {
    const limit = pLimit(100);
    return await Promise.all(
        files.map(file => limit(() => processEquipment(file, isArmors)))
    );
}
async function processEquipment(file, isArmors) {
    const coords = isArmors ?
        { left: 1090, top: 551, width: 370, height: 30 } :
        { left: 550, top: 415, width: 250, height: 25 }

    const buffer = await fsPromises.readFile(file);
    const image = sharp(buffer);

    const ocr = await (async () => {
        const bufferCrop = await image.clone()
            .extract(coords)
            .toBuffer();
        return tesseractRecognize(bufferCrop);
    })();

    const result = isArmors ?
        normalizeFromSet(ocr.replace(/\n/g, ''), armorNames.map((item) => item.toUpperCase())) :
        weaponNames[normalizeFromSet(ocr.split(' ')[0], Object.keys(weaponNames))];

    return result;

}

async function getLoadoutData(loadoutFiles) {
    const limit = pLimit(100);

    const assetsDir = 'assets/strategem';
    const assetsData = await loadAssetsFolder(assetsDir);

    return await Promise.all(
        loadoutFiles.map(file => limit(() => processLoadout(file, assetsData)))
    );
}

async function processLoadout(file, assetsData) {
    const imageBuffer = await fsPromises.readFile(file);
    const stats = await fsPromises.stat(file);

    const players = await Promise.all(loadoutCrops.map(cropGroup => processCropGroup(cropGroup, imageBuffer, assetsData)));
    const strategemColorIds = await Promise.all(
        loadoutColorCoords.map(async ({ left, top }) => {
            const color = await getPixelColorAt(left, top, sharp(imageBuffer));
            return getColorId(color);
        })
    );
    return {
        fileName: file,
        createdAt: new Date(stats.mtime),
        strategem: validateDiffs2(players),
        strategemColorIds: strategemColorIds.filter((item) => item !== null)
    };
}

async function getWeaponsData(loadoutFiles) {
    const limit = pLimit(100);
    const secondaryAssets = await loadAssetsFolder('assets/gun/secondary');
    const grenadeAssets = await loadAssetsFolder('assets/gun/grenade');

    return await Promise.all(
        loadoutFiles.map(file => limit(() => processWeapons(file, secondaryAssets, grenadeAssets)))
    );
}

async function processWeapons(file, secondaryAssets, grenadeAssets) {
    const imageBuffer = await fsPromises.readFile(file);

    const weapons = await Promise.all(
        weaponsCrops.map((cropGroup, index) => {
            const assets = index === 0 ? secondaryAssets : grenadeAssets;
            return processCropGroup(cropGroup, imageBuffer, assets)
        })
    );

    const weaponColorIds = await Promise.all(
        loadoutColorCoords.map(async ({ left, top }) => {
            const color = await getPixelColorAt(left, top, sharp(imageBuffer));
            return getColorId(color);
        })
    );

    return {
        fileName: file,
        secondaries: validateWeapons(weapons[0]),
        throwables: validateWeapons(weapons[1]),
        weaponColorIds: weaponColorIds.filter((item) => item !== null)
    };
}

async function getBriefingData(files) {
    const limit = pLimit(100);

    return await Promise.all(
        files.map(file => limit(() => processBriefing(file)))
    );
}

async function processBriefing(file) {
    let lvlResults = null;
    let lvlOffset = 0;

    console.log(file);
    const buffer = await fsPromises.readFile(file);
    const image = sharp(buffer);

    const ocr = await Promise.all(
        briefingAreas.map(async ({ left, top, width, height }) => {
            const bufferCrop = await image.clone()
                .extract({ left, top, width, height })
                .toBuffer();
            return tesseractRecognize(bufferCrop);
        })
    );

    const [planetData, missionNameData, difficultyData, p1, p2, p3] = ocr;

    lvlResults = normalizeLvl([p1, p2, p3]);
    if (lvlResults.every(item => item === null)) {
        lvlOffset = 55;
    }

    if (lvlOffset) {
        const lvlOcrOffset = await Promise.all(
            playerLvlAreas.map(async ({ left, top, width, height }) => {
                const cropBuffer = await image.clone()
                    .extract({ left, top: top - lvlOffset, width, height })
                    .toBuffer();
                return tesseractRecognize(cropBuffer);
            })
        );
        lvlResults = normalizeLvl(lvlOcrOffset);
    }

    const playerColorIds = await Promise.all(
        briefingColorCoords.map(async ({ left, top }) => {
            const color = await getPixelColorAt(left, top - lvlOffset, image);
            return getColorId(color);
        })
    );

    const playersLvl = playerColorIds.filter((item) => item !== null)
        .map((id, index) => {
            return {
                colorId: id,
                level: lvlResults[index]
            }
        }).reduce((acc, { colorId, level }) => {
            acc[colorId] = level;
            return acc;
        }, {});

    const { planetName, faction } = getFaction(planetData);

    return {
        fileName: file,
        planet: planetName,
        faction,
        mission: normalizeFromSet(missionNameData.replace(/\n/g, ''), missionNames.flat()),
        difficulty: getDifficultyInt(difficultyData),
        playersLvl,
        // ocr: [p1, p2, p3],
        //modifiers: getMissionModifiers(modifiersData)
    };
}

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

app.get('/seed', async (req, res) => {
    const data = await GameModelBackup.find().lean();
    const newData = data.map(doc => ({ ...doc, _id: new mongoose.Types.ObjectId() }));
    await GameModel.insertMany(newData);
    res.send("Data copied successfully.");
});

app.get('/backup', async (req, res) => {
    const data = await GameModel.find().lean();
    const newData = data.map(doc => ({ ...doc, _id: new mongoose.Types.ObjectId() }));
    await GameModelBackup_1.insertMany(newData);
    res.send("Data copied successfully.");
});

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

app.get('/getAssets', async (req, res) => {
    //244049
    const filePath = 'Screenshots/ulatest/Screenshot (596428).png';
    processMultipleCrops(filePath)
        .then(results => {
            results.forEach((result, index) => {
                fsPromises.writeFile(`assets/${index}.png`, result);
            });
        })
        .catch(console.error);
})

async function processMultipleCrops(filePath) {
    const buffer = await fsPromises.readFile(filePath);
    const results = [];
    for (const { x, y, regionWidth, regionHeight } of loadoutCrops.flat()) {
        const result = await processImage(buffer, x, y, regionWidth, regionHeight);
        results.push(result);
    }
    return results;
}

async function processImage(buffer, x, y, regionWidth, regionHeight) {
    try {
        const croppedImage = await sharp(buffer)
            .extract({ left: x, top: y, width: regionWidth, height: regionHeight })
            .toBuffer();
        return croppedImage;
    } catch (error) {
        console.error('Error processing image:', error);
        throw error;
    }
}

// app.get('/remap', async (req, res) => {
//     const data = await GameModel.find({}).lean();
//     const remapped = data.map((item) => {
//         const players = item.players.map((player, index) => {
//             const weapons = item.weapons[index] ? item.weapons[index] : null;
//             const level = item.level ? item.level : null;
//             return { strategem: player, weapons, level };
//         })
//         const { weapons, ...trim } = item;
//         return { ...trim, players }
//     });
//     const newData = remapped.map(doc => ({ ...doc, _id: new mongoose.Types.ObjectId() }));
//     await TestModel1.insertMany(newData);
//     res.send({ 'Inserted:': newData.length });
// });

// app.get('/unset', async (req, res) => {
//     await TestModel1.updateMany({}, { $unset: { weapons: 1 } });
//     res.send("Success");
// });
// app.get('/setnew', (req, res) => {
//     GameModel.updateMany({}, { $set: { weapons: []} }).then(function (games) {
//         res.send(games);
//     });
// });

// app.get('/delete2', (req, res) => {
//     GameModel.deleteMany({
//         id: { $gt: 556838, $lt: 600000 }
//     }).then(function (games) {
//         res.send(games);
//     }).catch(function (err) {
//         res.status(500).send(err);
//     });
// });