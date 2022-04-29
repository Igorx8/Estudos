export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static falarOi() {
    console.log('Oi!');
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  metodoNormal(): void {
    // console.log(this.idadePadrao, this.cpfPadrao); //isso não funciona, pois ao instanciar, o this faz referencia ao objeto criado, no caso estamos tentando buscar um atributo da classe
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Igor', 'Carvalho', 25, '111.222.333-44');
const pessoaReduzida = Pessoa.criaPessoa('Igor', 'Carvalho');
Pessoa.falarOi(); // Oi!
console.log(pessoa);
console.log(pessoaReduzida); //{nome: 'Igor',sobrenome: 'Carvalho',idade: 0,cpf: '000.000.000.11'}

pessoa.metodoNormal(); // 0 000.000.000-00
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao); // 0 000.000.000-00
