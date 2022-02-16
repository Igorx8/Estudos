import { Usuario } from '../models/usuario.js'
import { Usuarios } from '../models/usuarios.js'

export class UsuarioController{
  private inputNome : HTMLInputElement;
  private inputIdade: HTMLInputElement;
  private inputSexo: HTMLInputElement;
  private listaUsers: HTMLDivElement;
  private users = new Usuarios();

  constructor(){
    this.inputNome = document.querySelector('#nome');
    this.inputIdade = document.querySelector('#idade');
    this.inputSexo = document.querySelector('#sexo');
    this.listaUsers = document.querySelector('#lista');
  }

  adiciona(){
    this.users.adiciona(this.criaUsuario())
    this.listaUsers.innerHTML = ''

    for(const elem of this.users.lista()){
       this.listaUsers.innerHTML += `
       <button 
        class="btn-danger" 
        id="${elem.id}"
        >
        REMOVER 
        </button> 
       <li 
        style="color: #${Math.floor(Math.random() * 999)}">
        ${elem.nome} ${elem.id}
       </li>`
    }

    console.log(this.users.lista())
    
  }

  criaUsuario(): Usuario{
    return new Usuario(
      this.users.lista().length,
      this.inputNome.value,
      Number(this.inputIdade.value),
      this.inputSexo.value)
  }

  removeUsuario(evento: any){
    this.listaUsers.innerHTML = ''

    this.users.remove(evento.target.id)

    for(const elem of this.users.lista()){
       this.listaUsers.innerHTML += `
       <button 
        class="btn-danger" 
        id="${elem.id}"
        >
        REMOVER 
        </button> 
       <li 
        style="color: #${Math.floor(Math.random() * 999)}; pointer-events: none">
        ${elem.nome} ${elem.id}
       </li>`
    }
  }
}