const model = require("../models");

const Comment = model.comment_model;

function createComment(req, res) {
    Comment.create({
        commentId:req.body.commentId,
        content: req.body.content,
        datePublished: req.body.datePublished,
        postPostId: req.body.postPostId,
    }).then((result) => res.json(result));
  }
  
  function getById(req, res) {
    Comment.findByPk(req.params.id).then((result) => res.json(result));
  }
  
  async function updateComment(req, res) {
    await Comment.update(
      {
          commentId:req.body.commentId,
          content: req.body.content,
          datePublished: req.body.datePublished,
          postPostId: req.body.postPostId,
      },
      {
        where: {
            commentId: req.params.id,
        },
      }
    );
    Comment.findByPk(req.params.id).then((result) => res.json(result));
  }
  
  async function deleteComment(req, res) {
    await Comment.destroy({
      where: {
        commentId: req.params.id,
      },
    });
    Comment.findByPk(req.params.id).then((result) => res.json(result));
  }
  
  module.exports = { createComment, getById, updateComment, deleteComment };