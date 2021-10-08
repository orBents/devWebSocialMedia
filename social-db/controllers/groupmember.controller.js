const models = require("../models");
const Groupmember = models.groupmember_model;

const createGroupmember = async (req, res) => {
  try {
    const groupMember = await Groupmember.create(req.body);
    return res.status(200).json(groupMember);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getAllGroups = async (req, res) => {
  try {
    const groups = await Groupmember.findAll({
      where: {
        profileId: req.params.id
      },
      include: "Group",
    });
    return res.status(200).json({groups});
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getAllGroupmembers = async (req, res) => {
  try {
    const group = await Groupmember.findAll({
      where: {
        groupId: req.params.id
      },
      include: "Profile",
    });
    return res.status(200).json(group);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getById = async (req, res) => {
  try {
    const groupMember = await Groupmember.findByPk(req.params.id);
    if(groupMember) return res.status(200).json(groupMember);

    throw new Error('GroupMember not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const updateGroupmember = async (req, res) => {
  try {
    const groupMember = await Groupmember.findByPk(req.params.id);

    if(groupMember){
      await Groupmember.update(req.body, {
        where: { groupMemberId: req.params.id }
      });

      const updatedGroupMember = await Groupmember.findByPk(req.params.id);
      return res.status(200).json(updatedGroupMember)
    }
    throw new Error('GroupMember not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteGroupmember = async (req, res) => {
  try {
    const groupMember = await Groupmember.findByPk(req.params.id);
    if(groupMember){
      await Groupmember.destroy({
        where: { groupMemberId: req.params.id }
      });
      return res.status(200).send("GroupMember deleted");
    }
    throw new Error("GroupMember not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { createGroupmember, getAllGroupmembers, getAllGroups, getById, updateGroupmember, deleteGroupmember };