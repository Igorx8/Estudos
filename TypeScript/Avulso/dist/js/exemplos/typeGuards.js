function printType(value) {
    if (typeof value === 'number') {
        value;
    }
    else if (typeof value === 'string') {
        value;
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
