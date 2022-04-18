enum Cores {
  VERMELHO, //0
  AZUL, //1
  AMARELO, //2
}

enum Cores { //PODEMOS MERGEAR DOIS ENUM COM O MESMO NOME, PORÉM PRECISAMOS INICIALIZAR O PRIMEIRO VALOR PARA O ENUM QUE SERÁ MERGEADO, PARA QUE O TS DÊ SEQUENCIA
  LARANJA = 3, //3
  ROXO, //4
}
// console.log(Cores);

enum Tamanho {
  ALTO = 10, //podemos declarar o valor da opcao
  MEDIO = 5,
  BAIXO = 1,
  TEXTO = 'TESTE', //o ts não sabe continuar numerando a partir de uma string, então caso for enumerar de forma automatica, deve se declarar um numero para que o ts dê sequencia
  GIGANTE = 15,
}

console.log(Tamanho);

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(3); //laranja
escolhaACor(123456); //undefined
escolhaACor(Cores.ROXO); //ROXO
