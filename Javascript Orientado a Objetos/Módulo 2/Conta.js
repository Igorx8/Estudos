export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldoInicial = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
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