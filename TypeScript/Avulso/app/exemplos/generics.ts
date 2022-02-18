function getArray<T>( items: T[]) : T[] {
  return new Array<T>().concat(items);
}

let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(['Hello', 'World']);

myNumArr.push(400)
myStrArr.push('!')

console.log(myNumArr, myStrArr)

//Multiple line variables

function displayType<T, U>(id: T, name: U): void {
  console.log(typeof(id) + " - " + id, " | " + typeof(name) + " - " + name);
}

displayType<number, string>(1, 'Igor');

//Used with non-generic types
function displayType2<T>(id: T, name:string): void{
  console.log(typeof(id) + " + ", typeof(name));
}

displayType2<number>(2, 'Igor')

//generic constraints

class Pessoa {
  firstName: string;
  lastName: string;

  constructor(fname:string, lname: string) {
    this.firstName = fname;
    this.lastName = lname;
  }
}


function display<T extends Pessoa>(per: T): void{
  console.log(`${per.firstName} ${per.lastName}`);
}

var per = new Pessoa('Bill', 'Gates');
display(per);