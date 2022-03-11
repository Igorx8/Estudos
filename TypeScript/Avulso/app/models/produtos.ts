import { Produto } from "./produto";

export class Produtos{

  private produtos: Array<Produto> = [];

  adiciona(produto: Produto){
    this.produtos.push(produto);
  }

  lista(): ReadonlyArray<Produto>{
    return this.produtos;
  }

}