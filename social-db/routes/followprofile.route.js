const express = require("express");
const followprofile = require("../controllers/followprofile.controller.js");

const router = express.Router();

router.post("/followprofile", followprofile.createFollowprofile);
router.get("/followprofile/:id", followprofile.getById);
router.put("/followprofile/:id", followprofile.updateFollowprofile);
router.delete("/followprofile/:id", followprofile.deleteFollowprofile);

module.exports = router;
