/*eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
 let nome: string = 'Luiz';
 let idade: number = 27;
 let adulto: boolean = true;
 let simbolo: symbol = Symbol('simbolo');
 let big: bigint = BigInt(123);

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b', 'c'];

let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings2: string[] = ['a', 'b', 'c'];


// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 27,
  nome: 'Luiz'
}

console.log(pessoa.nome);

// Funções
function soma(x: number, y: number){
  return x + y;
}

const result = soma(2, 2);

const soma2: (x: number, y: number) => number = (x, y) => x + y;
