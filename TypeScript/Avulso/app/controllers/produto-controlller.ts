import { Produto } from '../models/produto.js'
import { Produtos } from '../models/produtos.js'
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
    this.inputCodigo = document.querySelector('#codigo');
    this.inputNome = document.querySelector('#nome');
    this.inputPreco = document.querySelector('#preco');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.produtosView.update(this.produtos)

  }

  adiciona():void{
    const produto = this.criaProduto();

    this.produtos.adiciona(produto)

    this.produtosView.update(this.produtos)

    this.mensagemView.update(`Produto adicionado com sucesso!`)

    this.limpaForm();

  }

  criaProduto(): Produto{
    const codigo = this.inputCodigo.value;
    const nome = this.inputNome.value;
    const preco = parseFloat(this.inputPreco.value);
    const quantidade = parseInt(this.inputQuantidade.value);

    return new Produto(codigo, nome, preco, quantidade);
  }

  limpaForm():void {
    this.inputCodigo.value = '';
    this.inputNome.value = '';
    this.inputPreco.value = '';
    this.inputQuantidade.value = '';
  }
}