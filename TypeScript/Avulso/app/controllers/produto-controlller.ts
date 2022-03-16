import { Produto } from '../models/produto.js';
import { Produtos } from '../models/produtos.js';
import { MensagemView } from '../views/mensagem-view.js';
import { ProdutosView } from '../views/produtos-view.js';

export class ProdutoController{
  
  private inputCodigo: HTMLInputElement;
  private inputNome: HTMLInputElement;
  private inputPreco: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private produtos = new Produtos();
  private produtosView = new ProdutosView('#produtosView');
  private mensagemView = new MensagemView('#mensagemView');

  constructor(){
    this.inputCodigo = document.querySelector('#codigo') as HTMLInputElement;
    this.inputNome = document.querySelector('#nome') as HTMLInputElement;
    this.inputPreco = document.querySelector('#preco') as HTMLInputElement;
    this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
    this.produtosView.update(this.produtos);

  }

  adiciona():void{
    let itemDuplicado = this.verificaDuplicado(parseInt(this.inputCodigo.value));

    if(itemDuplicado) return
    else{
    const produto = Produto.criaDe(
      parseInt(this.inputCodigo.value),
      this.inputNome.value,
      parseFloat(this.inputPreco.value),
      parseInt(this.inputQuantidade.value)
    )
    this.produtos.adiciona(produto);
    this.limpaForm();
    this.atualizaView();
    }
  }

  limpaForm():void {
    this.inputCodigo.value = '';
    this.inputNome.value = '';
    this.inputPreco.value = '';
    this.inputQuantidade.value = '';
  }

  atualizaView():void {
    this.produtosView.update(this.produtos);
    this.mensagemView.update(`Produto adicionado com sucesso!`);
  }

  verificaDuplicado(codigo: number): boolean {
    let produtoJaExiste = typeof this.produtos.lista().find(produto => produto.codigo == codigo) == 'object';
      this.geraAlerta(produtoJaExiste);
    if(produtoJaExiste) {
      this.mensagemErro();
      return true;
    }
    else{
      this.atualizaView();
      return false;
    }
  }

  geraAlerta(duplicado: boolean = false): void{
    const divAlerta = document.querySelector('#mensagemView')
    if(divAlerta) {
      let p = document.querySelector('p');
      if(p){
        return
      }
      else{
        p = document.createElement('p');
        p.setAttribute('class','alert');
        divAlerta.appendChild(p)
      }
    }

    else{
     const form = document.querySelector('.form');
     const node = document.createElement('div');
     node.setAttribute('id','mensagemView');
     node.setAttribute('onclick','this.remove()');
     node.setAttribute('style','transition: opacity 1s ease; z-index: 9999; position: fixed; top: 0; margin-left: 25vw');

     if(!duplicado) node.innerHTML = `<p class="alert alert-success">Produto adicionado com sucesso!</p>`;
     else node.innerHTML = `<p class="alert alert-danger">Não foi possível adicionar o produto, pois o código ${this.inputCodigo.value} já existe.</p>`;

     setTimeout(() => {
       node.style.opacity = '0';
     }, 2000)
     
      setTimeout(() =>{
      node.remove();
    }, 3000)

     var container = document.querySelector('.container');
     if(container) container.insertBefore(node, form);
    }
  }

  mensagemErro(): void{
    this.mensagemView.update(`Não foi possível adicionar o produto, pois o código ${this.inputCodigo.value} já existe.`);
    document.querySelector('p.alert')?.setAttribute('class', 'alert alert-danger');
  }
}