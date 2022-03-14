import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { UsuarioController } from "./controllers/usuario-controller.js"

const controller = new NegociacaoController();

const form = document.querySelector('.form');
if(form){
  form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
  })
}
else{
  throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.')
}

const controllerUser = new UsuarioController();
const addUsuario = document.querySelector('#add-user');
if(addUsuario){
  addUsuario.addEventListener('click', event => {
    controllerUser.adiciona();

  })  
}

const removeUsuario = document.querySelector('#lista');
if(removeUsuario){
  removeUsuario.addEventListener('click', event => {
        controllerUser.removeUsuario(event)
  })
}


// import { Negociacao } from './models/negociacao.js'

// const negociacao = new Negociacao(new Date(), 5, 3);
// console.log(negociacao.volume);