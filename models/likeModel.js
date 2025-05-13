//import mongoose instance
const mongoose = require("mongoose");

//rouute handler
const likeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    user:{
        type:String,
        required:true,
    }
});

//export model
module.exports = mongoose.model("Like", likeSchema);
