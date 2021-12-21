import { Cliente } from './Cliente.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js'

const diretor = new Diretor('Rodrigo', 10000, 12345678900);
diretor.cadastrarSenha('123456789');
const gerente = new Gerente('Rafael', 5000, 98765432100);
gerente.cadastrarSenha('123');
const cliente = new Cliente('Igor', 12345, '1223');

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123');
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456789');
const clienteEstaLogado = SistemaAutenticacao.login(cliente, '1223');


console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);