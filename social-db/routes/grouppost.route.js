const express = require("express");
const groupPost = require("../controllers/grouppost.controller.js");

const router = express.Router();

router.post("/groupPost", groupPost.createGroupPost);
router.get("/groupPost/:id", groupPost.getById);
router.put("/groupPost/:id", groupPost.updateGroupPost);
router.delete("/groupPost/:id", groupPost.deleteGroupPost);

module.exports = router;