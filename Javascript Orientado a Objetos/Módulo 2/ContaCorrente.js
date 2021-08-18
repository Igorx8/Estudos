import { Conta } from './Conta.js'
export class ContaCorrente extends Conta{
    //posso definir um atributo para a classe
    static numeroDeContas = 0;
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas++
    }

    sacar(valor){
        //podemos sobreescrever um método ao usar o nome do método usado na classe pai
        //podemos usar super.nomeDoMetodo() para chamar o método do pai
        let taxa = 1.1
        return super._sacar(valor, taxa)
    }
}