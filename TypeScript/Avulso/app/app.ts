import { ProdutoController } from "./controllers/produto-controlller.js";


const produtoController = new ProdutoController();

const form = document.querySelector('.form');
form.addEventListener('submit', evento => {
  evento.preventDefault();
  if(document.querySelector('#mensagemView')){
    
  }
  else{
    const node = document.createElement('div');
    node.setAttribute('id','mensagemView');
    node.setAttribute('onclick','this.remove()');
    node.innerHTML = `<p class="alert alert-success"> Produto adicionado com sucesso!</p>`

    var container = document.querySelector('.container')
    container.insertBefore(node, form);
  }
  produtoController.adiciona();
})