import { User } from "../models/user.models.js";
import { Post } from "../models/post.models.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password")
        res.status(200).json({
            success: true,
            users
        })
    } catch (error) {
        console.log(error)
    }
}

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json({
            success: true,
            posts
        })
    } catch (error) {
        console.log(error)
 }
}

export const deleteAnyUser = async (req, res) => {
   try {
     const id = req.params.id; 
     const user = await User.findById({_id:id})
    if (!user) {
     return res.status(404).json({
         success:false,
         message:"User not found"
     })
 }
     await user.deleteOne();
     res.status(200).json({
         success:true,
         message:"User Deleted by Admin"
     })
   } catch (error) {
    console.log(error)
   }
} 

export const deleteAnyPost = async (req, res) => {
    try {
      const id = req.params.id; 
      const post = await Post.findById({_id:id})
     if (!post) {
      return res.status(404).json({
          success:false,
          message:"Post not found"
      })
  }
      await post.deleteOne();
      res.status(200).json({
          success:true,
          message:"Post Deleted by Admin"
      })
    } catch (error) {
     console.log(error)
    }
 } 
 
 
 
