/*
Single Responsibility Principle
Princípio da Responsabilidade Única
*/

import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { Product } from './entities/product';
import { Order } from './entities/order';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.99));
shoppingCart.addItem(new Product('Caneca', 9.99));
shoppingCart.addItem(new Product('Livro', 29.99));

console.log(shoppingCart.items);
console.log(order.orderStatus);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
