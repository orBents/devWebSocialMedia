const model = require("../models");

const Group = model.group_model;

function createGroup(req, res) {
    Group.create({
        groupId:req.body.groupId,
        name: req.body.name,
        description: req.body.description,
        dateCreated: req.body.dateCreated,
    }).then((result) => res.json(result));
  }
  
  function getById(req, res) {
    Group.findByPk(req.params.id).then((result) => res.json(result));
  }
  
  async function updateGroup(req, res) {
    await Group.update(
      {
        groupId:req.body.groupId,
        name: req.body.name,
        description: req.body.description,
        dateCreated: req.body.dateCreated,
      },
      {
        where: {
            groupId: req.params.id,
        },
      }
    );
    Group.findByPk(req.params.id).then((result) => res.json(result));
  }
  
  async function deleteGroup(req, res) {
    await Group.destroy({
      where: {
        groupId: req.params.id,
      },
    });
    Group.findByPk(req.params.id).then((result) => res.json(result));
  }
  
  module.exports = { createGroup, getById, updateGroup, deleteGroup };