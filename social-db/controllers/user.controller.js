const model = require("../models");

const User = model.user_model;

function createUser(req, res) {
  User.create({
    userId: req.body.userId,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    accountStatus: req.body.accountStatus,
    isAdmin: req.body.isAdmin,
  }).then((result) => res.json(result));
}

function getById(req, res) {
    User.findByPk(req.params.id).then((result) => res.json(result));
}

async function updateUser(req, res) {
  
  await User.update(
    {
        userId: req.body.userId,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        accountStatus: req.body.accountStatus,
        isAdmin: req.body.isAdmin
    },
    {
      where: {
        userId: req.params.id,
      },
    }
  );
  User.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteUser(req, res) {
  await User.destroy({
    where: {
      userId: req.params.id,
    },
  });

  User.findByPk(req.params.id).then((result) => res.json(result));
}

module.exports = { createUser, getById, updateUser, deleteUser };