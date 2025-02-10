import express from "express"
import {isAuthenticatedAdmin } from "../middlewares/authetication.js"
import { deleteAnyPost, deleteAnyUser, getAllPosts, getAllUsers } from "../controller/adminManagement.controller.js"

const router = express.Router()

router.get("/getallusers",isAuthenticatedAdmin,getAllUsers)
router.get("/getallposts",isAuthenticatedAdmin,getAllPosts)
router.delete("/deleteuser/:id",isAuthenticatedAdmin,deleteAnyUser)
router.delete("/deletepost/:id",isAuthenticatedAdmin,deleteAnyPost)


export default router;