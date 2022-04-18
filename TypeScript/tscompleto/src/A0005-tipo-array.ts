// Array<T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((total, valor) => total * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((total, valor) => total.concat(valor), '');
}

export function caixaAlta(...args: Array<string>): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString('a', 'b', 'c');
const maiuscula = caixaAlta('a', 'b', 'c');

console.log(result, concatenacao, maiuscula);

export { result };
