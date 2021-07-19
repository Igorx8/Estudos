import { Cliente } from './Cliente.js'
export class ContaCorrente{
    //posso definir um atributo para a classe
    static numeroDeContas = 0;
    agencia;
    _cliente;


    constructor(agencia, cliente){
        this.agencia = agencia;
        this._cliente = cliente
        this._saldo = 0;
        ContaCorrente.numeroDeContas++
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }

    }

    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo
    }

    sacar(valor){
        if(this._saldo >= valor) this._saldo -= valor
        return valor
    }

    depositar(valor){
        if(valor <= 0) console.log('Não foi possível realizar o depósito')
        else return this._saldo += valor
    }

    transferir(valor, conta){
        conta.cidade = 'São Paulo'
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}