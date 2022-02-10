import http from '../../http'

export default class Endpoints{

    async carrega(nomeDaRota){

        if(nomeDaRota == 'lista'){
            try{
                const resposta = await http.get("escola")
              .then(response => {
                  this.dadosReq = response.data
                  this.rotaCampos =  Object.keys(response.data[0])
              })
              .catch(erro => console.log(erro));
            }
            catch(erro){
                console.error(erro)
            }
            finally{
                console.log('Consulta concluída')
            }
        }
    }

    edita(nomeDaRota){
      if(nomeDaRota === 'lista'){
        
      }
    }
}

