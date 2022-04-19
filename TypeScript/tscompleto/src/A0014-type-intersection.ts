type temNome = { nome: string };
type temSobrenome = { sobrenome: string };
type temIdade = { idade: number };

type Pessoa = temNome & temSobrenome & temIdade;

const pessoa: Pessoa = {
  nome: 'Igor',
  sobrenome: 'Carvalho',
  idade: 25,
};

export { pessoa };

type AB = 'A' | 'B';
type AC = 'A' | 'C ';
type Intersecao = AB & AC; //A

const a: Intersecao = 'A';
console.log(a);
