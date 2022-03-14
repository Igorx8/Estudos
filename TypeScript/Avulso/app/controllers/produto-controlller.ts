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
    this.inputCodigo = document.querySelector('#codigo') as HTMLInputElement;
    this.inputNome = document.querySelector('#nome') as HTMLInputElement;
    this.inputPreco = document.querySelector('#preco') as HTMLInputElement;
    this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
    this.produtosView.update(this.produtos)

  }

  adiciona():void{
    const produto = Produto.criaDe(
      this.inputCodigo.value,
      this.inputNome.value,
      parseFloat(this.inputPreco.value),
      parseInt(this.inputQuantidade.value)
    )
    this.produtos.adiciona(produto);

    this.limpaForm();

    this.atualizaView();
  }

  limpaForm():void {
    this.inputCodigo.value = '';
    this.inputNome.value = '';
    this.inputPreco.value = '';
    this.inputQuantidade.value = '';
  }

  atualizaView():void {
    this.produtosView.update(this.produtos)
    this.mensagemView.update(`Produto adicionado com sucesso!`)
  }
}