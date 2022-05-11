import { CartItem } from './interfaces/cart-item';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<Array<CartItem>> {
    return this._items;
  }

  total(): number {
    return +this._items.reduce((acc, at) => acc + at.price, 0).toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0; //limpa o array
  }

  clear(): void {
    console.log('Carrinho de compras limpo');

    this._items.length = 0;
  }
}
