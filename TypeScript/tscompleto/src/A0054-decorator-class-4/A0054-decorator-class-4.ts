function outroDecorador(param1: string) {
  console.log(param1);
  return function (target: Constructor) {
    console.log('Segunda chamada decorator');
    return target;
  };
}

type Constructor = {
  new (...args: any[]): any;
};

function inverteNomeECor(param1: string, param2: string) {
  return function (target: Constructor) {
    console.log('Primeira chamada decorator');

    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

@outroDecorador('Sou o outro decorador')
@inverteNomeECor('Outro parâmetro', 'Um outro parâmetro')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

export const animal = new Animal('Igor', 'roxo');
console.log(animal);

//Passamos a função decoradora como anonima para o retorno da funcao principal e então podemos usar parametros
