//classe é um molde padrão para a criação de um objeto
import { Cliente } from './Cliente.js';
import { Conta } from './Conta.js'

const cliente1 = new Cliente('Igor','123.222.111-52');

const contaCorrenteIgor = new Conta('0001', cliente1, 1001);
contaCorrenteIgor._saldo = 1625;

const contaPoup = new Conta(50, cliente1, 1001);
//posso acessar um atributo da classe diretamente
console.log(contaPoup);
console.error(contaCorrenteIgor)