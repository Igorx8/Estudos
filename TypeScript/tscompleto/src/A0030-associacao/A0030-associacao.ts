//Associação é basicamente uma classe usar a outra, sem que uma dependa da outra

// Inversão de dependência é básicamente você delegar um contrato(interface) de classe, que irá se relacionar com outra

export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) { }

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem ferramenta');
      return;
    }
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) { }

  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo. . .`);
  }
}

export class MaquinaDeEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando. . .`);
  }
}

const escritor = new Escritor('Luiz');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaDeEscrever('HP');

// console.log(escritor.nome);  // Luiz
// console.log(caneta.nome);   // Bic
// console.log(maquinaEscrever.nome);  // HP
// escritor.escrever();   //Não posso escrever sem ferramenta

escritor.ferramenta = caneta;
escritor.escrever();  //Bic está escrevendo. . .

escritor.ferramenta = maquinaEscrever;
escritor.escrever();  //HP está digitando. . .

