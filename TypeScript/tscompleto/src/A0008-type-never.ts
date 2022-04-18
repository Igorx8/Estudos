export function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro(); //tipo never, nunca retorna nada, pode travar a aplicação se não for corretamente tratado
