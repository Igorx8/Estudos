exports.paginaInicial = (req, res, next) => {
  res.render("index");
};

exports.trataPost = (req, res, next) => {
  res.send(req.body);
};

/*

app.get("/parametros/:p1?/:p2?", (req, res) => {
  res.send(["req.params", req.params, "req.query", req.query]).status(200);
});


*/
