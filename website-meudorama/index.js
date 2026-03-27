//importando o módulo do express
const express = require("express");

//criando uma instância do express
const app = express();

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
