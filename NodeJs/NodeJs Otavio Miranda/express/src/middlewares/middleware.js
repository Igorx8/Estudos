exports.globalMiddleWare = (req, res, next) => {
  res.locals.umaVariavelLocal = "Este é o valor da variável local"; //seta uma variável local, disponível em todos os arquivos pois está no middleware global
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if (err && err.code === "EBADCSRFTOKEN") {
    return res.render("404");
  }
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};
