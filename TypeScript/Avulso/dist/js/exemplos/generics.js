function getArray(items) {
    return new Array().concat(items);
}
let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(['Hello', 'World']);
myNumArr.push(400);
myStrArr.push('!');
console.log(myNumArr, myStrArr);
function displayType(id, name) {
    console.log(typeof (id) + " - " + id, " | " + typeof (name) + " - " + name);
}
displayType(1, 'Igor');
function displayType2(id, name) {
    console.log(typeof (id) + " + ", typeof (name));
}
displayType2(2, 'Igor');
class Pessoa {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
}
function display(per) {
    console.log(`${per.firstName} ${per.lastName}`);
}
var per = new Pessoa('Bill', 'Gates');
display(per);
