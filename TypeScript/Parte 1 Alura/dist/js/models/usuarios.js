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
        return this.usuarios.splice(1, index);
    }
}
