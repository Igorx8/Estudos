//classe é um molde padrão para a criação de um objeto
import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente('Igor','123.222.111-52');
const cliente2 = new Cliente('Alice', '111.222.333-55');

const contaCorrenteIgor = new ContaCorrente('0001', cliente1);
contaCorrenteIgor._saldo = 1625;

const conta2 = new ContaCorrente('102');
//conta2.cliente = new Cliente();  //caso definido como null, ou se apagado, as propriedades não poderão ser setadas, null/undefined
//conta2.cliente.nome = 'Alice'
//conta2.cliente.cpf = '111.222.333-55'

const conta3 = new ContaCorrente('102', cliente2);

contaCorrenteIgor.transferir(200, conta2)

//posso acessar um atributo da classe diretamente
console.log(ContaCorrente.numeroDeContas);