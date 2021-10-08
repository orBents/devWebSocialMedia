const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();

//Habilita o middleware que converte o corpo da requisição para JSON
app.use(express.json());
app.use(cors());

//Configura as rotas dentro da aplicação express.
app.use("/", routes);

//Inicialização do servidor
app.listen(8081, (request, response) =>{
    console.log("Estamos no ar e ao vivo!");
});