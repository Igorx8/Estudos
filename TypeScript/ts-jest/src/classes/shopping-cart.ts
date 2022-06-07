import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {} //dependência geralmente é readonly (dependency injection)

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items.reduce((acc, at) => acc + at.price, 0).toFixed(2);
  }

  totalWithDiscount() {
    const result = this.discount.calculate(this.total());

    //se em algum momento eu preciso checar a tipagem, estou quebrando o principio da substituição de liskov
    if (typeof result === 'number') return result;
    return this.total();
  }

  isEmpty(): boolean {
    return this._items.length === 0; //limpa o array
  }

  clear(): void {
    console.log('Carrinho de compras limpo');

    this._items.length = 0;
  }
}
