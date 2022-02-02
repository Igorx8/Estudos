const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) //resultado esperado(3)


contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // resultado esperado (3, 1) pois a factory function retorna um novo objeto, não mantendo os dados em cache