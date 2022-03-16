export class Produtos {
    constructor() {
        this.produtos = [];
    }
    adiciona(produto) {
        this.produtos.push(produto);
    }
    lista() {
        return this.produtos;
    }
    remove(index) {
        alert('entrou');
        let idx = this.produtos.findIndex(prod => prod.codigo == index);
        return this.produtos.splice(idx, 1);
    }
}
