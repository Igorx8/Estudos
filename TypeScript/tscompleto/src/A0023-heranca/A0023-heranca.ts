export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return this.nome.toUpperCase() + ' ' + this.sobrenome.toUpperCase();
  }
}

const pessoa = new Pessoa('Igor', 'Carvalho', 25, '111.222.333-44');
const aluno = new Aluno('Igor', 'Carvalho', 25, '111.111.111-11');
const cliente = new Cliente('Igor', 'Carvalho', 25, '111.111.111-22');

console.log(pessoa.getIdade());
console.log(aluno.getCpf());
console.log(cliente.getNomeCompleto());
