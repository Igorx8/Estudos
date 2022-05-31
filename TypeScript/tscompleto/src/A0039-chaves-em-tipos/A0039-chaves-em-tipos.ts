type Veiculo = {
  marca: string;
  ano: string;
}

type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
}

const carro: Car = {
  brand: 'Ford',
  year: '2020'
}

console.log(carro);

//podemos espelhar o tipo da forma apresentada acima
