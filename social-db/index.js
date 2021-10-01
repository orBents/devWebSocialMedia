const express = require("express");
const model = require('./models');

const userRoute = require("./routes/user.route.js");
const profileRoute = require("./routes/profile.route.js");
const postRoute = require("./routes/post.route.js");
const commentRoute = require("./routes/comment.route.js");
const followprofileRoute = require("./routes/followprofile.route.js");
const groupmemberRoute = require("./routes/groupmember.route.js");


const app = express();


//Habilita o middleware que converte o corpo da requisição para JSON
app.use(express.json());

//Configura as rotas dentro da aplicação express.
app.use(userRoute);
app.use(profileRoute);
app.use(postRoute);
app.use(commentRoute);
app.use(followprofileRoute);
app.use(groupmemberRoute);

//Inicialização do servidor
app.listen(8888, (request, response) =>{
    console.log("Estamos no ar e ao vivo!");
});