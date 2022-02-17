function printType(value) {
    if (typeof value === 'number') {
        value; //ao usar a notação de ponto, o vscode já da as opções para number, pois ele identificou que é do tipo number no typeof
    }
    else if (typeof value === 'string') {
        value; //ao usar a notação de ponto, o vscode já da as opções para string, pois ele identificou que é do tipo string no typeof 
    }
}
const developer = { name: 'Mateus', language: 'Python' };
const designer = { name: 'Luis', software: 'Photoshop' };
function isDeveloper(person) {
    return 'language' in person;
}
function printSkill(person) {
    if (isDeveloper(person)) {
        console.log('developer');
    }
    else {
        console.log('designer');
    }
}
printSkill(developer);
class Pato {
    falar() {
    }
}
