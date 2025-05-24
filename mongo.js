import dotenv from "dotenv";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const mongoose = require('mongoose');

dotenv.config();
const mongoKey = encodeURIComponent(process.env.MONGO_KEY)
mongoose.connect(`mongodb+srv://martindzhonov:${mongoKey}@serverlessinstance0.hrhcm0l.mongodb.net/hd`)

const gameSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    createdAt: Date,
    planet: String,
    faction: String,
    mission: String, 
    difficulty: Number,
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
const GameModelBackup = mongoose.model("matches_backup", gameSchema);
const GameModelTest = mongoose.model("matches_test1", gameSchema);

export {
    GameModel,
    GameModelBackup,
    GameModelTest
}
