const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: '127.0.0.1',
    port: 3360,
    user: 'root',
    password: '',
    database: 'escola'
})

module.exports = conexao