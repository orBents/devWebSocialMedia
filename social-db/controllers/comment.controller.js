const model = require("../models");

const Comment = model.comment_model;

const create = (request, response)=>{
    ///Promises  
    Comment.create(request.body).then((object)=>{
        response.send(object);
    }).catch((error)=>{
        console.error(error);
        response.status(400).send(error);
    });
 };

module.exports = {
    create,
 };