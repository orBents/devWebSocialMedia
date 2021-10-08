const express = require("express");
const post = require("../controllers/post.controller.js");

const router = express.Router();

router.post("/post", post.createPost);
router.get("/post/:id", post.getById);
router.get("/posts", post.getAllPosts);
router.get("/posts/group/:id", post.getAllGroupPosts);
router.put("/post/:id", post.updatePost);
router.delete("/post/:id", post.deletePost);

module.exports = router;