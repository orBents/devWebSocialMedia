const model = require("../models");

const Profile = model.profile_model;

function createProfile(req, res) {
  Profile.create({
    profileId: req.body.profileId,
    name: req.body.name,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    phone: req.body.phone,
    userUserId: req.body.userUserId,
  }).then((result) => res.json(result));
}

function getById(req, res) {
    Profile.findByPk(req.params.id).then((result) => res.json(result));
}

async function updateProfile(req, res) {
  await Profile.update(
    {
      profileId: req.body.profileId,
      name: req.body.name,
      dateOfBirth: req.body.dateOfBirth,
      gender: req.body.gender,
      phone: req.body.phone,
      userUserId: req.body.userUserId,
    },
    {
      where: {
        profileId: req.params.id,
      },
    }
  );
  Profile.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteProfile(req, res) {
  await Profile.destroy({
    where: {
      profileId: req.params.id,
    },
  });
}

module.exports = { createProfile, getById, updateProfile, deleteProfile };