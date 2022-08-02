exports.globalMiddleWare = (req, res, next) => {
  console.log();

  if (req.body.nome) {
    console.log("Vi que você enviou o nome: " + req.body.nome);
  }
  console.log("Passei pelo midware global");

  next();
};
