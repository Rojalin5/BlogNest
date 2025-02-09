import express from "express";
import { config } from "dotenv";
import { connectDB } from "./database/data.js";
import userRouter from "./routes/user.routes.js"
import postRouter from "./routes/post.routes.js"
import adminRouter from "./routes/admin.routes.js"
import cookieParser from "cookie-parser";

const server = express();
config({
    path: "./database/config.env"
})
//midlewares
server.use(express.json());
server.use(cookieParser())
connectDB();

//using route
server.use("/api/v1/users", userRouter)
server.use("/api/v1/posts", postRouter)
server.use("/api/v1/admin", adminRouter)

server.get("/", (req, res) => {
    res.send("welcome")
})

server.listen(process.env.PORT || 1000, () => {
    console.log("server is running")
})