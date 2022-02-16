import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { UsuarioController } from "./controllers/usuario-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
const controllerUser = new UsuarioController();
const addUsuario = document.querySelector('#add-user');
addUsuario.addEventListener('click', event => {
    controllerUser.adiciona();
});
const removeUsuario = document.querySelector('#lista');
removeUsuario.addEventListener('click', event => {
    console.log(event.target);
    // controllerUser.remove(event.target.id)
});
// import { Negociacao } from './models/negociacao.js'
// const negociacao = new Negociacao(new Date(), 5, 3);
// console.log(negociacao.volume);
