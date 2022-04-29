export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem) {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(ataque: number) {
    if (this.vida < ataque)
      return console.log(`O personagem ${this.nome} foi derrotado!`);
    this.vida -= ataque;
    console.log(
      `${this.nome} foi atacado e agora está com ${this.vida} de vida`,
    );
  }

  abstract bordao(): void;
}

// const p1 = new Personagem() // não funciona, pois classes abstratas não são instânciadas

export class Guerreiro extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + 'GUERREIRO AO ATAQUEEE!!');
  }
}
export class Boss extends Personagem {
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log(this.emoji + 'CHEFEE ATACAAAAR!!!');
  }
}

const p1 = new Guerreiro('Guerreiro', 33, 100);
const p2 = new Boss('Chefão', 42, 80);

p2.atacar(p1);
p1.atacar(p2);
p2.atacar(p1);
p1.atacar(p2);
p1.atacar(p2);
