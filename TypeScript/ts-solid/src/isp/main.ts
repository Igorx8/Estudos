/*
Interface segregation principle

Os clientes não devem ser forçados a depender de types, interfaces ou classes abstratas que não utilizam
*/

import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { Product } from './classes/product';
import { Order } from './classes/order';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/discount';
import { IndividualCustomer, EnterpriseCustomer } from './classes/customer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const individualCustomer = new IndividualCustomer(
  'Igor',
  'Carvalho',
  '111.222.333-44',
);
const enterpriseCustomer = new EnterpriseCustomer('Tech teco', '23211233');

const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  individualCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 49.99));
shoppingCart.addItem(new Product('Caneca', 9.99));
shoppingCart.addItem(new Product('Livro', 29.99));

console.log(shoppingCart.items);
console.log(order.orderStatus);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
