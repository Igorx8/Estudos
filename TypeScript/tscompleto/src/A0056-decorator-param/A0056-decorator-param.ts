function decorador(
  classPrototype: any,
  nomeDoMetodo: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(nomeDoMetodo);
  console.log(index);
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(
    @decorador nome: string,
    @decorador sobrenome: string,
    @decorador idade: number,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(@decorador msg: string) {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  getNomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  setNomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const aPessoa = new UmaPessoa('João', 'da Silva', 30);
// aPessoa.metodo = () => 'Burlei o decorator';
const metodo = aPessoa.metodo('Olá');
console.log(metodo);
