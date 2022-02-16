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
        console.log(this.lista())
        return this.usuarios.splice(index, 1)
      }
}