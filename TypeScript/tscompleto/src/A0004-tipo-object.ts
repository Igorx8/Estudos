const objetoA: {
  chaveA: string;
  readonly chaveB: string; // não podemos alterar o valor
  chaveC?: string;
  [key: string]: unknown; //permite adicionar mais chaves desconhecidas (index signature)
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Novo valor A';
objetoA.chaveC = 'Nova chave';
objetoA.chaveD = 'Nova chave';

console.log(objetoA);
