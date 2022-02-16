export class Usuario {
    constructor(_id, _nome, _idade, _sexo) {
        this._id = _id;
        this._nome = _nome;
        this._idade = _idade;
        this._sexo = _sexo;
    }
    get id() {
        return this._id;
    }
    get nome() {
        return this._nome;
    }
    get idade() {
        return this._idade;
    }
    get sexo() {
        return this._sexo;
    }
}
