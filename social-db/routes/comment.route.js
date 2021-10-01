const express = require("express");
///const model = require("./models");

const commentController = require("../controllers/comment.controller.js");

const routes = express.Router();

routes.post("/comment", commentController.create);

module.exports = routes;