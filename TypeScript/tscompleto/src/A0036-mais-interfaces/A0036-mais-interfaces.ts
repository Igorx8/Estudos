/*
Não podemos declarar mais de um type com o mesmo nome
já no caso das interfaces, elas se mergeam caso o nome seja o mesmo
O nome disso é declaration merging

type Pessoa = {
  nome: string;
};
*/

interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  idade?: number; //? define como undefined ou o tipo que você definiu
}

export const pessoa: Pessoa = {
  nome: 'Igor',
  sobrenome: 'Carvalho',
  enderecos: ['Av. Brasil'],
};

// pessoa.enderecos.push('Rua ruby'); //Só é possível definir enderecos na instância, pois é readonly
