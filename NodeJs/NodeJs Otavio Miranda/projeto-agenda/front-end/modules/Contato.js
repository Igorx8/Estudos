import validator from "validator";

export default class Contato {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    if (!this.form) return;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const form = e.target;

    const nome = form.querySelector('input[name="nome"]');
    const sobrenome = form.querySelector('input[name="sobrenome"]');
    const email = form.querySelector('input[name="email"]');
    const telefone = form.querySelector('input[name="telefone"]');

    let erro = false;

    if (nome.value === "") {
      alert("O nome não pode estar vazio");
      erro = true;
    }

    if (email.value && !validator.isEmail(email.value)) {
      alert("Email inválido");
      erro = true;
      return;
    }

    if (!email.value && !telefone.value) {
      alert("Email ou telefone devem ser preenchidos");
      erro = true;
      return;
    }

    if (!erro) form.submit();
  }
}
