const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

//home routes
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);

// contact routes
route.get("/contato", contatoController.paginaInicial);

module.exports = route;
