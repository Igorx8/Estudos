export class Pessoa<T, U> {
  constructor(
    public nome: T,
    public idade: U
  ) { }
}

const pessoa1 = new Pessoa('Igor', 25); //Pessoa<string, number>  o TS inferiu o tipo do generic
const pessoa2 = new Pessoa(['Igor'], 25); //Pessoa<string[], number>
const pessoa3 = new Pessoa('Igor', { idade: 25 }); //Pessoa<string, { idade : number }>

export class Stack<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  length(): number {
    return this.contador;
  }

  showItems(): void {
    for (const key in this.elementos) {
      console.log(this.elementos[key]);

    }
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

const elemento1 = stack.pop();
console.log(elemento1); //5


stack.showItems(); // 1 2 3 4

while (!stack.isEmpty()) {
  console.log(stack.pop());  //4 3 2 1
}
