import { ProdutoController } from "./controllers/produto-controlller.js";
const produtoController = new ProdutoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', evento => {
        evento.preventDefault();
        produtoController.adiciona();
    });
}
