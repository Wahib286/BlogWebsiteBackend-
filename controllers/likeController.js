//import model
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

//business logic / export
exports.likePost = async (req, res) => {
  try {
    //fetch data from request body
    const { post, user } = req.body;

    //create like object
    const like = new Like({
      post,
      user,
    });

    const savedLike = await like.save();

    //find the post by ID, add the new like to its array
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    )
      .populate("likes") //Query to get actual comment instead of comment id
      .exec(); //execute this

    res.json({
      post: updatedPost,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error in Comments",
    });
  }
};

exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;

    //delete from like collection (jiski postid or like id match kare)
    const deletedLike = await Like.findOneAndDelete({ post, _id: like });

    //update the post collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deletedLike._id } },
      { new: true }
    );
    res.json({
      post: updatedPost,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error in Comments",
    });
  }
};
