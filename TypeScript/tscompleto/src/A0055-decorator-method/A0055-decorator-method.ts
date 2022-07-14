function decorador(
  classPrototype: any,
  nomeDoMetodo: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor {
  console.log(classPrototype);
  console.log(nomeDoMetodo);
  console.log(descriptor);

  return {
    value: function (...args: string[]) {
      return args[0].toUpperCase();
    },
  };
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decorador
  metodo(msg: string) {
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
