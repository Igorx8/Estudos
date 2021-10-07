const express = require('express')
const consign = require('consign')
const cors = require('cors')

module.exports = () => {
    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))

    app.use((req, res, next) => {
        //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
        res.header("Access-Control-Allow-Origin", "*")

        //Quais métodos podem ser utilizados na API
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
        app.use(cors())
        next()
    })

    consign().include('controllers').into(app)

    return app
}