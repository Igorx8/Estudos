type ObterChaveFn = <O, K extends keyof O>(obj: O, chave: K) => O[K];   //K é no máximo uma chave de O, colocamos o <> depois do =, pois se colocarmos antes, ele tentará inferir o tipo na declaração do tipo, como colocamos depois, ele irá inferir na chamada da função

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Amarelo',
  vacinas: ['Vacina 1', 'Vacina 2'],
  idade: 30
}

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');

console.log(vacinas, cor, obterChave(animal, 'idade'));
