//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//business logic / export 
exports.createComment = async(req,res)=>{
    try{
        //fetch data from request body
        const {post, user, body} = req.body;

        //create comment object 
        const comment = new Comment({
            post,user,body
        });

        const savedComment = await comment.save();

        //find the post by ID, add the new comment to its array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}} , {new: true})
                            .populates("comments") //Query to get actual comment instead of comment id
                            .exec(); //execute this 

        res.json({
            post: updatedPost,
        })
    }
    catch(error){
        res.status(500).json({
            error: "Error in Comments",
        });
    }
}

