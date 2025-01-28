import express from "express";
import { userLogin, userRegister } from "../controller/user.controller.js";

const router = express.Router();

router.post("/login", userLogin)
router.post("/register", userRegister)

export default router;