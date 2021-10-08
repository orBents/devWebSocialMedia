const models = require("../models");
const Group = models.group_model;
const GroupMember = models.groupmember_model;

Group.hasMany(GroupMember, {as: "Group", foreignKey: "groupId" });
GroupMember.belongsTo(Group, {as: "Group", foreignKey: "groupId"})

const createGroup = async (req, res) => {
  try {
    const group = await Group.create(req.body);
    return res.status(200).json(group);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getById = async (req, res) => {
  try {
    const group = await Group.findByPk(req.params.id);
    if(group) return res.status(200).json(group);

    throw new Error('Group not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const updateGroup = async (req, res) => {
  try {
    const group = await Group.findByPk(req.params.id);

    if(group){
      await Group.update(req.body, {
        where: { groupId: req.params.id }
      });

      const updatedGroup = await Group.findByPk(req.params.id);
      return res.status(200).json(updatedGroup)
    }
    throw new Error('Group not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteGroup = async (req, res) => {
  try {
    const group = await Group.findByPk(req.params.id);
    if(group){
      await Group.destroy({
        where: { groupId: req.params.id }
      });
      return res.status(200).send("Group deleted");
    }
    throw new Error("Group not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
  
module.exports = { createGroup, getById, updateGroup, deleteGroup };