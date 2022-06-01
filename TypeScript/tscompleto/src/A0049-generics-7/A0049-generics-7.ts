export function isNumber(value: unknown): value is number { //predicate
  return typeof value === 'number'; //sempre que o valor for true, o valor retornado será um number
}

console.log(isNumber('a')); //false
console.log(isNumber(123)); //true


export function soma<T>(...args: T[]): number | null {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) return sum + value;
    return sum;
  }, 0)

  return retorno;
}


console.log(soma(1, 2, 3)); //6
console.log(soma(...[1, 2, 3, 'a', 'b', 'c', 1]));  //7
console.log(soma('a', 'b', 'c')); //0


export default 1;
