export class Usuario {
    constructor(_id, _nome, _idade, _sexo) {
        this._id = _id;
        this._nome = _nome;
        this._idade = _idade;
        this._sexo = _sexo;
    }
    get nome() {
        return this._nome;
    }
    get id() {
        return this._id;
    }
}
