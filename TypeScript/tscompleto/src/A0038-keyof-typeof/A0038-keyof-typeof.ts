type CoresObj = typeof coresObj; //retorna o molde do tipo, a partir do objeto
type CoresChaves = keyof CoresObj; //me retorna os valores das chaves do obj

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
}

function traduzirCor(
  cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
console.log(traduzirCor('verde', coresObj));
