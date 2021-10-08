const model = require("../models");

const Post = model.post_model;

function createPost(req, res) {
  Post.create({
    postId:req.body.postId,
    title: req.body.title,
    imageURL: req.body.imageURL,
    datePublished: req.body.datePublished,
    likes: req.body.likes,
    profileProfileId: req.body.profileProfileId,
  }).then((result) => res.json(result));
}

function getById(req, res) {
    Post.findByPk(req.params.id).then((result) => res.json(result));
}

async function updatePost(req, res) {
  await Post.update(
    {
        postId:req.body.postId,
        title: req.body.title,
        imageURL: req.body.imageURL,
        datePublished: req.body.datePublished,
        likes: req.body.likes,
        profileProfileId: req.body.profileProfileId,
    },
    {
      where: {
        postId: req.params.id,
      },
    }
  );
  Post.findByPk(req.params.id).then((result) => res.json(result));
}

async function deletePost(req, res) {
  await Post.destroy({
    where: {
      postId: req.params.id,
    },
  });
  Post.findByPk(req.params.id).then((result) => res.json(result));
}

module.exports = { createPost, getById, updatePost, deletePost };