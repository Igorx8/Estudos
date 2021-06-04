var nome = window.document.querySelector('input#nome')
var senha = window.document.querySelector('input#senha')

function cadastra(){
    localStorage.setItem('nome',nome.value)
    localStorage.setItem('senha', senha.value)
}


function testar(){
if(localStorage.getItem('nome') == nome.value && localStorage.getItem('senha') == senha.value){
    window.location.href = "https://www.google.com.br/"
}
else{
    alert('Login ou senha incorretos')
}
}