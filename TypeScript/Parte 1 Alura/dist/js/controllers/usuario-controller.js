import { Usuario } from '../models/usuario.js';
import { Usuarios } from '../models/usuarios.js';
export class UsuarioController {
    constructor() {
        this.users = new Usuarios();
        this.inputNome = document.querySelector('#nome');
        this.inputIdade = document.querySelector('#idade');
        this.inputSexo = document.querySelector('#sexo');
        this.listaUsers = document.querySelector('#lista');
    }
    adiciona() {
        this.users.adiciona(this.criaUsuario());
        this.listaUsers.innerHTML = '';
        this.listaUsers.innerHTML += `
            <thead> 
              <th> ID </th>
              <th> Nome </th>
              <th> Idade </th>
              <th> Sexo </th>
            </thead>

           <tbody>
           `;
        for (const elem of this.users.lista()) {
            this.listaUsers.innerHTML += `
       <tr colspan="10">
       <td style="background-color: #${Math.floor(Math.random() * 999999)}"> ${elem.id} </td>
       <td style="color: #${Math.floor(Math.random() * 999)}; background-color: #${Math.floor(Math.random() * 999999)}">
        ${elem.nome}
       </td>
       <td style="background-color: #${Math.floor(Math.random() * 999999)}"> ${elem.idade} </td>
       <td style="background-color: #${Math.floor(Math.random() * 999999)}"> ${elem.sexo} </td>
       <td style="background-color: #${Math.floor(Math.random() * 999999)}"> <button class="btn-danger" id="${elem.id}"> REMOVER </button> </td>
      
       </tr>`;
        }
        this.listaUsers.innerHTML += `
    </tbody>`;
    }
    criaUsuario() {
        return new Usuario(this.users.lista().length, this.inputNome.value, Number(this.inputIdade.value), this.inputSexo.value);
    }
    removeUsuario(evento) {
        this.users.remove(Number(evento.target.id));
        this.listaUsers.innerHTML = '';
        this.listaUsers.innerHTML += `
            <thead> 
              <th> ID </th>
              <th> Nome </th>
              <th> Idade </th>
              <th> Sexo </th>
            </thead>

           <tbody>
           `;
        for (const elem of this.users.lista()) {
            this.listaUsers.innerHTML += `
       <tr colspan="10">
       <td style="background-color: #${Math.floor(Math.random() * 999999)}"> ${elem.id} </td>
       <td style="color: #${Math.floor(Math.random() * 999)}; background-color: #${Math.floor(Math.random() * 999999)}">
        ${elem.nome}
       </td>
       <td style="background-color: #${Math.floor(Math.random() * 999999)}"> ${elem.idade} </td>
       <td style="background-color: #${Math.floor(Math.random() * 999999)}"> ${elem.sexo} </td>
       <td style="background-color: #${Math.floor(Math.random() * 999999)}"> <button class="btn-danger" id="${elem.id}"> REMOVER </button> </td>
      
       </tr>`;
        }
        this.listaUsers.innerHTML += `
    </tbody>`;
    }
}
