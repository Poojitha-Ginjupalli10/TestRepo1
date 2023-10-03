//Here we are going to add all the routes that have to do something with posts
import express from 'express';

import { getPosts, createPosts } from '../controllers/posts.js';

const router = express.Router();

//Now we can start adding routes    it will not work if just enter localhost:5000/ because for every route we have made a prefix of /posts in index.js file 
//so it will work if u use http://localhost:5000/posts
/*1st one=> */ router.get('/', getPosts);
router.post('/', createPosts);



export default router;