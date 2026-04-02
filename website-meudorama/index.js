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

app.get("/doramas", function(req,res) {

  const doramas = [
    {
      nome: "Pretendente Surpresa",
      descricao: "Jo Yoo-jung se apaixona por Sung-hoon, que fica em uma situação difícil com Young-seo. Tae-moo e Ha-ri tentam esconder seu relacionamento no trabalho.",
      qtd_avaliacao: 1200,
      favoritos: 1200,
      genero: "Comédia Romântica",
      imagem: "/imgs/pretendente.png"
    },
    {
      nome: "Sorriso Real",
      descricao: "Goo Won (Lee Jun-ho), um herdeiro de hotel que odeia sorrisos falsos, e Cheon Sa-rang (Yoon-a), uma funcionária sorridente. Em meio a uma disputa por herança, eles se apaixonam, transformando hostilidade em amor.",
      qtd_avaliacao: 1200,
      favoritos: 1200,
      genero: "Comédia Romântica",
      imagem: "/imgs/sorriso.png"
    },
    {
      nome: "Sr. Rainha",
      descricao: "Goo Won (Lee Jun-ho), um herdeiro de hotel que odeia sorrisos falsos, e Cheon Sa-rang (Yoon-a), uma funcionária sorridente. Em meio a uma disputa por herança, eles se apaixonam, transformando hostilidade em amor.",
      qtd_avaliacao: 1200,
      favoritos: 1200,
      genero: "Comédia Romântica",
      imagem: "/imgs/sr-rainha.png"
    },
      {
      nome: "Meu Demônio Favorito",
      descricao: "Goo Won (Lee Jun-ho), um herdeiro de hotel que odeia sorrisos falsos, e Cheon Sa-rang (Yoon-a), uma funcionária sorridente. Em meio a uma disputa por herança, eles se apaixonam, transformando hostilidade em amor.",
      qtd_avaliacao: 1200,
      favoritos: 1200,
      genero: "Comédia Romântica",
      imagem: "/imgs/demonio.png"
    },
    {
      nome: "Pousando no Amor",
      descricao: "Goo Won (Lee Jun-ho), um herdeiro de hotel que odeia sorrisos falsos, e Cheon Sa-rang (Yoon-a), uma funcionária sorridente. Em meio a uma disputa por herança, eles se apaixonam, transformando hostilidade em amor.",
      qtd_avaliacao: 1200,
      favoritos: 1200,
      genero: "Comédia Romântica",
      imagem: "/imgs/pousando.png"
    },
    {
      nome: "Apesar de Tudo, Amor",
      descricao: "Goo Won (Lee Jun-ho), um herdeiro de hotel que odeia sorrisos falsos, e Cheon Sa-rang (Yoon-a), uma funcionária sorridente. Em meio a uma disputa por herança, eles se apaixonam, transformando hostilidade em amor.",
      qtd_avaliacao: 1200,
      favoritos: 1200,
      genero: "Comédia Romântica",
      imagem: "/imgs/apesar.png"
    },
    {
      nome: "Rainha das Lágrimas",
      descricao: "Goo Won (Lee Jun-ho), um herdeiro de hotel que odeia sorrisos falsos, e Cheon Sa-rang (Yoon-a), uma funcionária sorridente. Em meio a uma disputa por herança, eles se apaixonam, transformando hostilidade em amor.",
      qtd_avaliacao: 1200,
      favoritos: 1200,
      genero: "Comédia Romântica",
      imagem: "/imgs/rainha.png"
    },
    {
      nome: "O rei de Porcelana",
      descricao: "Goo Won (Lee Jun-ho), um herdeiro de hotel que odeia sorrisos falsos, e Cheon Sa-rang (Yoon-a), uma funcionária sorridente. Em meio a uma disputa por herança, eles se apaixonam, transformando hostilidade em amor.",
      qtd_avaliacao: 1200,
      favoritos: 1200,
      genero: "Comédia Romântica",
      imagem: "/imgs/porcelana.png"
    }
  ];
  res.render("doramas", {
    doramas : doramas
  });
});

app.get("/atores", function(req,res) {
  res.render("atores");
});

app.get("/noticias", function(req,res) {
  res.render("noticias");
});

app.get("/contato", function(req,res) {
  res.render("contato");
});