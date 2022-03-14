import { Produto } from "./produto";

export class Produtos{

  private produtos: Array<Produto> = [];

  adiciona(produto: Produto){
    this.produtos.push(produto);
  }

  lista(): ReadonlyArray<Produto>{
    return this.produtos;
  }

  remove(index: number): Produto[] {
    alert('entrou')
      let idx = this.produtos.findIndex(user => console.log(index))
      return this.produtos.splice(idx, 1)
  }

}