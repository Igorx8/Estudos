const fs = require('fs').promises;
const path = require('path');
const caminhoDoArquivo = path.resolve(__dirname, '..', 'teste.json');

const lerArquivo = async (caminho) => {
    let dados = await fs.readFile(caminho, { enconding: 'utf8'});
    renderizaDados(dados);
}

const renderizaDados = (dados) => {
    dados = JSON.parse(dados);
    dados.forEach(dado => console.log(dado.nome));
}

lerArquivo(caminhoDoArquivo);