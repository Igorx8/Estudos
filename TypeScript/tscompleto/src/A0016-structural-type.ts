type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'Joao', password: '123456' }; //mesmo não declarando bdUser como o tipo User, o ts entende que é valida a verificação,
const sentUser = { username: 'Joao', password: '123456' }; // pois ele verifica o conteúdo do tipo e não a identidade do tipo em si

const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
