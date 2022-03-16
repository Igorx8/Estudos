import { Produto } from "./produto";

export class Produtos{

  private produtos: Array<Produto> = [];

  public adiciona(produto: Produto){
    this.produtos.push(produto);
  }

  public lista(): ReadonlyArray<Produto>{
    return this.produtos;
  }

  public remove(index: number): Produto[] {
    alert('entrou')
      let idx = this.produtos.findIndex(prod => prod.codigo == index)
      return this.produtos.splice(idx, 1)
  }

}