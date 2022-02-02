const fs = require('fs')

const produto = {
  nome: 'Celular',
  preco: 1249.99,
  desconto: 0.15
}

//gera um novo arquivo, convertendo para JSON
fs.writeFile(__dirname + '/arquivoGerado.js', JSON.stringify(produto), err => {
  console.log(err || 'Arquivo salvo!')
})