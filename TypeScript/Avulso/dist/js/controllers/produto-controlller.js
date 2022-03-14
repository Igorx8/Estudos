import { Produto } from '../models/produto.js';
import { Produtos } from '../models/produtos.js';
import { MensagemView } from '../views/mensagem-view.js';
import { ProdutosView } from '../views/produtos-view.js';
export class ProdutoController {
    constructor() {
        this.produtos = new Produtos();
        this.produtosView = new ProdutosView('#produtosView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputCodigo = document.querySelector('#codigo');
        this.inputNome = document.querySelector('#nome');
        this.inputPreco = document.querySelector('#preco');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.produtosView.update(this.produtos);
    }
    adiciona() {
        const produto = Produto.criaDe(this.inputCodigo.value, this.inputNome.value, parseFloat(this.inputPreco.value), parseInt(this.inputQuantidade.value));
        this.produtos.adiciona(produto);
        this.limpaForm();
        this.atualizaView();
    }
    limpaForm() {
        this.inputCodigo.value = '';
        this.inputNome.value = '';
        this.inputPreco.value = '';
        this.inputQuantidade.value = '';
    }
    atualizaView() {
        this.produtosView.update(this.produtos);
        this.mensagemView.update(`Produto adicionado com sucesso!`);
    }
}
