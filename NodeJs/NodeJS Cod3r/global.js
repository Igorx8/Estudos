// console.log(global)
//Object.freeze é usado para que não possamos alterar o objeto, fica apenas para leitura
global.MinhaApp = Object.freeze({
  saudacao() {
    return 'Estou em todos os lugares!'
  },

  nome: 'Sistema legal'
})