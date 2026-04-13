//importando o módulo do express
import express from "express";

//criando uma instância do express
const app = express();

import DoramaController from "./controllers/DoramaController.js";
import AtoresController from "./controllers/AtoresController.js";
import NoticiaController from "./controllers/NoticiaController.js";
import PerfilController from "./controllers/PerfilController.js";

app.use("/", DoramaController);
app.use("/", AtoresController);
app.use("/", NoticiaController);
app.use("/", PerfilController);


//configurando o EJS - o set serve para configurar algo
app.set('view engine', 'ejs');

//configurando o EJS - o set serve para configurar algo
app.set('view engine', 'ejs');

//definindo a pasta "public" como diretório para arquivos estáticos
app.use(express.static('public'));

//rota principal
app.get("/", function(req, res) {
    res.render("index");
});

//iniciando o servidor na porta 8080
const port = 8080;
//precisa de uma porta e uma função pra tratar o erro (avisar caso o servidor não funcione)
app.listen(port, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log(`Servidor iniciado com sucesso no endereço http://localhost:${port}`);
  }
});

app.get("/contato", function(req,res) {
  res.render("contato");
});