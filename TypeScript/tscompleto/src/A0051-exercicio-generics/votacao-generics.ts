class Votes<T> {
  constructor(
    private _votos: { [k: string | number]: T }
  ) { }

  checkEmpty(): boolean {
    return Object.keys(this._votos).length === 0;
  }

  showVotes(): void {
    for (const opcao in this._votos) {
      console.log(opcao + ' ' + this._votos[opcao]);

    }
  }

  vote(): void { }
}
