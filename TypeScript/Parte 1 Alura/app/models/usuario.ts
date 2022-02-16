export class Usuario{

  constructor(
    private _id: number,
    private _nome: string, 
    private _idade: number, 
    private _sexo: string
  ){}

  get id(){
    return this._id;
  }
  
  get nome(){
    return this._nome;
  }

  get idade(){
    return this._idade;
  }

  get sexo(){
    return this._sexo;
  }

}