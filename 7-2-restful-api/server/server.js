import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

/*Steps:
 =================================================================
 *  TASK 2 — Create Schema & Model (file: server/models/song.model.js)
 *  =================================================================
 *  Goal:
 *    - Define a Song schema with fields:
 *        title (String, required)
 *        artist (String, required)
 *        year (Number)
 *    - Export a Mongoose model named "Song".
 *
 *  Example:
 *    name: { type: String, required: true, trim: true }
 *      Note: trim is used to remove the extra spaces automatically.
 * 
 *  Syntax hint:
 * 
      const songSchema = new mongoose.Schema({
        title:  { type: _______, required: _____, trim: _____ },
        artist: { type: _______, required: _____, trim: _____ },
        year:   { type: _______, min: _____, max: _____ }
      }, { timestamps: _____ });

      const Song = mongoose.model("Song", songSchema);
 */


// import dotenv and load environment variables from .env

import { connectDB } from "./db.js";
import { Song } from "./models/song.model.js";

const app = express();
const PORT = process.env.PORT || 5174;

app.use(cors());              
app.use(express.json());

await connectDB(process.env.MONGO_URL);

dotenv.config();
await mongoose.connect(process.env.MONGO_URL);

// api/songs (Read all songs)


// api/songs (Insert song)

// /api/songs/:id (Update song)


// /api/songs/:id (Delete song)

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));