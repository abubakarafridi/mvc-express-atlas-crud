import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())

const mongoUri = process.env.MONGODB_ATLAS_URI;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then (() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("error connecting to MongoDB", err.message)
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
})


app.listen(3000, () => {
    console.log("The port is listening on port 3000");
})