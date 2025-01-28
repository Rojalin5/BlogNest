import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";

export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).json({
            success: false,
            message: "You need to login first!!"
        })
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded._id);
        if(!user) return res.status(404).json({
            success:false,
            message:"User not found"
        })
        req.user = user;
        next()
    } catch (error) {
        console.log(error)
    }
 
}