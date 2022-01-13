const moment = require('../backEnd/node_modules/moment')

var a = new moment().utc()
var b = new Date('2021-01-01')

console.log(a, b)