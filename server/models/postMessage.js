import mongoose from "mongoose";

//creating a schema 

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String, // we r going to convert an img into string using base64
    likeCount: {  //Instead of just specifying it as num we intitalized an object to add aditional information alongside of type
        type: Number,
        default: 0
    },
    createdAt: { //createdAt property is also an obj again
        type: Date,
        default: new Date()
    },
})

//Now we have a schema but we should turn it into a model 
//To do that:-
const PostMessage = mongoose.model('PostMessage', postSchema);  //Make sure both PostMessage are named exactly the same

export default PostMessage;
//We r exporting a mongoose model from the postMessage file
//and on that model later on we will be able to run commands such as CRUD operations