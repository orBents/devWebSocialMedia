const model = require("../models");

const Groupmember = model.groupmember_model;

function createGroupmember(req, res) {
    Groupmember.create({
        profileProfileId:req.body.profileProfileId,
        groupGroupIdt: req.body.groupGroupId,
        isAdmin: req.body.isAdmin,
    }).then((result) => res.json(result));
  }
  
  function getById(req, res) {
    Groupmember.findByPk(req.params.id).then((result) => res.json(result));
  }
  
  async function updateGroupmember(req, res) {
    await Groupmember.update(
      {
        profileProfileId:req.body.profileProfileId,
        groupGroupIdt: req.body.groupGroupId,
        isAdmin: req.body.isAdmin,
      },
      {
        where: {
            profileProfileId: req.params.id,
        },
      }
    );
    Groupmember.findByPk(req.params.id).then((result) => res.json(result));
  }
  
  async function deleteGroupmember(req, res) {
    await Groupmember.destroy({
      where: {
        profileProfileId: req.params.id,
      },
    });
    Groupmember.findByPk(req.params.id).then((result) => res.json(result));
  }
  
  module.exports = { createGroupmember, getById, updateGroupmember, deleteGroupmember };