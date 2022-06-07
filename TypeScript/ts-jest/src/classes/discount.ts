export abstract class Discount {
  protected discount = 0;
  calculate(price: number): unknown {
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected discount = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected discount = 0.1;
}

export class NoDiscount extends Discount {}
