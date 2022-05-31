interface PessoaProtocolo<T, U> {  //podemos definir os tipos padrão <T = string, U = number>
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo<string, number> = {
  nome: 'Igor',
  sobrenome: 'Carvalho',
  idade: 25
}

const aluno2: PessoaProtocolo<number, string> = {
  nome: 123,
  sobrenome: 456,
  idade: '25'
}

console.log(aluno);
console.log(aluno2);

//nesse caso poderiamos usar tanto interface quanto type
