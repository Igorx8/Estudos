console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis(){
  console.log('Dentro de uma função')
  console.log(this === exports)
  console.log(this === module.exports)
  console.log(this === global)
}

logThis()

//Considerações finais, this fora da função aponta para o exports/module.exports e dentro da função aponta para global