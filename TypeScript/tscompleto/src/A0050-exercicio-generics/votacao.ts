type Linguagens = Record<string, number>;

type objModel = { [k: string | number]: number };

type OpcoesVotos = <O, K extends keyof O>(Obj: O, chave: K) => O[K];

const votacao1: Linguagens = {
  Python: 0,
  Javascript: 0,
  Typescript: 0,
};

class Votacao {
  private _index = 0;
  private _opcoes: objModel = {};
  constructor(private opcoes: objModel) {
    this._opcoes = { ...opcoes };
    if (opcoes) {
      this._index++;
    }
  }

  private emptyOptions(): boolean {
    return this._index === 0;
  }

  showVotes(): objModel | string {
    if (!this.emptyOptions()) return this._opcoes;
    return 'Votação vazia, adicione opções!';
  }

  votar(chave: string | number): objModel | string {
    if (chave) {
      this._opcoes[chave]++;
      return this.showVotes();
    }
    return `Digite a opção de voto desejada!`;
  }
}

const votacao = new Votacao(votacao1);
console.log(votacao.votar('Javascript'));
console.log(votacao.votar('Javascript'));
console.log(votacao.votar('Python'));
