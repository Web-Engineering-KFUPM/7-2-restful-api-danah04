import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

/*Steps:
 *    - Create the environment file with name ".env" inside the 7-2-restful-api\server folder
 *    - Create two variables:
 *        - MONGO_URL=
 *        - PORT=5174
 *    - Copy connection string from your mongo cloud account: clusters->connection->MongoDB for VS Code
 *    - Save the connection string to MONGO_URL variable.
 *    - Replace the <db_password> with your database passowrd.
 *    - At the end of the connection string after back slash "/", write swe363_songs.
 *        For Example: mongodb+srv://<db_username>:<db_password>@cluster0.oh7ap07.mongodb.net/swe363_songs
 *    - Write your db_username & db_password in the connection string.
 *    - If connection successful → console.log("Mongo connected").
 *    - If error → console.error("Connection error:", err.message)
 *
 *  Hint:
 *    await mongoose.connect(process.env.MONGO_URL); */


// import dotenv and load environment variables from .env
await mongoose.connect(process.env.MONGO_URL);
dotenv.config();    

import { connectDB } from "./db.js";
import { Song } from "./models/song.model.js";

const app = express();
const PORT = process.env.PORT || 5174;

app.use(cors());              
app.use(express.json());

await connectDB(process.env.MONGO_URL);

// api/songs (Read all songs)


// api/songs (Insert song)

// /api/songs/:id (Update song)


// /api/songs/:id (Delete song)

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));