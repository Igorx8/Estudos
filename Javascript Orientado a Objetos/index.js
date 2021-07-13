//classe é um molde padrão para a criação de um objeto
import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente();
cliente1.nome = 'Igor';
cliente1.cpf = '123.222.111-52'

const cliente2 = new Cliente();
cliente2.nome = 'Alice'
cliente2.cpf = '111.222.333-55'

const contaCorrenteIgor = new ContaCorrente();
contaCorrenteIgor._saldo = 1625;
contaCorrenteIgor.agencia = '0001';
contaCorrenteIgor.cliente = cliente1

const conta2 = new ContaCorrente();
conta2.agencia = 102
//conta2.cliente = new Cliente();  //caso definido como null, ou se apagado, as propriedades não poderão ser setadas, null/undefined
//conta2.cliente.nome = 'Alice'
//conta2.cliente.cpf = '111.222.333-55'


const conta3 = new ContaCorrente();
conta3.agencia = 102;
conta3.cliente = cliente1;

contaCorrenteIgor.transferir(200, conta2)
conta3._saldo = 1500;

console.log(conta3._saldo);