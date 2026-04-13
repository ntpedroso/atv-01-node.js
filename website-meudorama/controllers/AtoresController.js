import express from "express";

const router = express.Router();
router.get("/atores", function(req,res) {
    
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

export default router;