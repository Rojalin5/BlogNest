import { Admin } from "../models/admin.models.js";
import { sendCookieAdmin } from "../utils/features.js";

export const adminRegister = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        let admin = await Admin.findOne({ email })
        if (admin) return res.status(400).json({
            success: false,
            message: "Admin with this email already exists."
        })
        admin = await Admin.create({
            name: name,
            email: email,
            password: password,
            role: role
        })
        sendCookieAdmin(admin, res, "You are Registered Successfully", 200)
    }

    catch (error) {
        console.log(error)
    }
}
export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email })
        if (!admin) return res.status(404).json({
            success: false,
            message: "Invalid credentials!!"
        })
        sendCookieAdmin(admin,res, "Logged in Successfully", 200)
    }
    catch (error) {
        console.log(error)
    }
}
export const getMyDetail = async (req, res) => {
   try {
     const admin = await Admin.findById(req.params.id);
     if (!admin) return res.status(404).json({
         success: false,
         message: "Admin not found"
     })
     return res.status(200).json({
         success: true,
         message: "Admin Found Successfully",
         //check later how to hide password
         admin
     })
   } catch (error) {
    console.log(error)
   }
}

export const logOutAdmin = async (req,res) =>{
    try {
        res.clearCookie("token",{
            httpOnly:true,
            secure:true
        })
        res.status(200).json({
            success:true,
            message:"Logged Out Successfully."
        })
    } catch (error) {
        console.log(error)
    }
}