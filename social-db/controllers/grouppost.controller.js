const model = require("../models");

const GroupPost = model.grouppost_model;

function createGroupPost(req, res) {
    GroupPost.create({
        groupPostId:req.body.groupPostId,
        postPostId: req.body.postPostId,
        groupGroupId: req.body.groupGroupId,
        profileProfileId: req.body.profileProfileId,
    }).then((result) => res.json(result));
  }
  
  function getById(req, res) {
    GroupPost.findByPk(req.params.id).then((result) => res.json(result));
  }
  
  async function updateGroupPost(req, res) {
    await GroupPost.update(
      {
        groupPostId:req.body.groupPostId,
        postPostId: req.body.postPostId,
        groupGroupId: req.body.groupGroupId,
        profileProfileId: req.body.profileProfileId,
      },
      {
        where: {
            groupPostId: req.params.id,
        },
      }
    );
    GroupPost.findByPk(req.params.id).then((result) => res.json(result));
  }
  
  async function deleteGroupPost(req, res) {
    await GroupPost.destroy({
      where: {
        groupPostId: req.params.id,
      },
    });
    GroupPost.findByPk(req.params.id).then((result) => res.json(result));
  }
  
  module.exports = { createGroupPost, getById, updateGroupPost, deleteGroupPost };