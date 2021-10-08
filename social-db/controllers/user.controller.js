const models = require("../models");

const User = models.user_model;
const Profile = models.profile_model;

User.hasOne(Profile, { as: "Profile", foreignKey: "profileId" });
Profile.belongsTo(User, { as: "User", foreignKey: "userId" })

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({include: ['Profile']});
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {include: ['Profile']});
    if(user) return res.status(200).json(user);

    throw new Error('User not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if(user){
      await User.update(req.body, {
        where: { userId: req.params.id }
      });

      const updatedUser = await User.findByPk(req.params.id);
      return res.status(200).json(updatedUser)
    }
    throw new Error('User not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if(user){
      await User.destroy({
        where: { userId: req.params.id }
      });
      return res.status(200).send("User deleted");
    }
    throw new Error("User not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { createUser, getAllUsers, getById, updateUser, deleteUser };