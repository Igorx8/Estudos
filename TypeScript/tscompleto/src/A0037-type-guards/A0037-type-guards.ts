export function add(a: unknown, b: unknown) { //inferencia de tipos já considerou que retorna: number | string
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a} ${b}`;

}

console.log(add(1, 5));
console.log(add('1', '2'));

type Pessoa = { tipo: 'pessoa', nome: string, };
type Animal = { tipo: 'animal', cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: "pessoa" = 'pessoa';
  constructor(public nome: string) { }
}

function mostraNome(obj: PessoaOuAnimal) {
  /*
  Para rodar console.log(obj.nome) devemos conferir se existe a chave nome, pois no type Animal não existe essa chave
  if ('nome' in obj) console.log(obj.nome);
  */

  if (obj instanceof Aluno) console.log(obj.nome); //outra maneira de verificar o tipo / chave

  //outra maneira de tratar os dados com typeguard
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log(obj.cor);
      return;
  }
}

mostraNome(new Aluno('Igor'));
mostraNome({ tipo: 'animal', cor: 'Branco' });
