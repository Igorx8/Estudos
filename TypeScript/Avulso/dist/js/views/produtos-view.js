import { View } from './view.js';
export class ProdutosView extends View {
    template(model) {
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
          <td> ${produto.quantidade} </td>
        </tr>
          `;
        }).join('')}
      </tbody>
    </table>
    `;
    }
}
