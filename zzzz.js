// async function processImage2(buffer, left, top, width, height) {
//     //const buffer = await fs.readFile(filePath);
//     const png = PNG.sync.read(buffer);
//     const croppedPixels = cropImage(png.data, png.width, png.height, left, top, width, height);
//     const croppedPng = new PNG({
//         width: width,
//         height: height,
//         filterType: -1,
//     });
//     croppedPng.data = croppedPixels;
//     const croppedImageBuffer = PNG.sync.write(croppedPng);
//     return { data: croppedImageBuffer, width: width, height: height };
// }
// async function processMultipleCrops(filePath) {
//     const buffer = await fs.readFile(filePath);
//     const results = [];
//     for (const { x, y, regionWidth, regionHeight } of crops) {
//         const result = await processImage2(buffer, x, y, regionWidth, regionHeight);
//         results.push(result);
//     }
//     return results;
// }

// app.get('/test2', async (req, res) => {
//     const filePath = 'Screenshots/latest/Screenshot (55650).png';

//     processMultipleCrops(filePath)
//         .then(results => {
//             results.forEach((result, index) => {
//                 fs.writeFile(`${index}.png`, result.data);
//             });
//         })
//         .catch(console.error);
// })

// function extractRegion(imageData, x, y, width, height) {
//     const image = PNG.sync.read(imageData);
//     const { width: imageWidth, height: imageHeight } = image;

//     const regionData = new Uint8Array(width * height * 4);
//     for (let row = 0; row < height; row++) {
//         for (let col = 0; col < width; col++) {
//             const srcIdx = ((y + row) * imageWidth + (x + col)) * 4; 
//             const destIdx = (row * width + col) * 4; 

//             regionData[destIdx] = image.data[srcIdx];     // Red
//             regionData[destIdx + 1] = image.data[srcIdx + 1]; // Green
//             regionData[destIdx + 2] = image.data[srcIdx + 2]; // Blue
//             regionData[destIdx + 3] = image.data[srcIdx + 3]; // Alpha
//         }
//     }

//     return {
//         data: regionData,
//         width: width,
//         height: height,
//     };
// }

// function cropImage1(data, imageWidth, imageHeight, left, top, width, height) {
//     const croppedData = Buffer.alloc(width * height * 4); // 4 bytes per pixel (RGBA)

//     for (let row = 0; row < height; row++) {
//         for (let col = 0; col < width; col++) {
//             const sourceIndex = ((top + row) * imageWidth + (left + col)) * 4; // RGBA
//             const destIndex = (row * width + col) * 4;

//             croppedData[destIndex] = data[sourceIndex];         // R
//             croppedData[destIndex + 1] = data[sourceIndex + 1]; // G
//             croppedData[destIndex + 2] = data[sourceIndex + 2]; // B
//             croppedData[destIndex + 3] = data[sourceIndex + 3]; // A
//         }
//     }

//     return croppedData;
// }
//app.get('/test6', async (req, res) => {
    //     console.time('Execution Time');
    
    //     const assetsDir = 'assets1';
    //     const files = await fs.readdir(dirPath);
    //     const loadoutFiles = files.filter((_, index) => index % 2 === 0).map((item) => `${dirPath}/${item}`);
    //     const loadoutData = await Promise.all(loadoutFiles.map(file => fs.readFile(file)));
    
    //     const assets = await fs.readdir(assetsDir);
    //     const assetsData = await Promise.all(
    //         assets.map(async (asset) => {
    //             const fileData = await fs.readFile(`${assetsDir}/${asset}`);
    //             return { name: asset, image: PNG.sync.read(fileData) };
    //         })
    //     );
    
    //     const groupedCrops = chunkArray(crops, 4);
    
    //     const resultsAll = [];
    //     for (const [loadoutIndex, loadout] of loadoutData.entries()) {
    //         const img1 = PNG.sync.read(loadout);
    
    //         // Process each group of crops
    //         const results = await Promise.all(
    //             groupedCrops.map(async (cropGroup) => {
    //                 const groupResults = [];
    
    //                 for (const crop of cropGroup) {
    //                     let maxDiff = 10000;
    //                     let bestMatch = null;
    
    //                     // Extract the region for this crop
    //                     const img1Region = extractRegion(img1, crop.x, crop.y, crop.regionWidth, crop.regionHeight);
    
    //                     await Promise.all(
    //                         assetsData.map(async ({ name: assetName, image: img2 }) => {
    //                             const diff = new PNG({ width: crop.regionWidth, height: crop.regionHeight });
    
    //                             const numDiffPixels = pixelmatch(
    //                                 img1Region.data,
    //                                 img2.data,
    //                                 diff.data,
    //                                 crop.regionWidth,
    //                                 crop.regionHeight,
    //                                 { threshold: 0.1 }
    //                             );
    
    //                             // Track the best match
    //                             if (numDiffPixels < maxDiff) {
    //                                 maxDiff = numDiffPixels;
    //                                 bestMatch = assetName;
    //                             }
    //                         })
    //                     );
    
    //                     groupResults.push({bestMatch, maxDiff});
    //                 }
    
    //                 return groupResults;
    //             })
    //         );
    //         resultsAll.push(results);
    //     }
    //     console.timeEnd('Execution Time');
    
    //     res.send(resultsAll)
    // })
    
// const automatonFiles = await fs.readdir('Screenshots/automaton/all');
// let automatonIndex = Number(automatonFiles[automatonFiles.length - 1].match(/\d+/)[0]) + 1;
// const terminidFiles = await fs.readdir('Screenshots/terminid/all');
// let terminidIndex = Number(terminidFiles[terminidFiles.length - 1].match(/\d+/)[0]) + 1;

// const result = gamesMerged.map((item, index) => {
//     const fileIndex = item.faction === 'automaton' ? automatonIndex : terminidIndex;
//     // fs.rename(`${dirPath}/${item.file}`,
//     //     `Screenshots/${item.faction}/latest/${getFileFromId(fileIndex)}`, function (err) {
//     //         if (err) throw err;
//     //     });

//     // fs.rename(`${dirPath}/${briefingFiltered[index].file}`,
//     //     `Screenshots/${briefingFiltered[index].faction}/latest/Screenshot (${getFileFromId(fileIndex + 1)}).png`, function (err) {
//     //         if (err) throw err;
//     //     });

//     if (item.faction === 'automaton') {
//         automatonIndex = automatonIndex + 2;
//     } else if (item.faction === 'terminid') {
//         terminidIndex = terminidIndex + 2;
//     }
//     return {
//         ...item,
//         file: getFileFromId(fileIndex),
//         loadoutImg: getAwsUrl(getFileFromId(fileIndex)),
//     }
// });

// console.timeEnd('Execution Time');
// console.log('Items: ' + gamesMerged.length)
// res.send(result);

//const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
// const bucketName = process.env.BUCKET_NAME;
// const bucketRegion = process.env.BUCKET_REGION;
// const accessKey = process.env.ACCESS_KEY;
// const secretAcessKey = process.env.SECRET_ACCESS_KEY;

// const s3 = new S3Client({
//     credentials: {
//         accessKeyId: accessKey,
//         secretAccessKey: secretAcessKey
//     },
//     region: bucketRegion
// })

// app.get('/test', async (req, res) => {
//     const dirPath = `Screenshots/test`;
//     fs.readdir(dirPath, (err, files) => {

//         //parse key pixels data
//         const pixelData = [];
//         for (let i = 0; i < files.length; i++) {
//             const promise = new Promise(async (resolve, reject) => {
//                 const imagePath = `${dirPath}/${files[i]}`;
//                 const image = sharp(imagePath);
//                 const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
//                 const briefingCoords = getPixelAt(82, 198, data, info);
//                 const loadoutCoords = getPixelAt(866, 876, data, info);

//                 resolve({
//                     name: files[i],
//                     p0: getPixelAt(82, 198, data, info),
//                     p1: getPixelAt(866, 876, data, info),
//                     p2: getPixelAt(92, 50, data, info),
//                 })

//             });
//             pixelData.push(promise);
//         }

//         //filter for briefing-loadout pairs
//         Promise.all(pixelData).then((values) => {

//             const screenPairs = [];
//             for (let j = values.length - 1; j > 0; j--) {
//                 const value = values[j];
//                 const nextValue = values[j - 1];
//                 if (isBriefing(value.p0) && isLoadout(nextValue.p1)) {
//                     screenPairs.push([nextValue.name, value.name]);
//                 }
//             }

//             const itemsPromiseArr = [];
//             for (let i = 0; i < screenPairs.length; i++) {
//                 const promise = new Promise(async (resolve, reject) => {
//                     const screenshotPath = `${dirPath}/${screenPairs[i][0]}`;
//                     const image = sharp(screenshotPath);
//                     const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
//                     let itemsFull = getPlayersLoadoutsBool(data, info);
//                     if (itemsFull) {
//                         resolve(screenPairs[i]);
//                     } else {
//                         resolve([]);
//                     }
//                 });
//                 itemsPromiseArr.push(promise)
//             }

//             Promise.all(itemsPromiseArr).then((values1) => {
//                 const validImages = [];
//                 for (let i = 0; i < values1.length; i++) {
//                     const element = values1[i];
//                     if (element.length > 0) {
//                         validImages.push(element[1]);
//                         validImages.push(element[0]);
//                     }
//                 }

//                 const filesFiltered = files.filter(function (el) {
//                     return validImages.indexOf(el) < 0;
//                 }).map((item) => dirPath + '/' + item);

//                 deleteFiles(filesFiltered, function (err) {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         res.send(validImages);
//                     }
//                 });
//             })
//         });
//     });
// });

// const getScreenshotNumber = (text) => {
//     const split1 = text.split(' ')[1];
//     const split2 = split1.split('.')[0];
//     const number = split2.replace('(', '').replace(')', '');
//     return number;
// }


// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// app.get('/faq', (req, res) => {
//     const baseDirectory = `ScreenshotsTest/New folder`
//     const baseDirectory2 = `ScreenshotsTest/New folder (2)`
//     const baseDirectory3 = `ScreenshotsTest/New folder (3)`

//     const coords = [519, 980, 1445]

//     for (let j = 0; j < getRandomInt(1, 10); j++) {
//         const randomDirInt = getRandomInt(0, 10);
//         let randomDirectory = "";
//         if (randomDirInt > 4) {
//             randomDirectory = baseDirectory;
//         } else {
//             randomDirectory = baseDirectory2;
//         }

//         fs.readdir(randomDirectory, (err, files) => {

//             for (let i = 0; i < getRandomInt(1, 100); i++) {
//                 const randomInt1 = getRandomInt(0, files.length - 1);
//                 const randomInt2 = getRandomInt(0, files.length - 1);
//                 const randomInt3 = getRandomInt(0, files.length - 1);
//                 const randomInt4 = getRandomInt(0, files.length - 1);

//                 Jimp.read(`${randomDirectory}/${files[randomInt1]}`, (err, image1) => {
//                     Jimp.read(`${randomDirectory}/${files[randomInt2]}`, (err, image2) => {
//                         Jimp.read(`${randomDirectory}/${files[randomInt3]}`, (err, image3) => {
//                             Jimp.read(`${randomDirectory}/${files[randomInt4]}`, (err, image4) => {
//                                 if (image1 && image2 && image3 && image4) {
//                                     const imgcrop1 = image2.clone().crop(coords[getRandomInt(0, 2)], 189, 420, 780);
//                                     const imgcrop2 = image3.clone().crop(coords[getRandomInt(0, 2)], 189, 420, 780);
//                                     const imgcrop3 = image4.clone().crop(coords[getRandomInt(0, 2)], 189, 420, 780);

//                                     const randomInt4 = getRandomInt(0, 10);

//                                     const map1 = image1.composite(imgcrop1, coords[getRandomInt(0, 2)], 189);
//                                     const map2 = map1.composite(imgcrop2, coords[getRandomInt(0, 2)], 189);
//                                     const map3 = randomInt4 > 5 ? map2.composite(imgcrop3, coords[getRandomInt(0, 2)], 189) : map1.composite(imgcrop2, coords[getRandomInt(0, 2)], 189);

//                                     fs.readdir(baseDirectory3, (err, files2) => {
//                                         const randomInt5 = getRandomInt(0, files2.length - 1);
//                                         Jimp.read(`${baseDirectory3}/${files2[randomInt5]}`, (err, image5) => {
//                                             const randomInt6 = getRandomInt(0, 100000);

//                                             map3.write(`Screenshot (${randomInt6}).png`);
//                                             image5.write(`Screenshot (${randomInt6 - 1}).png`);
//                                         })
//                                     })
//                                 }

//                             })
//                         })
//                     })
//                 })
//             }

//         })
//     }
// });
// app.get('/filter/:id', (req, res) => {

//     const factionName = req.params['id'];
//     const dirPath = `Screenshots/${factionName}/latest`;

//     fs.readdir(dirPath, (err, files) => {
//         const promisesArr = [];
//         for (let i = 0; i < files.length; i++) {
//             const file = files[i];
//             const promise = new Promise((resolve, reject) => {
//                 const imagePath = dirPath + '/' + file;
//                 Jimp.read(imagePath, (err, image) => {

//                     const imageColor = image.getPixelColor(92, 50);
//                     const colorRBA = Jimp.intToRGBA(imageColor)
//                     const faction = getFaction(colorRBA);

//                     resolve({
//                         file: file,
//                         faction: faction,
//                         rba: colorRBA
//                     })

//                 });
//             });
//             promisesArr.push(promise);
//         }

//         Promise.all(promisesArr).then((values) => {
//             const validImages = [];

//             for (let j = values.length - 1; j > 2; j--) {
//                 const value = values[j];
//                 const nextValue = values[j - 1];
//                 const nextNextValue = values[j - 2];

//                 if (value.faction === 'invalid' && nextValue.faction !== 'invalid') {
//                     validImages.push(nextValue.file)
//                     validImages.push(nextNextValue.file)
//                 }
//             }
//             const filesFiltered = files.filter(function (el) {
//                 return validImages.indexOf(el) < 0;
//             }).map((item) => dirPath + '/' + item);

//             deleteFiles(filesFiltered, function (err) {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     res.send(validImages);
//                 }
//             });
//         });
//     });
// });

// app.get('/filter2/:id', (req, res) => {

//     const factionName = req.params['id'];
//     const baseDirectory = `Screenshots/${factionName}/latest`
//     const assetsPromiseArr = [];
//     const matchDataPromiseArr = [];

//     fs.readdir('assets', (err, assets) => {
//         assets.forEach((asset) => {
//             assetsPromiseArr.push(new Promise((resolve, reject) => {
//                 Jimp.read('assets/' + asset, (err, image) => {
//                     resolve([image, asset]);
//                 });
//             }));
//         })

//         Promise.all(assetsPromiseArr).then((assets) => {
//             fs.readdir(baseDirectory, (err, files) => {
//                 for (let i = 0; i < files.length - 2; i++) {
//                     const screenshotPath = `${baseDirectory}/${files[i]}`;
//                     const screenshotPathNext = `${baseDirectory}/${files[i + 1]}`;

//                     const matchPromise = new Promise((resolve, reject) => {
//                         Jimp.read(screenshotPath, (err, image) => {
//                             const players = getPlayersLoadouts(assets, image);
//                             Jimp.read(screenshotPathNext, (err, imageNext) => {
//                                 const playersNext = getPlayersLoadouts(assets, imageNext);
//                                 if (players.length > 0 && playersNext.length === 0) {
//                                     const itemsCount = players.flat().length;
//                                     if (itemsCount % 4 === 0) {
//                                         resolve([files[i], files[i + 1]]);
//                                     } else {
//                                         resolve([]);
//                                     }
//                                 } else {
//                                     resolve([]);
//                                 }

//                             })
//                         })
//                     });
//                     matchDataPromiseArr.push(matchPromise);
//                 }

//                 Promise.all(matchDataPromiseArr).then((result) => {
//                     const validImages = result.flat();

//                     const filesFiltered = files.filter(function (el) {
//                         return validImages.indexOf(el) < 0;
//                     }).map((item) => baseDirectory + '/' + item);


//                     deleteFiles(filesFiltered, function (err) {
//                         if (err) {
//                             console.log(err);
//                         } else {
//                             res.send(validImages);
//                         }
//                     });
//                 })
//             });
//         });
//     })
// });

// const getPlayersLoadoutsBool = (buffer) => {

//     const playerGridCoords = [519, 980, 1445];
//     const playerBannerX = [585, 1046, 1510];
//     const playerBannerY = 215;
//     const padding = 7;
//     const itemCenterY = 877;
//     let playerCount = 0;
//     let itemCount = 0;

//     for (let i = 0; i < 3; i++) {
//         if (isPlayer(playerBannerX[i], playerBannerY, buffer)) {
//              playerCount++;
//             for (let j = 0; j < 4; j++) {
//                 let itemFound = false;
//                 const itemCenterX = playerGridCoords[i] + (stratImgSize * j) + (stratImgSize / 2) + (padding * ((j * 2) + 1));
//                 for (let k = itemCenterX - 20; k < itemCenterX + 20; k++) {
//                     for (let l = itemCenterY - 20; l < itemCenterY + 20; l++) {
//                         const p2 = getPixelAt(k, l, buffer);
//                         const p1 = { r: 42, g: 42, b: 42 };
//                         const deltaR = Math.abs(p1.r - p2.r);
//                         const deltaG = Math.abs(p1.g - p2.g);
//                         const deltaB = Math.abs(p1.b - p2.b);
//                         if (deltaR > 80 || deltaG > 80 || deltaB > 80) {
//                             itemFound = true;
//                             break;
//                         }
//                     }
//                 }
//                 if (itemFound) {itemCount++;}
//             }
//         }
//     }
    
//     return itemCount / playerCount === 4;
// }

// function addSequentialFilenames(filenames) {
//     const result = [];
//     for (let i = 0; i < filenames.length; i++) {
//         result.push(filenames[i]);
//         const match = filenames[i].match(/\((\d+)\)/);
//         if (match) {
//             const currentNumber = parseInt(match[1], 10);
//             const nextNumber = currentNumber + 1;
//             const newFilename = filenames[i].replace(/\(\d+\)/, `(${nextNumber})`);
//             result.push(newFilename);
//         }
//     }

//     return result;
// }
