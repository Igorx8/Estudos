export class Aeronave{

  static id: number = 0;

  constructor(
    public readonly _id: number,
    public prefixo: string,
    public tipo: string
  ){
    this._id += Aeronave.id;
    Aeronave.id++;
  }
}