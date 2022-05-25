type TipoNome = {
  nome: string;
}

type TipoSobrenome = {
  sobrenome: string;
}

type TipoNomeCompleto = {
  nomeCompleto(): string;
}

//para types utilizamos implements, podemos implementar vários tipos ao mesmo tempo
//em types não usamos private nem protected, pois são feitos para expor o escopo para fora

export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(
    public nome: string,
    public sobrenome: string
  ) { }

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Igor', 'Carvalho');
console.log(pessoa.nomeCompleto());
