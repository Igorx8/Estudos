type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';

type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';

type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Luiz',
  salario: 200_000, //o ts compreende como 200000, o _ é só para facilitar a leitura
  corPreferida: 'Amarelo',
};

export { pessoa };

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}
