import { createRequire } from 'module';
import dotenv from "dotenv";
const require = createRequire(import.meta.url);
const sharp = require('sharp');
const fsPromises = require('fs').promises;
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { createWorker } = require('tesseract.js');
const tesseractWorker = await createWorker('eng');

dotenv.config();
const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const accessKey = process.env.ACCESS_KEY;
const secretAcessKey = process.env.SECRET_ACCESS_KEY;

const s3 = new S3Client({
    credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretAcessKey
    },
    region: bucketRegion
})

import {
    factionNames,
    difficulties,
    dir_latest,
    factionPlanets,
    playerColors,
    modifierNames
} from './constants.js';

async function tesseractRecognize(buffer) {
    const { data: { text } } = await tesseractWorker.recognize(buffer);
    return text;
}

async function deleteFilesBulk(filePaths) {
    const deletionPromises = filePaths.map(async (filePath) => {
        try {
            await fsPromises.unlink(filePath);
        } catch (err) {
            console.error(`Failed to delete ${filePath}: ${err.message}`);
        }
    });
    await Promise.all(deletionPromises);
}

function getImageData(file) {
    return new Promise(async (resolve, reject) => {
        const { data, info } = await sharp(`${dir_latest}/${file}`).raw().toBuffer({ resolveWithObject: true });
        resolve({
            name: file,
            buffer: { data, info }
        });
    })
}

async function uploadImage(imageBuffer, key) {
    const uploadParams = {
        Bucket: bucketName,
        Key: key,
        Body: imageBuffer,
        ContentType: 'image/png'
    };
    await s3.send(new PutObjectCommand(uploadParams));
}

async function stitchAndUploadPair(img1Path, img2Path, outputName) {
    const [image1, image2] = await Promise.all([
        sharp(img1Path).resize({ width: 1000 }).toBuffer(),
        sharp(img2Path).resize({ width: 1000 }).toBuffer()
    ]);

    const [image1Metadata, image2Metadata] = await Promise.all([
        sharp(image1).metadata(),
        sharp(image2).metadata()
    ]);

    const stitchedImageBuffer = await sharp({
        create: {
            width: Math.max(image1Metadata.width, image2Metadata.width),
            height: image1Metadata.height + image2Metadata.height,
            channels: 4,
            background: { r: 255, g: 255, b: 255, alpha: 0 }
        }
    })
        .composite([
            { input: image1, top: 0, left: 0 },
            { input: image2, top: image1Metadata.height, left: 0 }
        ])
        .jpeg({ quality: 80 })
        .toBuffer();

    await uploadImage(stitchedImageBuffer, outputName);
}

function cropImage(data, imageWidth, x, y, width, height) {
    const croppedData = Buffer.alloc(width * height * 4);
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            const sourceIndex = ((y + row) * imageWidth + (x + col)) * 4;
            const destIndex = (row * width + col) * 4;
            croppedData[destIndex] = data[sourceIndex];         // R
            croppedData[destIndex + 1] = data[sourceIndex + 1]; // G
            croppedData[destIndex + 2] = data[sourceIndex + 2]; // B
            croppedData[destIndex + 3] = data[sourceIndex + 3]; // A
        }
    }
    return croppedData;
}

const extractRegion = async (buffer, crop) => {
    return sharp(buffer)
        .extract({
            left: crop.x,
            top: crop.y,
            width: crop.regionWidth,
            height: crop.regionHeight
        })
        .raw()
        .ensureAlpha()
        .toBuffer();
};

const getPixelAt = (x, y, buffer) => {
    const pixelIndex = (y * buffer.info.width + x) * 4;
    return { r: buffer.data[pixelIndex], g: buffer.data[pixelIndex + 1], b: buffer.data[pixelIndex + 2] };
}

const isColor = (pixel, color) => {
    if (Math.abs(pixel.r - color.r) < 6 &&
        Math.abs(pixel.g - color.g) < 6 &&
        Math.abs(pixel.b - color.b) < 6) {
        return true;
    }
    return false;
}

const getFileFromId = (id) => {
    return `Screenshot (${id}).png`
}

const isBriefing = (pixel) => {
    return isColor(pixel, { r: 255, g: 255, b: 255 })
}

const isLoadout = (pixel) => {
    let result = false;
    playerColors.forEach(color => {
        if (isColor(pixel, color)) {
            result = true;
        }
    });
    return result;
}

const validPlayers = (playerGroups) => {
    const result = playerGroups
        .filter(group => !group.some(({ match, diff }) => diff > 600))
        .filter(group => !group.every(({ match, diff }) => match === "empty.png"))
        .map(group => group.map(({ match }) => match.replace(/_new/g, '').replace(/.png/g, '')).filter((match) => match !== "empty"))
        .filter(group => group.length > 2)
    return result;
};

const getDifficultyInt = (text) => {
    let diffIndex = -2;
    difficulties.forEach((arrItem, arrIndex) => {
        const indexFound = text.indexOf(arrItem) !== -1;
        if (indexFound) diffIndex = arrIndex;
    })

    return 7 + diffIndex;
}

//handle tesseract error reads
function getPlanetName(planetNameRaw) {
    const planetNames = Object.values(factionPlanets).flat();
    let bestMatch = null;
    let highestSimilarity = 0;

    planetNames.forEach(name => {
        const simScore = stringMatchScore(planetNameRaw, name);
        if (simScore > highestSimilarity && simScore >= 0.65) {
            highestSimilarity = simScore;
            bestMatch = name;
        }
    });

    return bestMatch;
}

function stringMatchScore(s1, s2) {
    const longer = s1.length > s2.length ? s1 : s2;
    const shorter = s1.length > s2.length ? s2 : s1;
    const longerLength = longer.length;

    if (longerLength === 0) return 1.0;
    const editDistance = levenshteinDistance(longer, shorter);
    return (longerLength - editDistance) / longerLength;
}

function levenshteinDistance(s1, s2) {
    const dp = Array.from({ length: s2.length + 1 }, () => []);
    for (let i = 0; i <= s2.length; i++) dp[i][0] = i;
    for (let j = 0; j <= s1.length; j++) dp[0][j] = j;

    for (let i = 1; i <= s2.length; i++) {
        for (let j = 1; j <= s1.length; j++) {
            dp[i][j] = Math.min(
                dp[i - 1][j - 1] + (s1[j - 1] === s2[i - 1] ? 0 : 1), dp[i][j - 1] + 1, dp[i - 1][j] + 1
            );
        }
    }

    return dp[s2.length][s1.length];
}

function getFaction(planetNameRaw) {
    const planetName = getPlanetName(planetNameRaw.replace(/\n/g, ""));
    let faction = null;
    for (let key in factionPlanets) {
        if (factionPlanets[key].includes(planetName)) {
            faction = key;
        }
    }
    return { planetName, faction };
}

const getMissionModifiers = (text) => {
    const result = [];
    Object.keys(modifierNames).forEach((item, index) => {
        if (text.includes(item)) {
            result.push(modifierNames[item])
        }
    })
    return result;
}

async function getFactionIndices() {
    const indices = {};
    for (const faction of factionNames) {
        const files = await fsPromises.readdir(`Screenshots/${faction}/all`);
        indices[`${faction}`] = files.length;
    }
    return {
        automatonIndex: indices.automaton + 100000,
        terminidIndex: indices.terminid + 500000,
        illuminateIndex: indices.illuminate + 800000
    };
}

async function normalizeIds(matches) {
    let { terminidIndex, automatonIndex, illuminateIndex } = await getFactionIndices();

    const result = matches.map((match) => {
        let index = 0;
        switch (match.faction) {
            case "terminid":
                index = terminidIndex;
                terminidIndex = terminidIndex + 2;
                break;
            case "automaton":
                index = automatonIndex;
                automatonIndex = automatonIndex + 2;
                break;
            case "illuminate":
                index = illuminateIndex;
                illuminateIndex = illuminateIndex + 2;
                break;
            default:
                break;
        }
        return {
            ...match,
            fileName: match.id,
            id: index,
        }

    })
    return result;
};

function mergeArrayItems(array) {
    return array.reduce((result, _, i) => {
        if (i % 2 === 0) {
            result.push({ ...array[i + 1], ...array[i] });
        }
        return result;
    }, []);
}

function mergePairs(loadoutResult, briefingResult) {
    const itemsSorted = loadoutResult.concat(briefingResult).sort((a, b) => {
        const extractNumber = (id) => parseInt(id.match(/\((\d+)\)/)[1], 10);
        return extractNumber(a.id) - extractNumber(b.id);
    })
    const matchesRaw = mergeArrayItems(itemsSorted);
    const matchesFiltered = matchesRaw
        .filter((item) =>
            item.players.length > 0 &&
            item.faction !== null &&
            item.difficulty > 6);

    return matchesFiltered;
}

export {
    getImageData,
    tesseractRecognize,
    getFileFromId,
    getDifficultyInt,
    getMissionModifiers,
    getFaction,
    isBriefing,
    getPixelAt,
    isLoadout,
    validPlayers,
    cropImage,
    deleteFilesBulk,
    mergePairs,
    uploadImage,
    stitchAndUploadPair,
    extractRegion,
    getFactionIndices,
    normalizeIds
}
