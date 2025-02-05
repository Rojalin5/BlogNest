import express from "express";
import { isAuthenticated } from "../middlewares/authetication.js";
import { deletePost, editPost, getPost, newPost } from "../controller/post.controller.js";

const router = express.Router()

router.post("/newpost",isAuthenticated,newPost)
router.get("/getmypost", isAuthenticated,getPost)
router.put("/editpost",isAuthenticated, editPost)
router.delete("/deletepost",isAuthenticated, deletePost)


export default router;