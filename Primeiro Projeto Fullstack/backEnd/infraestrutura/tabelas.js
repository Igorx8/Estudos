class Tabelas{
    init(conexao){
        this.conexao = conexao

        this.criarAtendimentos()
    }

    criarAtendimentos(){
        const sql = `CREATE TABLE IF NOT EXISTS Escola(id INT NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL,
        localizacao varchar(200) NOT NULL, data datetime NOT NULL, status varchar(20) NOT NULL, PRIMARY KEY(id))`
    
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