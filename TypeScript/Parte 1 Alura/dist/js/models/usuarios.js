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
        let idx = this.usuarios.findIndex(user => user.id == index);
        return this.usuarios.splice(idx, 1);
    }
}
