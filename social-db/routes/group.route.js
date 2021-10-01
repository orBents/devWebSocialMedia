const express = require("express");
const group = require("../controllers/group.controller.js");

const router = express.Router();

router.post("/group", group.createGroup);
router.get("/group/:id", group.getById);
router.put("/group/:id", group.updateGroup);
router.delete("/group/:id", group.deleteGroup);

module.exports = router;