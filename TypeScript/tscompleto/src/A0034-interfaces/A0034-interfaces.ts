//Geralmente interfaces são usadas para modelar objetos

interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto: () => string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}
// interface TipoPessoa2 extends TipoPessoa {}  //vs code converteria p TipoPessoa2 = TipoPessoa
// interface TipoPessoa2  {TipoNome, TipoSobrenome, TipoNomeCompleto}  //vscode não reconhece os tipos por dentro do objeto

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Igor', 'Carvalho');
console.log(pessoa.nomeCompleto());

const pessoa2: TipoPessoa2 = {
  nome: 'Igor',
  sobrenome: 'Carvalho',
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome + ' funcionou';
  },
};

console.log(pessoa2.nomeCompleto());
