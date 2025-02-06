import { User } from "../models/user.models.js";
import { sendCookieUser } from "../utils/features.js";
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
            password: password,
            role: role
        })
        sendCookieUser(user,res, "User registered successfully!!", 201)
    } catch (error) {
        console.log("Error::", error)
    }
}
export const userLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({
        success: false,
        message: "Invalid credentials!!"
    })
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({
        success: false,
        message: "Invalid credentials!!"
    })
    sendCookieUser(user,res, "User logged in successfully!!", 200)
}

export const getMyDetail = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }
        return res.status(200).json({
            success: true,
            message: "User found",
            user
        });
    } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};
export const userLogOut = async(req,res) =>{
    try {
        res.clearCookie("token",{
            httpOnly:true,
            secure:true
        });
        res.status(200).json({
            success:true,
            message:"User logged Out Successfully"
        })

    } catch (error) {
        console.log(error)
    }
}