const model = require("../models");

const Post = model.post_model;

const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if(post) return res.status(200).json(post);

    throw new Error('Post not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    return res.status(200).json({ posts });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getAllGroupPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: {
        groupId: req.params.id
      }
    });
    return res.status(200).json({ posts });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


const updatePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if(post){
      await Post.update(req.body, {
        where: { postId: req.params.id }
      });

      const updatedPost = await Post.findByPk(req.params.id);
      return res.status(200).json(updatedPost)
    }
    throw new Error('Post not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if(post){
      await Post.destroy({
        where: { postId: req.params.id }
      });
      return res.status(200).send("Post deleted");
    }
    throw new Error("Post not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { createPost, getById, getAllPosts, getAllGroupPosts, updatePost, deletePost };