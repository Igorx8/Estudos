const chalk = require('chalk')
const fs = require('fs')

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'O arquivo ou diretório não foram encontrados, erro(' + erro.code + ')'))
}

//async | await
async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto))
    }
    catch(erro){
        trataErro(erro)
    }
    
}

pegaArquivo('./arquivos/texto1.md')

// .then()  e .catch()
// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8'
//     fs.promises.readFile(caminhoDoArquivo, encoding)
//     .then((data) => console.log(chalk.yellow(data)))
//     .catch((erro) => trataErro(erro))
// }

// pegaArquivo('./arquivos/texto1.md')



// funcao normal
// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8'
//     fs.readFile(caminhoDoArquivo, encoding, (err, data) => {
//         if(err){
//             trataErro(err)
//         }
//         else{
//             console.log(chalk.green(data))
//         }
        
//     })
    
// }

// pegaArquivo('./arquivos/texto1.md')


// const log = (a) => console.log(a)
// const paragrafo = 'Texto retornado por uma função'

// function texto(string){
//     return string
// }

// log(chalk.blue(texto(paragrafo)))

// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);
