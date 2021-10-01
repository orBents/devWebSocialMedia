const express = require("express");
const comment = require("../controllers/comment.controller.js");

const router = express.Router();

router.post("/comment", comment.createComment);
router.get("/comment/:id", comment.getById);
router.put("/comment/:id", comment.updateComment);
router.delete("/comment/:id", comment.deleteComment);

module.exports = router;