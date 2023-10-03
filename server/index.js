import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();//we can use many diff methods on this app instance
app.use('/posts', postRoutes); //This says every route inside of postroutes is going to start with posts

app.use(bodyParser.json({ limit: "30mb", extended: true})); //sending some img which can be large in size so we say extended: true
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true})); //we are just setting up our body parser so that we can send req easily
app.use(cors());

//we are using mongo db atlas which is goig to store our database on their cloud

const CONNECTION_URL = 'mongodb+srv://memories_jsMastery:Memories123123@memories1.qqyphxz.mongodb.net/'
//Ofcourse in real applications you cannot share the credentials in this way so later we are going to create env variables to store these before deployment

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);