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
    
  const atores = [
    {
      nome: "Cha Eun-woo",
      descricao: "Além de ser integrante do grupo de K-pop ASTRO, Cha Eun-woo conquistou o mundo dos doramas com seu carisma e presença marcante. Ele se tornou o queridinho das comédias românticas após protagonizar sucessos como Minha Identidade é a Beleza de Gangnam e Beleza Verdadeira.",
      imagem: "/imgs/atores/cha.png"
    },
    {
      nome: "Hyun Bin",
      descricao: "Com mais de duas décadas de carreira, Hyun Bin é sinônimo de prestígio e sucesso comercial. Ele se tornou um fenômeno global ao protagonizar Pousando no Amor, mas sua trajetória é repleta de marcos, desde o clássico Meu Nome é Kim Sam-soon até o inovador Jardim Secreto. Conhecido por sua atuação intensa e elegante, Hyun Bin transita com facilidade entre o romance, a ação e o suspense.",
      imagem: "/imgs/atores/hyun.png"   
    },
    {
      nome: "Yoona",
      descricao: "Im Yoon-ah é a definição de versatilidade. Consagrada mundialmente como ídolo do K-pop, Yoona construiu uma carreira sólida na atuação, provando ser muito mais do que um ícone de beleza. Com um talento natural para o drama e a comédia, ela conquistou o público em sucessos como Sorriso Real e The K2.",
      imagem: "/imgs/atores/yoona.png"    
    },
    {
      nome: "Jae-wook",
      descricao: "Desde sua estreia impactante, Lee Jae-wook provou ser um dos atores mais promissores de sua era. Ele saltou para o estrelato global com seu papel em Alquimia das Almas, onde mostrou uma dualidade impressionante entre ação e romance. Com uma presença de tela imponente e uma habilidade rara de expressar emoções complexas com um simples olhar, Jae-wook é o tipo de ator que transforma cada dorama em um evento imperdível.",
      imagem: "/imgs/atores/jae.png"       
    },
    {
      nome: "Son Ye-jin ",
      descricao: "Com uma carreira brilhante que atravessa décadas, Son Ye-jin é um dos pilares da dramaturgia coreana. Reconhecida por sua habilidade única de emocionar o público, ela entregou performances inesquecíveis em clássicos do cinema e da TV. Sua atuação em Pousando no Amor a elevou ao status de estrela global, mas sua trajetória é marcada por papéis que exigem profundidade, força e uma sensibilidade que só ela possui.",
      imagem: "/imgs/atores/son.png"    
    },
    {
      nome: "Park Seo-joon",
      descricao: "Park Seo-joon é, sem dúvida, um dos atores mais amados e influentes da Coreia do Sul. Com uma habilidade única de transitar entre o CEO arrogante e o lutador determinado, ele conquistou o mundo em sucessos como O que Houve com a Secretária Kim? e Itaewon Class. Sua presença magnética e timing cômico perfeito o tornaram um ícone global, chegando inclusive a brilhar em Hollywood.",
      imagem: "/imgs/atores/park.png"         
    }
  ];
    res.render("atores", {
      atores : atores
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