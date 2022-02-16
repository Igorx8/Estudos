export class Usuarios {
    constructor() {
        this.usuarios = [];
    }
    adiciona(usuario) {
        this.usuarios.push(usuario);
    }
    lista() {
        return this.usuarios;
    }
    remove(index) {
        console.log(this.lista());
        return this.usuarios.splice(index, 1);
    }
}
