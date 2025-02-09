import mongoose from "mongoose";
import hashedPassword from "../middlewares/hashedPassword.js";

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        unique:true,
        required:true
    },
    role:{
        type:String,
        enum:["Admin"],
        default:"Admin"
    }
},{timestamps:true});

adminSchema.pre("save",hashedPassword);

export const Admin = mongoose.model("Admin",adminSchema)
