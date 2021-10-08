const models = require("../models");
const User = models.user_model;
const Profile = models.profile_model;
const GroupMember = models.groupmember_model;

Profile.hasMany(GroupMember, {as: "Profile", foreignKey: "profileId" });
GroupMember.belongsTo(Profile, {as: "Profile", foreignKey: "profileId"});


const createProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.body.userId);
    if(user){
      const profile = await Profile.create(req.body);
      return res.status(200).json(profile);
    }
    throw new Error('User not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.findAll({include: ['User']});
    return res.status(200).json({ profiles });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getById = async (req, res) => {
  try {
    const profile = await Profile.findByPk(req.params.id, {include: ['User']});
    if(profile) return res.status(200).json(profile);

    throw new Error('Profile not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const updateProfile = async (req, res) => {
  try {
    const profile = await Profile.findByPk(req.params.id);
    if(profile){
      const user = await User.findByPk(req.body.userId);
      if(user){
        await Profile.update(req.body, {
          where: { profileId: req.params.id }
        });

        const updatedProfile = await Profile.findByPk(req.params.id);
        return res.status(200).json(updatedProfile)
      }
    }
    throw new Error('Profile not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteProfile = async (req, res) => {
  try {
    const profile = await Profile.findByPk(req.params.id);
    if(profile){
      await Profile.destroy({
        where: { profileId: req.params.id }
      });
      return res.status(200).send("Profile deleted");
    }
    throw new Error("Profile not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { createProfile, getAllProfiles, getById, updateProfile, deleteProfile };