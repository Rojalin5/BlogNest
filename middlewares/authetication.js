import jwt from "jsonwebtoken";
import { User } from "./models/user.models.js";

export const isAuthenticated = async (req, res, next) => {
    const {token} = req.cookies;
    if(!token) return 
    res.status(401).json({
        success:false,
        message:"You need to login first!!"
    })
    const decoded = jwt.verify(token,process.env.JWT_SECRECT);
    req.user = await User.findById(decoded._id);
}