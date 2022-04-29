export class Animal {
  constructor(
    public readonly nome: string,
    public readonly cor: string,
    public peso: number,
    protected registroPetShop: string,
    private readonly barulho: string,
  ) {}

  public fazerBarulho() {
    return this.barulho.toUpperCase();
  }

  public alterarPeso(novoPeso: number): void {
    this.peso = novoPeso;
  }
}

export class Cachorro extends Animal {
  constructor(
    nome: string,
    cor: string,
    peso: number,
    registroPetShop: string,
    barulho: string,
    private raca: string,
  ) {
    super(nome, cor, peso, registroPetShop, barulho);
  }

  mostraRaca() {
    return this.raca;
  }

  trocaRaca(novaRaca: string) {
    this.raca = novaRaca;
  }

  getRegistroPetShop() {
    return this.registroPetShop;
  }
}

// const cachorro1 = new Cachorro('Toby', 'Preto', 12, '11423', 'Au Au', 'Poddle');
// console.log(cachorro1);
// console.log(cachorro1.fazerBarulho()); // AU AU

// cachorro1.trocaRaca('Shi tzu');
// console.log(cachorro1.mostraRaca()); // Shi tzu

// console.log(cachorro1.getRegistroPetShop()); // 11423

export class Gato extends Animal {
  fazerBarulho() {
    return super.fazerBarulho() + ' MIAAAAAAAU';
  }
}

const gato1 = new Gato('Sparky', 'Roxo', 6, '31241', 'meoow');

console.log(gato1.fazerBarulho());
