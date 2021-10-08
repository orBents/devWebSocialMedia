const express = require("express");
const profile = require("../controllers/profile.controller.js");

const router = express.Router();

router.post("/profile", profile.createProfile);
router.get("/profiles", profile.getAllProfiles);
router.get("/profile/:id", profile.getById);
router.put("/profile/:id", profile.updateProfile);
router.delete("/profile/:id", profile.deleteProfile);

module.exports = router;