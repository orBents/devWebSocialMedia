const express = require("express");
const user = require("../controllers/user.controller.js");

const router = express.Router();

router.post("/user", user.createUser);
router.get("/user/:id", user.getById);
router.put("/user/:id", user.updateUser);
router.delete("/user/:id", user.deleteUser);

module.exports = router;