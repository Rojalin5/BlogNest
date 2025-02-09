import express from "express";
import {  isAuthenticatedAdmin } from "../middlewares/authetication.js";
import { adminLogin, adminRegister, getMyDetail, logOutAdmin } from "../controller/admin.controller.js";


const router = express.Router();

router.post("/register",adminRegister)
router.post("/login",adminLogin)
router.get("/getmydetails/:id",getMyDetail)
router.get("/logout",isAuthenticatedAdmin,logOutAdmin)

export default router;