export class Produto{

  constructor(
    private _codigo: string,
    public readonly nome: string,
    public readonly preco: number,
    public quantidade: number
  ){}

  get total(): number{
    return this.preco * this.quantidade;
  }

  get codigo(): string{
    return this._codigo;
  }
}