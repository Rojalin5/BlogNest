import express from "express";
import { isAuthenticated } from "../middlewares/authetication.js";
import { deletePost, editPost, getAllPost, newPost,getPost } from "../controller/post.controller.js";

const router = express.Router()

router.post("/newpost",isAuthenticated,newPost)
router.get("/getallpost/:id", isAuthenticated,getAllPost)
router.get("/getpost/:id", isAuthenticated,getPost)
router.put("/editpost/:id",isAuthenticated, editPost)
router.delete("/deletepost/:id",isAuthenticated, deletePost)


export default router;