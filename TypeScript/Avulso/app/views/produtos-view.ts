import { Produtos } from "../models/produtos.js";
import { View } from './view.js'

export class ProdutosView extends View<Produtos>{

  protected template(model: Produtos): string {
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
      ${model.lista().map(produto => {
        return `
        <tr>
          <td> ${produto.codigo}</td>
          <td> ${produto.nome} </td>
          <td> ${produto.preco} </td>
          <td> ${produto.quantidade} <button id="${produto.codigo}" onclick="${model.remove(produto.codigo)}" class="btn btn-danger" style="margin-left: 3%"> REMOVER </button></td>
        </tr>
          `
      }).join('')
      }
      </tbody>
    </table>
    `
  }
}