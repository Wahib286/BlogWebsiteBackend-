const express = require("express");
const router = express.Router();

//import controlller
const { createComment } = require("../controllers/commentController");
const { createPost } = require("../controllers/postController");
const { getAllPosts } = require("../controllers/postController");
const { likePost, unlikePost } = require("../controllers/likeController");
//mapping
router.post("/comments/create",createComment );
router.post("/posts/create", createPost);
router.post("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);
//export
module.exports = router;