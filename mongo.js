import dotenv from "dotenv";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const mongoose = require('mongoose');

dotenv.config();
const mongoKey = encodeURIComponent(process.env.MONGO_KEY)
mongoose.connect(`mongodb+srv://martindzhonov:${mongoKey}@serverlessinstance0.hrhcm0l.mongodb.net/hd`)

const gameSchema = new mongoose.Schema({
    id: Number,
    faction: String,
    planet: String,
    difficulty: Number,
    mission: String,
    createdAt: Date,
    players: [],
    modifiers: [],
})
const GameModel = mongoose.model("matches", gameSchema);

export {
    GameModel
}
