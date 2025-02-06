import express from "express";
import { getMyDetail, userLogin, userLogOut, userRegister } from "../controller/user.controller.js";

const router = express.Router();

router.post("/login", userLogin)
router.post("/register", userRegister)
router.get("/mydetail/:id",getMyDetail)
router.get("/logout",userLogOut)

export default router;