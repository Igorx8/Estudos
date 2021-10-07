const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Escola{
    adiciona(registro, res){
        const data = moment(registro.data).format('YYYY-MM-DD')
        const hoje = new moment().format('YYYY-MM-DD')
        const dataEhValida = moment(data).isSameOrAfter(hoje)

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a atual'
            }
        ]

        const erros = validacoes.filter((campo) => !campo.valido)
        const existemErros = erros.length

        if(existemErros){
            res.status(400).json(erros)
        }
        else{
            const sql = 'INSERT INTO escola SET ?'

            conexao.query(sql, registro, (erro, resultados) =>{
                if(erro){
                    res.status(400).json(erro)
                }
                else{
                    res.status(201).json(registro)
                }
            })
        }
    }

    lista(res){
        const sql = 'SELECT * FROM escola'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM escola WHERE id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(resultados) // caso bugue, trocar por registro
            }
        })
    }
    
    deleta(id, res){
        const sql = 'DELETE FROM escola WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json({id})
            }
        })
    }
    
}

module.exports = new Escola()