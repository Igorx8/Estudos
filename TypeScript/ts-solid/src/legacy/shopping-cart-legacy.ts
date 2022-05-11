type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'close';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<Array<CartItem>> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items.reduce((acc, at) => acc + at.price, 0).toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
    }
    this._orderStatus = 'close';
    this.sendMessage(
      `Seu pedido com o total de ${this.total()} está sendo processado`,
    );
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0; //limpa o array
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo');
  }

  clear(): void {
    console.log('Carrinho de compras limpo');

    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'Camiseta', price: 49.9 });
shoppingCart.addItem({ name: 'Caneca', price: 9.911 });
shoppingCart.addItem({ name: 'Lapis', price: 4.922 });

console.log(shoppingCart.items);
console.log(shoppingCart.orderStatus);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
