//It would be very hard to keep routes and logic of each route with functionality in the same file 
//so to avoid that we are extracting all the logic of each route and keeping it in controllers/posts.js

import PostMessage from "../models/postMessage.js";

export const getPosts = async(req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPosts = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        //  

        res.status(201).json(newPost) //201 means successful creation
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}