import { Usuario } from './usuario.js'

export class Usuarios{
  private usuarios: Array<Usuario> = [];

    adiciona(usuario: Usuario): void{
      this.usuarios.push(usuario)
    }

    lista(): readonly Usuario[]{
      return this.usuarios
    }

    remove(index: number): Usuario[] {
      let idx = this.usuarios.findIndex(user => user.id == index)
      return this.usuarios.splice(idx, 1)
    }
}