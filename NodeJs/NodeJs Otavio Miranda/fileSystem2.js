const fs = require('fs').promises;
const path = require('path');
// const caminhoDoArquivo = path.resolve(__dirname, '..', 'teste.txt');
// fs.writeFile(caminhoDoArquivo, 'Frase1\n', { flag: 'a', encoding: 'utf8'});
const caminhoDoArquivo = path.resolve(__dirname, '..', 'teste.json');

const pessoas = [
    { nome: 'João' },
    { nome: 'Maria' },
    { nome: 'Eduardo' },
    { nome: 'Luiza' },
]

const json = JSON.stringify(pessoas, '', 2);


fs.writeFile(caminhoDoArquivo, json, { flag: 'w'}); 
//flag a = appeding, pois concatena o que já existe com o que estou mandando
//flag w = write, sobrepõe o que existe com o que estou mandando