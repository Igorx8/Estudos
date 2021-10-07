class Tabelas{
    init(conexao){
        this.conexao = conexao

        this.criarAtendimentos()
    }

    criarAtendimentos(){
        const sql = `CREATE TABLE IF NOT EXISTS escola(id INT NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL,
        email varchar(100) NOT NULL, telefone varchar(20) NOT NULL, data date NOT NULL, status varchar(20) NOT NULL, PRIMARY KEY(id))`
    
        this.conexao.query(sql, erro =>{
            if(erro){
                console.log(erro)
            }
            else{
                console.log('Tabela Escola criada com sucesso!')
            }
        })
    }
}

module.exports = new Tabelas