import http from '../../http'

export default class Endpoints{

    carrega(nomeDaRota){

        if(nomeDaRota == 'lista'){
              http.get("escola")
              .then(response => this.dadosReq = response.data)
              .catch(erro => console.log(erro));
              
        }
    }
}

