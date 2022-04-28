export class Empresa {
  public readonly nome: string; //public não é necessário
  private readonly colaboradores: Colaborador[] = []; //podemos atribuir readonly para o array também, para que seja apenas de leitura, mas não é o nosso caso
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    // this.colaboradores = 'outro valor';  //não podemos alterar um atributo readonly, por se assimilar a uma const, mas podemos enviar valores para ele
    this.colaboradores.push(colaborador);
  }

  mostraColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  //classes podem ser usadas como tipo
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '12.123.222/0001-11');
// empresa1.nome = 'teste' // erro pois é readonly

const colaborador1 = new Colaborador('Luiz', 'Otavio');
const colaborador2 = new Colaborador('Maria', 'Miranda');
const colaborador3 = new Colaborador('João', 'Vieira');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

empresa1.mostraColaboradores();

export class Teste {
  constructor(public nome: string, public passou: boolean) {
    Object.defineProperty(this, 'nome', {
      enumerable: true,
      configurable: true,
      get: function () {
        return nome;
      },
      set: function (value) {
        nome = value.toUpperCase();
      },
    });
  }
}

const titi = new Teste('Tiago', false);
titi.nome = 'caixa alta';
console.log(titi.nome);
