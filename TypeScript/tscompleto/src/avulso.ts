//type function
type MapNumberCallback = (item: number) => string;

function mapsNumber(
  array: Array<number>,
  callbackfn: MapNumberCallback,
): Array<string> {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const numeros = [1, 2, 3];
console.log(mapsNumber(numeros, (item) => String(item)));

//structural type
type verificaUsuario = (user: Usuario, valorEnviado: Usuario) => boolean;
type Usuario = { nome: string; senha: string; token: string };

const validaUser: verificaUsuario = (usuario, valorEnviado) => {
  return (
    usuario.nome === valorEnviado.nome &&
    usuario.senha === valorEnviado.senha &&
    usuario.token === valorEnviado.token
  );
};

const pessoa1 = {
  nome: 'Renato',
  senha: 'abcd',
  token: 'a1b2c3',
  outraChave: 'teste',
};

const valorEnviado = {
  nome: 'Renato',
  senha: 'abcd',
  token: 'a1b2c3',
  dadosExtras: 'Mais coisa',
};

if (validaUser(pessoa1, valorEnviado)) console.log('Usuário logado');
else console.log('Credenciais inválidas');
