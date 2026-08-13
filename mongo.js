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
            armor: String,
            level: String
        }
    ],
    modifiers: [],
    subfactions: []
})

const GameModel = mongoose.model("matches", gameSchema);
const GameModelBackup = mongoose.model("matches_backup", gameSchema);
const GameModelBackup_1 = mongoose.model("matches_backup_2", gameSchema);

const GameModelBackup1 = mongoose.model("matches_backups_1", gameSchema);
const GameModelBackup2 = mongoose.model("matches_backups_2", gameSchema);
const GameModelBackup3 = mongoose.model("matches_backups_3", gameSchema);
const GameModelBackupTemp = mongoose.model("matches_backups_temp", gameSchema);

export {
    GameModel,
    GameModelBackup,
    GameModelBackup_1,
    
    GameModelBackup1,
    GameModelBackup2,
    GameModelBackup3,
    GameModelBackupTemp
}
