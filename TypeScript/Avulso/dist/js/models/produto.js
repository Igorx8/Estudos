export class Produto {
    constructor(_codigo, nome, preco, quantidade) {
        this._codigo = _codigo;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    get total() {
        return this.preco * this.quantidade;
    }
    get codigo() {
        return this._codigo;
    }
}
