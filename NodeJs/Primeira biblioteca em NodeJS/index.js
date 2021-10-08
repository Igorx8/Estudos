const chalk = require('chalk')
const fs = require('fs')

const texto = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)'

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const linksExtraidos = texto.match(regex);
    console.log(linksExtraidos)
}

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

extraiLinks(texto)
// pegaArquivo('./arquivos/texto1.md')

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
