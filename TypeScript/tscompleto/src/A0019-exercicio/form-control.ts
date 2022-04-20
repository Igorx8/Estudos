type user = { nome: string; email: string; senha: string };
type validaUser = (usuario: user, formulario: user) => boolean;

//Validação
const validaUsuario: validaUser = (user, formulario) => {
  const erros = [];

  for (let i = 0; i < Object.keys(formulario).length; i++) {
    if (Object.values(formulario)[i] === '') erros.push(i);
    const limpaErro = document.getElementsByClassName('error-message')[
      i
    ] as HTMLSpanElement;
    limpaErro.style.display = 'none';
  }

  if (erros.length > 0) {
    for (const erro of erros) {
      const showErro = document.getElementsByClassName('error-message')[
        erro
      ] as HTMLSpanElement;
      showErro.style.display = 'block';
    }
    return false;
  } else {
    return (
      user.email === formulario.email &&
      user.nome === formulario.nome &&
      user.senha === formulario.senha
    );
  }
};

const banco = { nome: 'Igor', email: 'igor@tsaaviacao.com', senha: '123' };

const form = document.querySelector('.form') as HTMLFormElement;
form.addEventListener('submit', (event) => {
  const nome = document.querySelector('#username') as HTMLInputElement;
  const email = document.querySelector('#email') as HTMLInputElement;
  const senha = document.querySelector('#password') as HTMLInputElement;
  const senha2 = document.querySelector('#password2') as HTMLInputElement;

  if (senha.value !== senha2.value) {
    event.preventDefault();
    const erroSenha = document.getElementsByClassName(
      'error-message',
    )[2] as HTMLSpanElement;
    const erroSenha2 = document.getElementsByClassName(
      'error-message',
    )[3] as HTMLSpanElement;
    erroSenha.style.display = 'block';
    erroSenha2.style.display = 'block';
  } else {
    const formulario = {
      nome: nome.value,
      email: email.value,
      senha: senha.value,
    };

    if (validaUsuario(banco, formulario)) alert('entrou');
    else {
      event.preventDefault();
      alert('Algum dos campos digitados é inválido');
    }
  }
});
