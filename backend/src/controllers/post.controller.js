import { Post } from "../models/post.model.js";


//ceate post
const createPost = async (req, res) => {
    try {
        const { name, description, age } = req.body;       
        
        if (!name || !description || !age) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        const post = await Post.create({
            name,
            description,
            age
        }); 
        res.status(201).json({
            message: "Post created successfully!",
            post
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }  
}; 

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();        
        res.status(200).json({
            message: "Posts fetched successfully!",
            posts
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }

};

const updatePost = async (req, res) => {
    // to be implemented
    try {
        //basic validation
        if (Object.keys(req.body).length === 0 ) {
            return res.status(400).json({ message: "No fields to update!" });
        }
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        if (!post) {
            return res.status(404).json({ message: "Post not found!" });
        }
        res.status(200).json({
            message: "Post updated successfully!",
            post
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });   
    }
}

const deletePost = async (req, res) => {
    try {
        // to be implemented
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found!" });
        }   
        res.status(200).json({
            message: "Post deleted successfully!",
            deletedPost
        }); 
    } catch (error) {
        res   
    }
}

export { createPost,
    getPosts,
    updatePost,
    deletePost
 };