export class Produto{

  constructor(
    private _codigo: number,
    public readonly nome: string,
    public readonly preco: number,
    public quantidade: number
  ){}

  get total(): number{
    return this.preco * this.quantidade;
  }

  get codigo(): number{
    return this._codigo;
  }

  public static criaDe(codigo: number, nome: string, preco: number, quantidade: number): Produto{
    return new Produto(codigo, nome, preco, quantidade);
  }
}