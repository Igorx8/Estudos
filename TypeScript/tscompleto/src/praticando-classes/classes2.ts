export class SessaoUsuario {
  static usuarioLogado: SessaoUsuario | boolean;
  private constructor(
    private idSessao: number,
    private login: string,
    private password: string,
  ) {}

  static criaSessao(idSessao: number, login: string, password: string) {
    if (this.usuarioLogado) {
      console.log(`O usuário já está logado`);
      return this.usuarioLogado;
    }
    this.usuarioLogado = new SessaoUsuario(idSessao, login, password);
    console.log(`Criando sessão de usuário`);
    return this.usuarioLogado;
  }

  static finalizaSessao() {
    console.log('Finalizando sessão . . .');
    if (this.usuarioLogado) this.usuarioLogado = false;
  }
}

const sessao1 = SessaoUsuario.criaSessao(0, 'root', ''); //Criando sessão de usuário

const sessao2 = SessaoUsuario.criaSessao(0, 'root', ''); //O usuário já está logado

// console.log(sessao1, sessao2); //SessaoUsuario { idSessao: 0, login: 'root', password: '' } SessaoUsuario { idSessao: 0, login: 'root', password: '' }
//Singleton não possibilita duas instâncias ao mesmo tempo

SessaoUsuario.finalizaSessao();
const sessao3 = SessaoUsuario.criaSessao(1, 'root', '123');
console.log(sessao3);
