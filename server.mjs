
import { createRequire } from 'module';
import express from "express";
import pLimit from 'p-limit';

const require = createRequire(import.meta.url);
const fsPromises = require('fs').promises;
const sharp = require('sharp');
const { PNG } = require('pngjs');
const mongoose = require('mongoose');
import os from 'os'

const CPU_COUNT = os.cpus().length
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
    missionNames,
    primariesNames,
    secondariesNames,
    throwablesNames,
    equipmentConfig
} from './constants.js';
import {
    getImageData,
    processCropGroup,
    loadAssetsFolder,
    getFileFromId,
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
    validateWeapons,
    parseSubFactions,
    getScreenshotId
} from './utils.js';

import { initTesseractWorkers, terminateTesseractWorkers, tesseractRecognize } from './tesseract_utils.js';

import { start } from 'repl';

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

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

app.get('/getAssets', async (req, res) => {
    const filePath = 'Screenshots/ulatest/Screenshot (126).png';
    processMultipleCrops(filePath)
        .then(results => {
            results.forEach((result, index) => {
                fsPromises.writeFile(`assets/${index}.png`, result);
            });
        })
        .catch(console.error);
    res.send("Success");
})

app.get('/generate2', async (req, res) => {
    const now = () => process.hrtime.bigint()
    const seconds = (start) => ((Number(now() - start) / 1e9).toFixed(1))

    const totalStart = now()

    const files = await getFilesNumeric(dir_latest)
    const groupSize = 14

    const getGroupedFiles = index =>
        files
            .filter((_, i) => i % groupSize === index)
            .map(item => `${dir_latest}/${item}`)

    const parallelStart = now()

    const [briefingResult] = await Promise.all([
        getBriefingData(getGroupedFiles(groupSize - 1))
    ])

    console.log('Parallel data fetch s:', seconds(parallelStart))

    const totalSeconds = parseFloat(seconds(totalStart))
    const gamesCount = files.length / groupSize
    const avgPer = (totalSeconds / gamesCount).toFixed(1)

    console.log('Total execution s:', totalSeconds)
    console.log('Games:', gamesCount)
    console.log('Avg per game:', avgPer)

    res.send({ briefingResult })
})

async function getBriefingData(files) {
    const limit = pLimit(CPU_COUNT);

    return await Promise.all(
        files.map(file => limit(() => processBriefing(file)))
    );
}

// async function processBriefing(file) {
//     const buffer = await fsPromises.readFile(file);
//     const image = sharp(buffer);

//     const newAreas = [{ left: 123, top: 5, width: 410, height: 45 }];

//     const ocr = await Promise.all(
//         newAreas.map(async ({ left, top, width, height }) => {
//             const bufferCrop = await image.clone()
//             .extract({ left, top, width, height })
//             .resize({ width: width * 2 })
//             .grayscale()
//             .threshold(150)
//             .toBuffer();

//             return tesseractRecognize(bufferCrop);
//         })
//     );

//     const [planetData] = ocr;

//     return {
//         planet: planetData,
//     };
// }

app.get('/generate', async (req, res) => {
    const now = () => process.hrtime.bigint()
    const seconds = (start) => ((Number(now() - start) / 1e9).toFixed(1))

    const totalStart = now()

    const files = await getFilesNumeric(dir_latest)
    const groupSize = 14

    const getGroupedFiles = index =>
        files
            .filter((_, i) => i % groupSize === index)
            .map(item => `${dir_latest}/${item}`)

    const parallelStart = now()

    const [strategemResult, weaponsResult, briefingResult] = await Promise.all([
        getStrategemData(getGroupedFiles(0)),
        getWeaponsData(getGroupedFiles(1)),
        getBriefingData(getGroupedFiles(groupSize - 1))
    ])

    console.log('Parallel data fetch s:', seconds(parallelStart))

     const matchesRaw = mergeDataResults(strategemResult, weaponsResult, briefingResult)
    const loadoutResult = await getLoadoutResults(matchesRaw)

    matchesRaw.forEach((match, i) => { Object.assign(match, loadoutResult[i]) })

    const playerGames = parsePlayerData(matchesRaw)
    const games = await normalizeIds(playerGames)

    const totalSeconds = parseFloat(seconds(totalStart))
    const gamesCount = files.length / groupSize
    const avgPer = (totalSeconds / gamesCount).toFixed(1)

    console.log('Total execution s:', totalSeconds)
    console.log('Games:', gamesCount)
    console.log('Avg per game:', avgPer)

    games.forEach((match) => {
        const fileNames = match.fileNames;
        fileNames.forEach((fileName, index) => {
            fsPromises.rename(`Screenshots/ulatest/${fileName}`, `Screenshots/${match.faction}/latest/${getFileFromId(match.id + index)}`,
                function (err) { if (err) throw err; });
        });
    });

    const mongoData = games.map((match) => {
        const { fileNames, ...trimmed } = match;
        return trimmed;
    })

    await GameModel.insertMany(mongoData, { ordered: false });

    res.send({ matchesRaw })
})

const getLoadoutResults = async matchesRaw => {
    return Promise.all(
        matchesRaw.map(async item => {
            const playerCount = item.weaponColorIds.length
            if (!playerCount) return {}

            const baseFile = item.fileNames[0]
            const result = {}

            for (const config of equipmentConfig) {
                const files = getWeaponsFiles(baseFile, playerCount, config.modifier)
                result[config.key] = await getEquiptmentData(
                    files,
                    config.isArmor,
                    config.set
                )
            }

            return result
        })
    )
}

app.get('/filter', async (req, res) => {
    console.time('Execution Time');

    const files = await getFilesNumeric(dir_latest);
    const validFiles = new Set();
    const history = [];

    for (const file of files) {
        console.log(file)
        const imageSharp = await getImageData(file);

        const lPixel = getPixelAt(585, 225, imageSharp.buffer);
        const bPixel = getPixelAt(80, 96, imageSharp.buffer);

        const isLoadoutFile = isLoadout(lPixel);
        const isBriefingFile = isBriefing(bPixel);

        history.push({
            file,
            isLoadout: isLoadoutFile,
            isBriefing: isBriefingFile
        });

        if (history.length < 14) continue;

        const current = history[history.length - 1];

        const isValidBriefing =
            current.isLoadout === false &&
            current.isBriefing === true;

        if (!isValidBriefing) continue;

        const previous13 = history.slice(history.length - 14, history.length - 1);

        const allLoadouts =
            previous13.length === 13 &&
            previous13.every(f =>
                f.isLoadout === true &&
                f.isBriefing === true
            );

        if (allLoadouts) {
            validFiles.add(current.file);
            previous13.forEach(f => validFiles.add(f.file));
        }
    }

    const invalidFiles = files
        .filter(file => !validFiles.has(file))
        .map(file => `${dir_latest}/${file}`);

    if (invalidFiles.length) {
        await deleteFilesBulk(invalidFiles);
    }

    console.timeEnd('Execution Time');

    res.send({ "Matches found:": validFiles.size });
});


app.get('/upload', async (req, res) => {
    const stitchingPromises = [];

    for (const faction of factionNames) {
        const dir = `Screenshots/${faction}/latest`;
        const files = await fsPromises.readdir(dir);

        for (let i = 0; i < files.length; i += 14) {
            if (!files[i + 13]) continue;

            const img1 = `${dir}/${files[i]}`;
            const img2 = `${dir}/${files[i + 1]}`;
            const img3 = `${dir}/${files[i + 13]}`;

            stitchingPromises.push(
                stitchAndUpload(img1, img2, img3, files[i])
            );
        }
    }

    await Promise.all(stitchingPromises);

    res.send({ message: 'Images uploaded successfully!' });
});

async function getEquiptmentData(files, isArmors, set) {
    const limit = pLimit(CPU_COUNT);
    return await Promise.all(
        files.map(file => limit(() => processEquipment(file, isArmors, set)))
    );
}
async function processEquipment(file, isArmors, set) {
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

    // const result = isArmors ?
    // ocr.replace(/\n/g, '') :
    // ocr.split(' ')[0];
    const result = isArmors ?
        normalizeFromSet(ocr.replace(/\n/g, ''), armorNames.map((item) => item.toUpperCase())) :
        set[normalizeFromSet(ocr.split(' ')[0], Object.keys(set))];

    return result;
}

async function getStrategemData(loadoutFiles) {
    const limit = pLimit(CPU_COUNT);

    const assetsDir = 'assets/strategem';
    const assetsData = await loadAssetsFolder(assetsDir);

    return await Promise.all(
        loadoutFiles.map(file => limit(() => processStrategems(file, assetsData)))
    );
}

async function processStrategems(file, assetsData) {
    const imageBuffer = await fsPromises.readFile(file);
    const stats = await fsPromises.stat(file);

    const strategems = await Promise.all(loadoutCrops.map(cropGroup => processCropGroup(cropGroup, imageBuffer, assetsData)));
    const strategemColorIds = await Promise.all(
        loadoutColorCoords.map(async ({ left, top }) => {
            const color = await getPixelColorAt(left, top, sharp(imageBuffer));
            return getColorId(color);
        })
    );

    return {
        fileName: file,
        createdAt: new Date(stats.mtime),
        strategem: validateDiffs2(strategems),
        strategemColorIds: strategemColorIds.filter((item) => item !== null)
    };
}

async function getWeaponsData(loadoutFiles) {
    const limit = pLimit(CPU_COUNT);
    return await Promise.all(
        loadoutFiles.map(file => limit(() => processWeapons(file)))
    );
}

async function processWeapons(file) {
    const imageBuffer = await fsPromises.readFile(file);

    const weaponColorIds = await Promise.all(
        loadoutColorCoords.map(async ({ left, top }) => {
            const color = await getPixelColorAt(left, top, sharp(imageBuffer));
            return getColorId(color);
        })
    );

    return {
        fileName: file,
        weaponColorIds: weaponColorIds.filter((item) => item !== null),
    };
}

async function processBriefing(file) {
    let lvlResults = null;
    let lvlOffset = 0;

    const buffer = await fsPromises.readFile(file);
    const image = sharp(buffer);
    const imageBuffer = await image.clone().toBuffer();

    let yCoord = 290;
    let seekStart = true;
    let seekEnd = true;
    let startCoord = 0;
    let endCoord = 0;

    while (seekStart) {
        const color = await getPixelColorAt(65, yCoord, sharp(imageBuffer));
        if (color.r > 40 && color.g > 50 && color.b > 60) {
            seekStart = false;
            startCoord = yCoord;
        }
        yCoord += 6
    }

    while (seekEnd) {
        const color = await getPixelColorAt(65, yCoord, sharp(imageBuffer));
        if (color.r < 40 && color.g < 50 && color.b < 60) {
            seekEnd = false;
            endCoord = yCoord;
        }
        yCoord += 4
    }

    const modifiersArea = { left: 109, top: startCoord, width: 350, height: endCoord - startCoord }

    const newAreas = [...briefingAreas, modifiersArea];
    const ocr = await Promise.all(
        newAreas.map(async ({ left, top, width, height }) => {
            const bufferCrop = await image.clone()
            .extract({ left, top, width, height })
            .resize({ width: width * 2 })
            .grayscale()
            .toBuffer();

            //await fsPromises.writeFile(`assets_dump/${getScreenshotId(file)}.png`, bufferCrop);

            return tesseractRecognize(bufferCrop);
        })
    );

    const [planetData, missionNameData, difficultyData, p1, p2, p3, subfactions] = ocr;

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
    const normalized = normalizeFromSet(missionNameData.replace(/\n/g, ''), missionNames.flat());

    if (!normalized) {
        console.log('----------')
        console.log(file);
        console.log(missionNameData.replace(/\n/g, ''));
        console.log(normalizeFromSet(missionNameData.replace(/\n/g, ''), missionNames.flat()));
    }
   
    return {
        fileName: file,
        planet: planetName,
        faction,
        mission: normalizeFromSet(missionNameData.replace(/\n/g, ''), missionNames.flat()),
        difficulty: getDifficultyInt(difficultyData),
        playersLvl,
        subfactions: parseSubFactions(subfactions)
    };
}

async function getFilesNumeric(dir) {
    const files = await fsPromises.readdir(dir);

    return files.sort((a, b) => {
        const matchA = a.match(/\((\d+)\)/);
        const matchB = b.match(/\((\d+)\)/);

        if (!matchA || !matchB) return a.localeCompare(b);

        const numA = parseInt(matchA[1], 10);
        const numB = parseInt(matchB[1], 10);

        return numA - numB;
    });
}

app.get('/seed', async (req, res) => {
    await GameModel.collection.drop().catch(() => {});
    const data = await GameModelBackup.find().lean();
    const newData = data.map(doc => ({ ...doc, _id: new mongoose.Types.ObjectId() }));
    await GameModel.insertMany(newData);
    res.send("Data copied successfully.");
});

let isBackingUp = false;

app.get('/backup', async (req, res) => {
    if (isBackingUp) {
        return res.status(429).send('Backup already in progress');
    }

    isBackingUp = true;

    try {
        await GameModelBackup.collection.drop().catch(() => {});
        const data = await GameModel.find().lean();
        const newData = data.map(doc => ({ ...doc, _id: new mongoose.Types.ObjectId() }));
        await GameModelBackup.insertMany(newData);
        res.send("Data copied successfully.");

    } catch (e) {
        res.status(500).send("Backup failed");
    } finally {
        isBackingUp = false;
    }
});



app.get('/backup_1', async ( req, res) => {
    await GameModelBackup_1.deleteMany({});
    const data = await GameModel.find().lean();
    const newData = data.map(doc => ({ ...doc, _id: new mongoose.Types.ObjectId() }));
    await GameModelBackup_1.insertMany(newData);
    res.send("Data copied successfully.");
});

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



await initTesseractWorkers();
process.on('exit', terminateTesseractWorkers);
process.on('SIGINT', terminateTesseractWorkers);

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

// app.get('/delete', (req, res) => {
//     GameModel.deleteMany({
//         id: { $gt: 556838, $lt: 600000 }
//     }).then(function (games) {
//         res.send(games);
//     }).catch(function (err) {
//         res.status(500).send(err);
//     });
// });