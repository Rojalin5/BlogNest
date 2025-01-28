import express from "express";
import { isAuthenticated } from "../middlewares/authetication.js";
import { editPost, getPost, newPost } from "../controller/post.controller.js";

const router = express.Router()

router.post("/newpost",isAuthenticated,newPost)
router.get("/getmypost", getPost)
router.put("/editpost", editPost)

export default router;