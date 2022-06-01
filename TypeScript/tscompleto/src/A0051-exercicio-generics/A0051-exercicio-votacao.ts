type VotationOption = {
  numberOfVotes: number;
  option: string;
}

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(
    public details: string
  ) { }

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }


      console.log('###################');

    }
  }
}


const votation1 = new Votation('Qual a sua linguagem de programação favorita ?');
votation1.addVotationOption({ numberOfVotes: 0, option: 'Python' });
votation1.addVotationOption({ numberOfVotes: 0, option: 'Javascript' });
votation1.addVotationOption({ numberOfVotes: 0, option: 'Typescript' });

votation1.vote(1);
votation1.vote(0);
votation1.vote(1);
votation1.vote(2);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);

votationApp.showVotations();
