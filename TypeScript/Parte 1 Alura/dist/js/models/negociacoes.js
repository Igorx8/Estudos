export class Negociacoes {
    constructor() {
        this.negociacoes = []; //Array<Negociacao> é a mesma coisa que Negociacao[]
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n => {
    n;
});
