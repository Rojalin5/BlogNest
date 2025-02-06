import { Post } from "../models/post.models.js"
import { User } from "../models/user.models.js";
import { sendCookiePost, sendCookieUser } from "../utils/features.js"


export const newPost = async (req, res) => {
    try {
        const { title, description } = req.body;
        const user = await User.findById(req.user._id)
        if (!user) return res.status(401).json({
            success: false,
            message: "User not authenticated or user does not exist!"
        })
        const post = await Post.create({
            title: title,
            description: description,
            author: req.user._id
        })
        sendCookieUser(user, res, "Post added successfully", 201)

    } catch (error) {
        console.log("Error::", error)
    }
}

export const getPost = async (req, res) => {
    try {
        const userid = req.params.id;
        const posts = await Post.find({ author: userid })
        if (!posts || posts.length === 0) return res.status(404).json({
            success: false,
            message: "No Post Found"
        })
        sendCookiePost(posts, req, res, "Posts retrieved successfully", 200, req.user)
    } catch (error) {
        console.log("Error::", error)
    }
}


export const editPost = async (req, res) => {
    try {
        const postid = req.params.id;
        const { title, description } = req.body;
        const post = await Post.findOne({ _id: postid });

        if (!post) {
            return res.status(404).json({
                success: false,
                message: "No post found"
            });
        }

        if (!post.author._id == (postid)) {
            return res.status(401).json({
                success: false,
                message: "You are not authorized to edit this post"
            });
        }

        if (title) post.title = title;
        if (description) post.description = description;
        await post.save();

        sendCookiePost(post, req, res, "Post updated successfully", 200);
    } catch (error) {
        console.log("Error::", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export const deletePost = async (req, res) => {
    try {
        const postid = req.params.id;
        const post = await Post.findOne({ _id: postid })
        if (!post) {
            return res.status(404).json({
                success: false,
                message: "No Post Found"
            })
        }
        console.log("post:",postid)
        if (post._id.toString() !== (postid)) {
            return res.status(401).json({
                success: false,
                message: "You are not authorized to edit this post"
            })
        }
        console.log(post._id)

        await post.deleteOne();
        res.status(200).json({
            success: false,
            message: "Post Deleted Successfully"
        })
    }
    catch (error) {
        console.log("ERROR::", error)
    }
}