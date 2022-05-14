const projeto = {
    id: 1,
    descricao: 'Alura tracker 3.0'
}

const proxy = new Proxy(projeto, {
    get(objetoOriginal, chave) {  //projeto, descricao
        console.log(`Alguém pediu a chave ${chave} do projeto`);
        return objetoOriginal[chave];
    },
    set(objetoOriginal, chave, valor) {
        console.log(`Alguém alterou a chave ${chave} do projeto para o valor ${valor}`);
        objetoOriginal[chave] = valor;
    }
})

// console.log(projeto.descricao); //Alura tracker 3.0
// console.log(proxy.descricao); //Alguém pediu a chave descricao do projeto | Alura tracker 3.0

proxy.descricao = 'Reatividade funciona assim'

console.log(proxy.descricao);
/*
    Alguém alterou a chave descricao do projeto para o valor Reatividade funciona assim
Alguém pediu a chave descricao do projeto
Reatividade funciona assim
*/