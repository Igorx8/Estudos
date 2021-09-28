const moment = require("moment");

const conexao = require("../infraestrutura/conexao");

class Atendimento {
  adiciona(atendimento, res) {
    // console.log(JSON.stringify(atendimento) + 'AQUI') o parametro chega como um objeto json, por isso podemos acessá-lo
    // ...copia os elementos do objeto (operador spread)
    const dataCriacao = new moment().format("YYYY-MM-DD HH:MM:SS");
    const data = moment(atendimento.data, "DD/MM/YYYY").format(
      "YYYY-MM-DD HH:MM:SS"
    );

    const dataEhValida = moment(data).isSameOrAfter(dataCriacao);
    const clienteEhValido = atendimento.cliente.length >= 5;

    const validacoes = [
      {
        nome: "data",
        valido: dataEhValida,
        mensagem: "Data deve ser maior ou igual a atual",
      },
      {
        nome: "cliente",
        valido: clienteEhValido,
        mensagem: "Cliente deve ter pelo menos 5 caracteres.",
      },
    ];

    const erros = validacoes.filter((campo) => !campo.valido);
    const existemErros = erros.length;

    if (existemErros) {
      res.status(400).json(erros);
    } else {
      const atendimentoDatado = { ...atendimento, dataCriacao, data };
      const sql = "INSERT INTO Atendimentos SET ?";

      conexao.query(sql, atendimentoDatado, (erro, resultados) => {
        if (erro) {
          res.status(400).json(erro);
        } else {
          res.status(201).json(resultados);
        }
      });
    }
  }

  lista(res){
      const sql = 'SELECT * FROM Atendimentos'

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
      const sql = `SELECT * FROM Atendimentos WHERE id = ${id}`

      conexao.query(sql, (erro, resultados) => {
          //como existe apenas um resultado, pois buscamos por id
          //pegamos o resultado no indice 0, para receber apenas o obj
          const atendimento = resultados[0]
          if(erro){
              res.status(400).json(erro)
          }
          else{
              res.status(200).json(atendimento)
          }
      })
  }
}

module.exports = new Atendimento();
