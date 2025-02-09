import express from "express";
import { isAuthenticated } from "../middlewares/authetication.js";
import { getMyDetail, userLogin, userLogOut, userRegister } from "../controller/user.controller.js";

const router = express.Router();

router.post("/login", userLogin)
router.post("/register", userRegister)
router.get("/mydetail/:id",isAuthenticated,getMyDetail)
router.get("/logout", isAuthenticated,userLogOut)

export default router;