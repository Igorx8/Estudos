function inverteNomeECor<T extends new (...args: any[]) => any>(target: T) {
  console.log('Decorator');

  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

@inverteNomeECor
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

export const animal = new Animal('Igor', 'roxo');
console.log(animal);

//O decorador é chamado antes  que a classe seja criada
