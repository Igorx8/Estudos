exports.paginaInicial = (req, res) => {
  res.render("index", {
    titulo: undefined,
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};

/*

app.get("/parametros/:p1?/:p2?", (req, res) => {
  res.send(["req.params", req.params, "req.query", req.query]).status(200);
});


*/
