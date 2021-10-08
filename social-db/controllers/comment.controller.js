const model = require("../models");

const Comment = model.comment_model;

const createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    return res.status(200).json(comment);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getById = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if(comment) return res.status(200).json(comment);

    throw new Error('Comment not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);

    if(comment){
      await Comment.update(req.body, {
        where: { commentId: req.params.id }
      });

      const updatedComment = await Comment.findByPk(req.params.id);
      return res.status(200).json(updatedComment)
    }
    throw new Error('Comment not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if(comment){
      await Comment.destroy({
        where: { commentId: req.params.id }
      });
      return res.status(200).send("Comment deleted");
    }
    throw new Error("Comment not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
  
module.exports = { createComment, getById, updateComment, deleteComment };