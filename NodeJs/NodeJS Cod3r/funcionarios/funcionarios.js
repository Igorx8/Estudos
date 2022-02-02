const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
  const funcionarios = response.data
  
  funcionarios.sort((a, b) => b.salario - a.salario)
  console.log(funcionarios.find(func => func.pais == 'China' && func.genero == 'F'))
})

/*
Outra forma de escrever seria:

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data

  const func = funcionarios
  .filter(chineses)
  .filter(mulheres)
  .reduce(menorSalario)
  
  console.log(func)
})
*/