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

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: number,
  ) {
    super(nome, sobrenome, idade, cpf); //chamamos as propriedades da classe pai, e adicionamos uma nova a classe aluno
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    console.log('Fazendo algo antes do super');
    // return super.getNomeCompleto(); // podemos retornar a funcao da classe pai
    const retorno = super.getNomeCompleto();
    return retorno + ' ADICIONANDO MAIS COISAS AO RETORNO';
  }
}

const pessoa = new Pessoa('Igor', 'Carvalho', 25, '111.222.333-44');
const aluno = new Aluno('Igor', 'Carvalho', 25, '111.111.111-11', 1104);
const cliente = new Cliente('Igor', 'Carvalho', 25, '111.111.111-22');

console.log(pessoa.getIdade());
console.log(aluno.getCpf());
console.log(cliente.getNomeCompleto());
