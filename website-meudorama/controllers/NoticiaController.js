import express from "express";

const router = express.Router();

router.get("/noticias", function(req,res) {
  const noticias = [
    {
      titulo: "CONFIRMADO! Kim Seon-ho e Han So-hee estrelarão novo drama de romance policial da tvN",
      data: "12 de Abril de 2026",
      descricao: "Preparem os corações (e os lencinhos)! A tvN finalmente encerrou o mistério e confirmou o elenco principal de sua nova grande aposta para o segundo semestre de 2026: O Eco do Silêncio.",
      imagem: "/imgs/atores/kim.jpg",
    },
    {
      titulo: "REUNIÃO DE PESO! Gong Yoo e IU confirmados em novo drama de época da Netflix",
      data: "10 de Abril de 2026",
      descricao: "Desta vez a Netflix foi longe demais! Após meses de negociações e muitos boatos nos fóruns coreanos, foi oficialmente confirmado que Gong Yoo (Goblin) e IU (Hotel Del Luna) serão os protagonistas de A Flor do Inverno'.",
      imagem: "/imgs/atores/gong.jpg",
    },
    {
      titulo: "Sabor do Amor: Cha Eun-woo e Kim Se-jeong confirmados em nova comédia romântica da SBS",
      data: "8 de Abril de 2026",
      descricao: "Preparem o apetite! A SBS anunciou oficialmente que o 'gênio da face' Cha Eun-woo e a rainha do carisma Kim Se-jeong (Pretendente Surpresa) serão os protagonistas de 'Receita para o Caos'.",
      imagem: "/imgs/atores/cha.jpg",
    },
    {
      titulo: "CONEXÃO TEMPORAL! Lee Do-hyun e Park Eun-bin viverão médicos de épocas diferentes em novo drama da JTBC",
      data: "1 de Abril de 2026",
      descricao: "A JTBC acaba de lançar o primeiro pôster oficial de 'O Pulso do Tempo' (Pulse of Time), um drama que promete misturar medicina de alta precisão com os mistérios da dinastia Joseon.",
      imagem: "/imgs/atores/lee.webp",
    },
    {
      titulo: "JUSTIÇA IMPLACÁVEL! Lee Joon-gi e Han Hyo-joo serão justiceiros em novo drama de ação da OCN",
      data: "28 de Março de 2026",
      descricao: "A OCN, famosa por seus suspenses sombrios, confirmou o início das gravações de 'Código de Sangue' (Blood Code). O drama marca o retorno de Lee Joon-gi, o rei das cenas de ação, ao lado de Han Hyo-joo, que recentemente brilhou em produções de ficção científica.",
      imagem: "/imgs/atores/joon.jpg",
    }
  ];
    res.render("noticias", {
    noticias : noticias
    });
});

export default router;