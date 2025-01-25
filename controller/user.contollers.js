import { User } from "../models/user.models.js";
import { sendCookie } from "../utils/features.js";
import bcrypt from "bcrypt";

export const userRegister = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        let user = await User.findOne({ email })
        if (user) return res.status(400).json({
            success: false,
            message: "User already exists!!"
        })
        user = await User.create({
            name: name,
            email: email,
            password: hashedPassword(password),
            role:role
        })
        sendCookie(user,res,"User registered successfully!!",201)
    } catch (error) {
        console.log("Error::", error)
    }
}
export const userLogin = async (req,res) =>{
    const {email,password}= req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({
        success:false,
        message:"Invalid credentials!!"
    })
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch) return res.status(400).json({
        success:false,
        message:"Invalid credentials!!"
    })
    sendCookie(user,res,"User logged in successfully!!",200)
}