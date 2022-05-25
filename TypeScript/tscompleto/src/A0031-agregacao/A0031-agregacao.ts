//Em agregação, uma classe precisa de outra classe para funcionar corretamente. (no caso produto poderia ser usada separadamente, porém carrinho não)

export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const prod of produtos) {
      this.produtos.push(prod);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((acc, prod) => acc + prod.preco, 0);
  }
}

export class Produto {
  constructor(
    public nome: string,
    public preco: number
  ) { }
}

const prod1 = new Produto('Caneta', 1.99);
const carrinho = new CarrinhoDeCompras();
carrinho.inserirProdutos(prod1);
carrinho.inserirProdutos(prod1);
console.log(carrinho);
console.log(carrinho.quantidadeProdutos()); //2
console.log(carrinho.valorTotal());  //3.98
