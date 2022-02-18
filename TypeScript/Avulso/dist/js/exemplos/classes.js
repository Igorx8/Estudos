class Pato {
    falar() {
    }
}
class Carneiro {
    constructor(cor, peso) {
        this._cor = cor;
        this._peso = peso;
    }
    fazBarulho() {
        let barulho = 'meee';
        return barulho;
    }
    fazerAlgodao() {
        let algodao = 'Meu pelo gerou algodão';
        return algodao;
    }
}
class CarneiroBranco extends Carneiro {
    constructor(cor, peso) {
        super(cor, peso);
    }
}
const carneiro = new CarneiroBranco('Branco', 20);
console.log(carneiro.fazBarulho());
console.log(carneiro.fazerAlgodao());
