const express = require("express");
const routes = express.Router();

const personagens = require("../data/personagens.json");
const colossos = require("../data/colossos.json");
const mundo = require("../data/mundo.json");

routes.get("/", (req, res) => {
  res.send(`
    <h1>Olá, Bem-vindo(a) a Shadow of the Colossos API</h1>

    <div>
      <h2>Personagens</h2>
        <a target="_blank" href="https://sofcnodejsapi.herokuapp.com/personagens">
        https://sofcnodejsapi.herokuapp.com/personagens
        </a>
    </div>

    <div>
      <h2>Colossos</h2>
      <a target="_blank" href="https://sofcnodejsapi.herokuapp.com/colossos/">
      https://sofcnodejsapi.herokuapp.com/colossos/
      </a>
      
    </div>

    <div>
      <h2>Mundo</h2>
      <a target="_blank" href="https://sofcnodejsapi.herokuapp.com/mundo/">
      https://sofcnodejsapi.herokuapp.com/mundo/
      </a>
    </div>

    <div>
      <h3>Repositório</h3>
      <a target="_blank" href="https://github.com/IsaqueSantosSilva/Shadow-of-the-Colossos-NodeJS-API">
      https://github.com/IsaqueSantosSilva/Shadow-of-the-Colossos-NodeJS-API
      </a>
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

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
});
