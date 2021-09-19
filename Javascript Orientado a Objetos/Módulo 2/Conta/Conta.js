//Classe abstrata, só serve para ser herdada, porém não instanciada
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error('Você não deve instanciar esse tipo de conta diretamente')
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
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
        //método abstrato, serve para sempre ser sobrescrito
        throw new Error('O método sacar da conta é abstrato')
        
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado
            return valorSacado
        }
        else return 0
    }

    depositar(valor){
        if(valor <= 0) console.log('Não foi possível realizar o depósito')
        else return this._saldo += valor
    }

    transferir(valor, conta){
        if(this._tipo == 'salario')
        conta.cidade = 'São Paulo'
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}