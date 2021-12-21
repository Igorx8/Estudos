//classe é um molde padrão para a criação de um objeto
import { Cliente } from './Cliente.js';
import { ContaPoupanca } from './Conta/ContaPoupanca.js'
import { ContaCorrente } from './Conta/ContaCorrente.js'
import { ContaSalario } from './Conta/ContaSalario.js'

const cliente1 = new Cliente('Igor','123.222.111-52');

let contaCorrenteIgor = new ContaCorrente( cliente1, '1001');
contaCorrenteIgor.depositar(500)
contaCorrenteIgor.sacar(100)

const contaPoup = new ContaPoupanca(0, cliente1, '1001');
const ContaSal = new ContaSalario(cliente1)
//posso acessar um atributo da classe diretamente
console.log(contaPoup);
console.error(contaCorrenteIgor)
console.log(ContaSal)
