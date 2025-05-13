//import mongoose instance
const mongoose = require("mongoose");

//rouute handler
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }
});

//export model
module.exports = mongoose.model("Comment", commentSchema);
