console.log(module.exports === this)
console.log(module.exports === exports)
console.log(exports === this)

this.a = 'a'
exports.b = 'b'
module.exports.c = 'c'

exports = null
console.log(module.exports)

exports = { 
  nome : 'Teste'
}

console.log(module.exports)

//valor esperado { a: 'a', b: 'b', c: 'c' }

//o único que consegue mudar a atribuição é o próprio module.exports

module.exports = {
  publico: true
}

console.log(module.exports)

// valor esperado { publico : true }

//this e exports são apenas referencias para o module.exports, pois é o único que será retornado