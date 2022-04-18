function semRetorno(...args: Array<string>): void {
  console.log(args.join(', '));
}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Olá', 'Mundo');
pessoa.exibirNome();
export { pessoa };
