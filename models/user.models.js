import mongoose from "mongoose";
import hashedPassword from "../middlewares/hashedPassword.js";
import { compare } from "bcrypt";

const userSchema = new mongoose.Schema({
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
        enum:["User"],
        default:"User"
    }
},{timestamps:true});

userSchema.pre("save",hashedPassword);

export const User = mongoose.model("User",userSchema);