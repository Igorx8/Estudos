var nome = window.document.querySelector('input#nome')
var senha = window.document.querySelector('input#senha')

const dados = []

function cadastra(){ 

    dados.push(
        { 
            name: nome.value,
            pwd: senha.value
        }
    )

    localStorage.setItem('Usuario', JSON.stringify(dados))
    alert('Cadastrou')
}


function testar(){
    let tabela = JSON.parse(localStorage.Usuario)
    let logado = 0
    for(i = 0; i < tabela.length; i++){
        if(tabela[i].name == nome.value && tabela[i].pwd == senha.value){
            logado += 1
        }
    }
    if(logado == 1){ 
        alert('Logado')
        window.location.href="https://github.com/Igorx8"
    }
    else{
        alert('Dados inválidos')
    }
}

function deleta(){
    if(localStorage.getItem('nome') == nome.value){
        localStorage.removeItem('nome',nome.value)
        localStorage.removeItem('senha',senha.value)
    }
    else{
        alert('Usuário não encontrado')
    }
}

/*
    localStorage.removeItem('nome') -> remove o campo selecionado
    localStorage.clear() -> remove todos os campos
*/