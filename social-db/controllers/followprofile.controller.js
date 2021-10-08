const model = require("../models");

const Profile = model.profile_model;
const Followprofile = model.followprofile_model;

Profile.hasMany(Followprofile, {as: "FollowerProfile", foreignKey: "profileId" });
Followprofile.belongsTo(Profile, {as: "FollowerProfile", foreignKey: "followerId"})

const createFollowprofile = async (req, res) => {
  try {
    const followprofile = await Followprofile.create(req.body);
    return res.status(200).json(followprofile);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getAllFollowers = async (req, res) => {
  try {
    const followprofiles = await Followprofile.findAll({
      where: {
        profileId: req.params.id
      },
      include: ["FollowerProfile"]
    });
    return res.status(200).json({ followprofiles });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getById = async (req, res) => {
  try {
    const followprofile = await Followprofile.findByPk(req.params.id, {include: ["FollowerProfile"]});
    if(followprofile) return res.status(200).json(followprofile);

    throw new Error('Follow Profile not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const deleteFollowprofile = async (req, res) => {
  try {
    const followprofile = await Followprofile.findByPk(req.params.id);
    if(followprofile){
      await Followprofile.destroy({
        where: { followId: req.params.id }
      });
      return res.status(200).send("Follow Profile deleted");
    }
    throw new Error("Follow Profile not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
 
module.exports = { createFollowprofile, getAllFollowers, getById, deleteFollowprofile };