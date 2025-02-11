import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    category:{
        type:String,
        required:true
    },
    tags:[
        {type:String}
    ],
    createdAt:{
        type:Date,
        default:Date.now()
    }
},{timestamps:true})

export const Post = mongoose.model("Post",postSchema)