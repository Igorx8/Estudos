export function decorador(classPrototype: any, nome: string | symbol): any {
  let valorPropriedade: any;
  return {
    get: () => valorPropriedade,
    set: (valor: any) => {
      if (typeof valor === 'string') {
        return (valorPropriedade = valor.split('').reverse().join(''));
      }
      valorPropriedade = valor;
    },
  };
}

export class UmaPessoa {
  @decorador
  nome: string;
  @decorador
  sobrenome: string;
  @decorador //caso não fizessemos o typeguard, o ts ainda não aponta erro em algumas situações, pelo fato de que
  idade: number; //os decorators ainda estão em fase experimental, isso quebraria em runtime sem o typeguard

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

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

const Bpessoa = new UmaPessoa('João', 'da Silva', 30);
const metodo = Bpessoa.metodo('Olá');
console.log(metodo);
