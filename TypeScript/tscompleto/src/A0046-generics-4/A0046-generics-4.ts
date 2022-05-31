type ObterChaveFn = <O, K extends keyof O>(obj: O, chave: K) => O[K];   //K é no máximo uma chave de O

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Amarelo',
  vacinas: ['Vacina 1', 'Vacina 2'],
  idade: 30
}

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');

console.log(vacinas, cor, obterChave(animal, 'idade'));
