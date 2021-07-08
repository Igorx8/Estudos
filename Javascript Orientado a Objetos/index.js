//classe é um molde padrão para a criação de um objeto
class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    _saldo;

    sacar(valor){
        if(this._saldo >= valor) return this._saldo -= valor
    }

    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor
    }
}

const cliente1 = new Cliente();
cliente1.nome = 'Igor';
cliente1.cpf = '123.222.111-52'

const contaCorrenteIgor = new ContaCorrente();
contaCorrenteIgor._saldo = 1625;
contaCorrenteIgor.agencia = '0001';

contaCorrenteIgor.depositar(1700)
const valorSacado = contaCorrenteIgor.sacar(4000)

console.log(valorSacado)