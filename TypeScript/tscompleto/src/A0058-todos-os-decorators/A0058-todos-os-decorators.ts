// Tipo do construtor na classe
type Constructor = new (...args: any[]) => any;

// Classes
function decoradorDeClasse(construtor: Constructor) {
  console.log('Classe');
  console.log(construtor);
  console.log('###');
}

// Método de instância (normal)
function decoradorDeMetodo(
  prototypeDaClasse: any,
  nomeDoMetodo: string,
  descritorDePropriedade: PropertyDescriptor,
) {
  //Chamado na criação do método (não precisa chamar o método)
  console.log('Método normal');
  console.log(prototypeDaClasse);
  console.log(nomeDoMetodo);
  console.log(descritorDePropriedade);
  console.log('###');
}

// Método estático
function decoradorDeMetodoEstatico(
  classConstructor: Constructor,
  nomeDoMetodo: string,
  descritorDePropriedade: PropertyDescriptor,
) {
  //Chamado na criação do método (não precisa chamar o método)
  console.log('Método estático');
  console.log(classConstructor);
  console.log(nomeDoMetodo);
  console.log(descritorDePropriedade);
  console.log('###');
}

//Parâmetro de método
function decoradorDeParametroDeMetodo(
  prototypeDaClasse: any,
  nomeDoMetodo: string,
  indiceParametro: number,
): any {
  //Chamado na criação do método
  console.log('Parâmetro de método');
  console.log(prototypeDaClasse);
  console.log(nomeDoMetodo);
  console.log(indiceParametro);
  console.log('###');
}

// Parâmetro de método estático
function decoradorDeParametroDeMetodoEstatico(
  classConstructor: Constructor,
  nomeDoMetodo: string,
  indiceParametro: number,
): any {
  //Chamado na criação do parâmetro (não precisa chamar o método)
  console.log('Parâmetro de método estático');
  console.log(classConstructor);
  console.log(nomeDoMetodo);
  console.log(indiceParametro);
  console.log('###');
}

// Propriedade
function decoradorDePropriedade(
  prototypeDaClasse: any,
  nomeDaPropriedade: string,
) {
  //Chamado na criação da propriedade
  console.log('Decorador de Propriedade');
  console.log(prototypeDaClasse);
  console.log(nomeDaPropriedade);
  console.log('###');
}

// Propriedade estática
function decoradorDePropriedadeEstatica(
  classConstructor: Constructor,
  nomeDaPropriedade: string,
): any {
  //Chamado na criação da propriedade
  console.log('Decorador de Propriedade Estática');
  console.log(classConstructor);
  console.log(nomeDaPropriedade);
  console.log('###');
}

// Getter / Setter
function decoradorDeGetterESetterNormal(
  prototypeDaClasse: any,
  nomeDaPropriedade: string,
  descritorDePropriedade: PropertyDescriptor,
) {
  //Chamado na criação do getter e setter
  console.log('Getter / Setter normal');
  console.log(prototypeDaClasse);
  console.log(nomeDaPropriedade);
  console.log(descritorDePropriedade);
  console.log('###');
}

// Getter/Setter estático
function decoradorDeGetterESetterEstatico(
  classConstructor: Constructor,
  nomeDaPropriedade: string,
  descritorDePropriedade: PropertyDescriptor,
) {
  //Chamado na criação do getter e setter
  console.log('Getter / Setter estático');
  console.log(classConstructor);
  console.log(nomeDaPropriedade);
  console.log(descritorDePropriedade);
  console.log('###');
}

// A classe e o uso dos decorators

@decoradorDeClasse
export class UmaPessoa {
  @decoradorDePropriedade
  nome: string;
  sobrenome: string;
  idade: number;

  @decoradorDePropriedadeEstatica
  static propriedadeEstatica = '';

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decoradorDeMetodo
  metodo(@decoradorDeParametroDeMetodo msg: string): string {
    return `${this.nome} ${this.sobrenome} ${msg}`;
  }

  @decoradorDeMetodoEstatico
  static metodoEstatico(
    @decoradorDeParametroDeMetodoEstatico msg: string,
  ): string {
    return UmaPessoa.propriedadeEstatica + msg;
  }

  @decoradorDeGetterESetterNormal
  get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }

  @decoradorDeGetterESetterEstatico
  static get staticPropertyGetterSetter(): string {
    return UmaPessoa.propriedadeEstatica;
  }

  static set staticPropertyGetterSetter(valor: string) {
    UmaPessoa.propriedadeEstatica = valor;
  }
}

// Uso da classe
const pessoa = new UmaPessoa('João', 'Silva', 30);
const metodo = console.log(pessoa.metodo('Olá'));
console.log(metodo);
