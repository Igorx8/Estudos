function printType(value: string | number) {
  if(typeof value === 'number'){
    value //ao usar a notação de ponto, o vscode já da as opções para number, pois ele identificou que é do tipo number no typeof
  }
  else if(typeof value === 'string'){
    value //ao usar a notação de ponto, o vscode já da as opções para string, pois ele identificou que é do tipo string no typeof 
  }
}


interface Developer{
  name: string;
  language: string;
}

interface Designer{
  name: string;
  software: string;
}

const developer: Developer = { name: 'Mateus', language: 'Python' };
const designer: Designer = { name: 'Luis', software: 'Photoshop' };

function isDeveloper(person: Developer | Designer): person is Developer{
  return 'language' in person;
}

function printSkill(person: Developer | Designer): void {
  if(isDeveloper(person)) {
    console.log('developer');
  }
  else{
    console.log('designer')
  }
}

printSkill(developer)

// function printSkill(person: Developer | Designer): void {
//   if('language' in person) {
//     console.log('developer');
//   }
//   else{
//     console.log('designer')
//   }
// }

// function printSkill(person: Developer | Designer): void {
//   if((person as Developer).language) {
//     console.log('developer');
//   }
//   else{
//     console.log('designer')
//   }
// }


//________________________________________________________________________________________________________________________________________________________________________________________________________________________

interface Animal {
  cor: string;
  peso: number;
  falar: Function;
}

class Pato implements Animal{
  cor: string;
  peso: number;

  falar(){

  }
}

