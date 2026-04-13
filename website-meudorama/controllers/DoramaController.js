import express from "express";

const router = express.Router();


router.get("/doramas", function(req,res) {

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

export default router;