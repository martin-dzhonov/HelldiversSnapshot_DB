import os from 'os';
import { createWorker } from 'tesseract.js';

const CPU_COUNT = os.cpus().length;
const WORKER_COUNT = Math.max(1, CPU_COUNT - 1);

let tesseractWorkers = [];
let roundRobinIndex = 0;

export async function initTesseractWorkers() {
    tesseractWorkers = await Promise.all(
        Array.from({ length: WORKER_COUNT }).map(async () => {
            const worker = await createWorker('eng');
            return worker;
        })
    );
}

export async function terminateTesseractWorkers() {
    await Promise.all(tesseractWorkers.map(w => w.terminate()));
}

function getWorker() {
    const worker = tesseractWorkers[roundRobinIndex];
    roundRobinIndex = (roundRobinIndex + 1) % tesseractWorkers.length;
    return worker;
}

export async function tesseractRecognize(buffer) {
    const worker = getWorker();
    const { data } = await worker.recognize(buffer);
    return data.text;
}