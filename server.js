import express from "express";
import { config } from "dotenv";
import { connectDB } from "./database/data.js";
import userRouter from "./routes/user.route.js"

const server = express();
config({
    path: "./database/config.env"
})
//midlewares
server.use(express.json());

connectDB();

//using route
server.use("/api/v1/users",userRouter)
server.get("/", (req, res) => {
    res.send("welcome")
})

server.listen(process.env.PORT || 1000, () => {
    console.log("server is running")
})