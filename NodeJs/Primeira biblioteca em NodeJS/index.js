const chalk = require('chalk')
const log = (a) => console.log(a)

log('vamos começar!!')

const paragrafo = 'Texto retornado por uma função'

function texto(string){
    return string
}

log(chalk.blue(texto(paragrafo)))

log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);