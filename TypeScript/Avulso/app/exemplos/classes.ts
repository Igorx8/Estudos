
interface Animal {
  cor: string;
  peso: number;
  falar: Function;
}

class Pato implements Animal{
  cor: string;
  peso: number;

  falar(){

  }
}

abstract class Carneiro{
  private _cor: string;
  private _peso: number;

  constructor(cor: string, peso: number){
    this._cor = cor;
    this._peso = peso;
  }

  fazBarulho(): string{
    let barulho = 'meee'
    return barulho
  }

  fazerAlgodao(): string{
    let algodao = 'Meu pelo gerou algodão'
    return algodao
  }
}

class CarneiroBranco extends Carneiro{

  constructor(cor: string, peso: number){
  super(cor, peso)
  }

}

const carneiro = new CarneiroBranco('Branco', 20)
console.log(carneiro.fazBarulho())
console.log(carneiro.fazerAlgodao())