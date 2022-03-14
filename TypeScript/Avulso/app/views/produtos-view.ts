import { Produtos } from "../models/produtos.js";
import { View } from './view.js'

export class ProdutosView extends View<Produtos>{

  template(model: Produtos): string {
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th> Código </th>
          <th> Nome </th>
          <th> Preço </th>
          <th> Quantidade </th>
        </tr>
      </thead>
      <tbody>
      ${model.lista().map((produto, indice) => {
        return `
        <tr>
          <td> ${produto.codigo}</td>
          <td> ${produto.nome} </td>
          <td> ${produto.preco} </td>
          <td> ${produto.quantidade} 
          <button class="btn btn-danger" style="float: right" onclick="model.remove(indice)"> Excluir </button>
          </td>
        </tr>
          `
      }).join('')
      }
      </tbody>
    </table>
    `
  }
}