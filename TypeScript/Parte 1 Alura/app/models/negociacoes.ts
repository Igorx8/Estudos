import { Negociacao } from "./negociacao";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];  //Array<Negociacao> é a mesma coisa que Negociacao[]

  public adiciona(negociacao:Negociacao){
    this.negociacoes.push(negociacao);
  }

  public lista(): ReadonlyArray<Negociacao> { //ReadonlyArray<Negociacao> é a mesma coisa que readonly Negociacao[]
    return this.negociacoes;
  }
}

const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n => {
  n
})