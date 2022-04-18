let x = 10; //eslint-disable-line
x = 0b1010;
// x = 'Luiz'; //não podemos alterar o tipo no qual a variável foi inicializada, nesse caso foi number

// const y = 10; //y só aceita 10 como atribuição

const a: 100 = 100; //eslint-disable-line
//a = 120;  //não é possível, pois só aceita 100 como atribuição

const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Miranda',
};

// pessoa.nome = 'Luiz2'; //não é possível, pois pessoa.nome só aceita Luiz como atribuição
pessoa.sobrenome = 'teste';

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}

console.log(escolhaCor('Amarelo'));

export default x;
