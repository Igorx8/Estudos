export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  set cpf(valor: string) {
    this._cpf = valor;
  }

  get cpf() {
    return this._cpf.replace(/\D/g, '');
  }
}

const igor = new Pessoa('Igor', 'Carvalho', 25, '111.222.333-44');
igor.cpf = '111.111.111-55';
console.log(igor.cpf); //11111111155
