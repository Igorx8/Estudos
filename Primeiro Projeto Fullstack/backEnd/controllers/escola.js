const Escola = require('../models/escola')

module.exports = (app) =>{
    app.get('/escola', (req, res) =>{
        Escola.lista(res)
    })

    app.post('/escola', (req, res) =>{
        const novo = req.body
        Escola.adiciona(novo, res)
    })
}