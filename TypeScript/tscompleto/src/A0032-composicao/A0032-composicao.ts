//Composição é quando uma classe está contida em outra classe

export class Carro {
  public readonly motor: Motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligado');
  }

  acelerar(): void {
    console.log('Motor está acelerando');

  }

  parar(): void {
    console.log('Motor está parado');

  }

  desligar(): void {
    console.log('Motor está desligado');
  }
}

const carro = new Carro();
carro.acelerar();
