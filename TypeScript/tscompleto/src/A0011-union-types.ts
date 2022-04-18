function addOrConcat(a: number | string, b: number | string): number | string {
  //caso não colocassemos o retorno da função, a inferência de tipo do ts já preencheria corretamente o retorno dessa função
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('a', 'b'));
console.log(addOrConcat(10, 'a'));
