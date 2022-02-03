const port = 3003

const express = require('express')
const app = express()
//app.use sem url aplica a todas as requisições
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
const bancoDeDados = require('./bancoDeDados')

/*

middleware, apenas chamada a segunda instancia de get produtos se existir o next()
app.get('/produtos', (req, res, next) => {
  console.log('Middleware 1')
  next()
})


definir algo que seja chamado em qualquer requisição
app.use((req, res, next) => {
  res.send({nome: 'Notebook', preco: 123.45}) //converte para json
})


requisição simples que envia um objeto como resposta
app.get('/produtos', (req, res, next) => {
  res.send({nome: 'Notebook', preco: 123.45}) //converte para json
})
*/

app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res) => {
  const produto = bancoDeDados.excluirProduto(req.params.id)
  res.send(produto)
})

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`)
})