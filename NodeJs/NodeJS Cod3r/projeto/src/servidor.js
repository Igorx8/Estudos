const port = 3003

const express = require('express')
const app = express()

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
*/


app.get('/produtos', (req, res, next) => {
  res.send({nome: 'Notebook', preco: 123.45}) //converte para json
})

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`)
})