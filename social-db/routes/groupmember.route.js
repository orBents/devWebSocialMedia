const express = require("express");
const groupmember = require("../controllers/groupmember.controller.js");

const router = express.Router();

router.post("/groupmember", groupmember.createGroupmember);
router.get("/groupmember/:id", groupmember.getById);
router.put("/groupmember/:id", groupmember.updateGroupmember);
router.delete("/groupmember/:id", groupmember.deleteGroupmember);

module.exports = router;