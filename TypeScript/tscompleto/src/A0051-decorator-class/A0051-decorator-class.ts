@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

// function decorator(target: any): any {
//   console.log('Comando executado antes da criação da classe');
//   return target;
// }

function decorator<T extends new (...args: any[]) => any>(target: T) {
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

export const animal = new Animal('Igor', 'roxo');
console.log(animal);
