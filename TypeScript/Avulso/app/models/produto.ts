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

  public static criaDe(codigo: string, nome: string, preco: number, quantidade: number): Produto{
    return new Produto(codigo, nome, preco, quantidade);
  }
}