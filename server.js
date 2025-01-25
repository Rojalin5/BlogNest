import express from "express";
import { config } from "dotenv";
import { connectDB } from "./database/data.js";

const server = express();
config({
    path: "./database/config.env"
})
server.use(express.json());
connectDB();

server.get("/", (req, res) => {
    res.send("Hello World")
})

server.listen(process.env.PORT || 2000, () => {
    console.log("server is running")
})