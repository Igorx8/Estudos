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
        let itemDuplicado = this.verificaDuplicado(parseInt(this.inputCodigo.value));
        if (itemDuplicado)
            return;
        else {
            const produto = Produto.criaDe(parseInt(this.inputCodigo.value), this.inputNome.value, parseFloat(this.inputPreco.value), parseInt(this.inputQuantidade.value));
            this.produtos.adiciona(produto);
            this.limpaForm();
            this.atualizaView();
        }
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
    verificaDuplicado(codigo) {
        let produtoJaExiste = typeof this.produtos.lista().find(produto => produto.codigo == codigo) == 'object';
        this.geraAlerta(produtoJaExiste);
        if (produtoJaExiste) {
            this.mensagemErro();
            return true;
        }
        else {
            this.atualizaView();
            return false;
        }
    }
    geraAlerta(duplicado = false) {
        const divAlerta = document.querySelector('#mensagemView');
        if (divAlerta) {
            let p = document.querySelector('p');
            if (p) {
                return;
            }
            else {
                p = document.createElement('p');
                p.setAttribute('class', 'alert');
                divAlerta.appendChild(p);
            }
        }
        else {
            const form = document.querySelector('.form');
            const node = document.createElement('div');
            node.setAttribute('id', 'mensagemView');
            node.setAttribute('onclick', 'this.remove()');
            node.setAttribute('style', 'transition: opacity 1s ease; z-index: 9999; position: fixed; top: 0; margin-left: 25vw');
            if (!duplicado)
                node.innerHTML = `<p class="alert alert-success">Produto adicionado com sucesso!</p>`;
            else
                node.innerHTML = `<p class="alert alert-danger">Não foi possível adicionar o produto, pois o código ${this.inputCodigo.value} já existe.</p>`;
            setTimeout(() => {
                node.style.opacity = '0';
            }, 2000);
            setTimeout(() => {
                node.remove();
            }, 3000);
            var container = document.querySelector('.container');
            if (container)
                container.insertBefore(node, form);
        }
    }
    mensagemErro() {
        var _a;
        this.mensagemView.update(`Não foi possível adicionar o produto, pois o código ${this.inputCodigo.value} já existe.`);
        (_a = document.querySelector('p.alert')) === null || _a === void 0 ? void 0 : _a.setAttribute('class', 'alert alert-danger');
    }
}
