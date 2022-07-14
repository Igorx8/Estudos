const votos1 = {
  JavaScript: 0,
  Typescript: 0,
  Python: 0,
};

class Votes<T extends Record<string, number>> {
  //constraint to the generic type
  constructor(private _votos: T) {}

  checkEmpty(): boolean {
    return Object.keys(this._votos).length === 0;
  }

  showVotes(): void {
    for (const opcao in this._votos) {
      console.log(opcao + ' ' + this._votos[opcao]);
    }
  }

  vote(voteOption: keyof T): void {
    if (voteOption) {
      this._votos[voteOption]++;
      this.showVotes();
    } else {
      console.log('Digite a opção de voto desejada!');
    }
  }
}

export const votacao1: Votes<typeof votos1> = new Votes(votos1);
console.log(votacao1.showVotes());

console.log(votacao1.vote('Typescript'));

// since argument of this methiod is keyof T you can pass only valid key here
console.log(votacao1.vote('wrong'));
