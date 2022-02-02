const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// //sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//async
fs.readFile(caminho, 'utf-8', (err, res) => {
  const config = JSON.parse(res)
  console.log(`${config.db.host} : ${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

//Lê o diretório atual, __dirname é nativo do node
fs.readdir(__dirname, (err, res) =>{
  console.log('Conteudo da pasta')
  console.log(res)
})