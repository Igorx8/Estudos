import { OrderStatus } from './interfaces/order-status';
import { ShoppingCart } from './shopping-cart';
import { Messaging } from '../../services/messaging';
import { Persistency } from '../../services/persistency';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly _cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) { }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this._cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
    }
    this._orderStatus = 'close';
    this.messaging.sendMessage(
      `Seu pedido com o total de ${this._cart.totalWithDiscount()} está sendo processado`,
    );
    this.persistency.saveOrder();
    this._cart.clear();
  }
}
