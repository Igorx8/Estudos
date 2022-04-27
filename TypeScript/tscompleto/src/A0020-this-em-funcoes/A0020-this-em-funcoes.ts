export function funcao(this: Date, nome: string, idade: number): void {
  console.log(this);
  console.log(nome, idade);
}

funcao.call(new Date(), 'Igor', 25);
