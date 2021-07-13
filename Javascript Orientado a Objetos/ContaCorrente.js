export class ContaCorrente{
    agencia;
    _saldo = 0;

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