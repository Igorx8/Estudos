import isEmail from 'validator/lib/isEmail';

const clsErro = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;

const nome = document.querySelector('#username') as HTMLInputElement;

const email = document.querySelector('#email') as HTMLInputElement;

const senha = document.querySelector('#password') as HTMLInputElement;

const senha2 = document.querySelector('#password2') as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  limpaErro(this);
  verificaCamposVazios(nome, email, senha, senha2);
  confereEmail(email);
  validaSenha(senha, senha2);
  if (enviaForm(this)) alert('ENVIOU');
});

function limpaErro(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + clsErro)
    .forEach((div) => div.classList.remove(clsErro));
}

function mensagemErro(input: HTMLInputElement, msg: string): void {
  const divPai = input.parentElement as HTMLDivElement;
  const spanErro = divPai.querySelector('.error-message') as HTMLSpanElement;
  spanErro.innerText = msg;
  divPai.classList.add(clsErro);
}

function verificaCamposVazios(...inputs: Array<HTMLInputElement>): void {
  inputs.forEach((input) => {
    if (!input.value) mensagemErro(input, 'O campo não pode ser vazio');
  });
}

function confereEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) mensagemErro(input, 'E-mail inválido');
}

function validaSenha(senha: HTMLInputElement, senha2: HTMLInputElement) {
  if (senha.value !== senha2.value) {
    mensagemErro(senha, 'As senhas não coincidem');
    mensagemErro(senha2, 'As senhas não coincidem');
  }
}

function enviaForm(formulario: HTMLFormElement): boolean {
  let envia = true;
  formulario.querySelectorAll('.' + clsErro).forEach(() => (envia = false));
  return envia;
}

export { form };
