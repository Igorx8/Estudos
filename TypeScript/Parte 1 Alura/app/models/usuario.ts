export class Usuario{

  constructor(
    private _id: number,
    private _nome: string, 
    private _idade: number, 
    private _sexo: string
  ){}

  get nome(){
    return this._nome;
  }

  get id(){
    return this._id;
  }
}