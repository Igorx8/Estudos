const dadosCliente1: readonly [number, string] = [1, 'Luiz']; //1 tipo pra cada valor, podemos setar como readonly
const dadosCliente2: [number, string, string] = [2, 'Maria', 'Luiza'];
const dadosCliente3: [number, string, number?] = [3, 'João']; //podemos colocar parâmetros opcionais
const dadosCliente4: [number, string, ...string[]] = [
  4,
  'Pedro',
  'Maria',
  'Luiza',
];

// dadosCliente1.pop(); //não é possível remover 'readonly'
// dadosCliente1[0] = 100; //não é possível alterar 'readonly'

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

const dadosCliente5: ReadonlyArray<string | number> = [
  'Luiz',
  1,
  'Maria',
  2,
  'João',
  3,
]; //array de leitura

console.log(dadosCliente5);
