const express = require("express");
const routes = express.Router();

const personagens = require("../data/personagens.json");
const colossos = require("../data/colossos.json");
const mundo = require("../data/mundo.json");

routes.get("/", (req, res) => {
  res.send(`
    Olá, Bem-vindo(a) a Shadow of the Colossos API
    <br> 
    http://shadowofthecolossosnodejsapi.herokuapp.com/personagens/ 
    <br> 
    http://shadowofthecolossosnodejsapi.herokuapp.com/colossos/ 
    <br> 
    http://shadowofthecolossosnodejsapi.herokuapp.com/mundo/
  `);
});

// Rotas para os personagens
routes.get("/personagens", (req, res) => {
  return res.json(personagens);
});

routes.get("/personagens/:id", (req, res) => {
  var getId = Number(req.params.id);
  var id = personagens.results.find((charId) => charId.id === getId);

  if (!id) {
    res.status(500).send("Não tem Nada Aqui.");
  } else {
    return res.json(id);
  }
});

// Rotas para colossos
routes.get("/colossos", (req, res) => {
  return res.json(colossos);
});

routes.get("/colossos/:id", (req, res) => {
  var getId = Number(req.params.id);
  var id = colossos.results.find((charId) => charId.id === getId);

  if (!id) {
    res.status(500).send("Não tem Nada Aqui.");
  } else {
    console.log(id);

    return res.json(id);
  }
});

routes.get("/mundo", (req, res) => {
  return res.json(mundo);
});

routes.get("/mundo/mundo", (req, res) => {
  return res.json(mundo.results);
});

module.exports = routes;
