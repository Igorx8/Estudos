interface Person {
  name: string;
  age: number; //? nem sempre é recomendado, pois a tipagem deixa de ser typesafe, abre brecha para falhas
}

const person: Person = {
  name: 'Mateus',
  age: 25
}

const personPartial: Partial<Person> = { //uma alternativa ideal ao ?
  name: 'Mateus'
}

const personReadonly: Readonly<Person> = {
  name: 'Mateus',
  age: 25
}

/*
personReadonly.age = 27 // não é permitido, pois a propriedade é readonly
*/

//criando um mappedType

type Stringify<T> = {
  [P in keyof T]: string;     //para cada chave do T(tipo genérico), transforme o tipo em string
}

const stringPerson: Stringify<Person> = {
  name: 'Mateus',
  age: '25'     //agora, caso age seja diferente de string, o sistema chora erro
}

type converteEmNumber<T> = {
  [P in keyof T]: number;   //tipos transformados em number
}

const numberPerson: converteEmNumber<Person> = {
  name: 15,
  age: 21
}