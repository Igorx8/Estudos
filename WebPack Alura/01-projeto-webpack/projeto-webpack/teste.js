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

    localStorage.setItem('Usuario', JSON.stringify(dados)) //converte o objeto valores string
    alert('Cadastrou')
}


function testar(){
    let tabela = JSON.parse(localStorage.Usuario) //converte as strings em um novo objeto, usei let tabela como exemplo
    let logado = 0                                 //mas poderia ter feito a iteracao direto no array dados
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
    for(i = 0; i < dados.length; i++){
        if(dados[i].name == nome.value && dados[i].pwd == senha.value){
            confirm(`Deseja excluir o usuário ${dados[i].name} ?`)
            console.log(dados[i])
            dados.splice(i, 1)
        }
    }
    localStorage.Usuario = (JSON.stringify(dados))
}

/*
    localStorage.removeItem('nome') -> remove o campo selecionado
    localStorage.clear() -> remove todos os campos
*/