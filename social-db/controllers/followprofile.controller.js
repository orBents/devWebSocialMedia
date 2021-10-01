const model = require("../models");

const Followprofile = model.followprofile_model;

function createFollowprofile(req, res) {
    Followprofile.create({
        following_Id:req.body.following_Id,
        profileProfileId: req.body.profileProfileId,
        followerId: req.body.followerId,
    }).then((result) => res.json(result));
  }
  
  function getById(req, res) {
    Followprofile.findByPk(req.params.id).then((result) => res.json(result));
  }
  
  async function updateFollowprofile(req, res) {
    await Followprofile.update(
      {
        following_Id:req.body.following_Id,
        profileProfileId: req.body.profileProfileId,
        followerId: req.body.followerId,
      },
      {
        where: {
            following_Id: req.params.id,
        },
      }
    );
    Followprofile.findByPk(req.params.id).then((result) => res.json(result));
  }
  
  async function deleteFollowprofile(req, res) {
    await Followprofile.destroy({
      where: {
        following_Id: req.params.id,
      },
    });
    Followprofile.findByPk(req.params.id).then((result) => res.json(result));
  }
  
  module.exports = { createFollowprofile, getById, updateFollowprofile, deleteFollowprofile };