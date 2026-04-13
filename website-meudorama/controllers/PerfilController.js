import express from "express";

const router = express.Router();

router.get("/perfil", function(req, res) { 

    const perfil = [
        {
            nome: "Natasha Pedroso da Silva",
            data_nasc: "07 de Abril de 2000",
            genero: "Comédia Romântica",
            localizacao: "Registro, São Paulo",
            usuario: "@natasha_dorameira",
            imagem: "/imgs/profile.jpg",
            email: "natasha@gmail.com"
        }
    ];
    res.render("perfil", {
        perfil : perfil
    });
});

export default router;