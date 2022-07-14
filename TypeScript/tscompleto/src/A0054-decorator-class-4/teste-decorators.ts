export type Constructor = {
  new (...args: any[]): any;
};

function firstCall() {
  console.log('zeroCall');

  return function (target: Constructor) {
    console.log('thirdCall');
    return target;
  };
}

function secondCall() {
  console.log('firstCall');
  return function (target: Constructor) {
    console.log('secondCall');
    return target;
  };
}

@firstCall()
@secondCall()
export class Pessoa {
  constructor(public nome: string, public idade: number) {
    console.log('Sou a classe');
  }
}

export const pessoa = new Pessoa('Igor', 25);
//output: zeroCall firstCall secondCall thirdCall Sou a classe
