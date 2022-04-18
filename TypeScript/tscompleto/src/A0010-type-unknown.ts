let x: unknown; //é como um any, porém mais seguro, é interessante sempre checar o número antes de realizar qualquer operação
x = 100;
x = 'Luiz';
x = 900;
x = '10';
const y = 800;

if (typeof x === 'number') console.log(x + y);
