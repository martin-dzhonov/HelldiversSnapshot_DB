import dotenv from "dotenv";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const mongoose = require('mongoose');

dotenv.config();
const mongoKey = encodeURIComponent(process.env.MONGO_KEY)
mongoose.connect(`mongodb+srv://martindzhonov:${mongoKey}@serverlessinstance0.hrhcm0l.mongodb.net/hd`)

const gameSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    fileName: String,
    faction: String,
    planet: String,
    difficulty: Number,
    mission: String,
    createdAt: Date,
    players: [],
    weapons: [],
    modifiers: [],
})

const gameSchema1 = new mongoose.Schema({
    id: { type: Number, unique: true },
    fileName: String,
    faction: String,
    planet: String,
    difficulty: Number,
    mission: String, 
    createdAt: Date,
    players: [
        {
            strategem: [String],
            weapons: [String],
            level: String
        }
    ],
    modifiers: [],
})

const GameModel = mongoose.model("matches", gameSchema);
const TestModel = mongoose.model("matches_test", gameSchema);
const TestModel1 = mongoose.model("matches_test1", gameSchema1);

export {
    TestModel,
    GameModel,
    TestModel1
}
