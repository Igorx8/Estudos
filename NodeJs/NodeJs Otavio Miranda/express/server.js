require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado ao MongoDB");
    app.emit("pronto");
  })
  .catch((e) => {
    throw "Não foi possível conectar ao MongoDB";
  });

const routes = require("./routes");
const path = require("path");
const { globalMiddleWare } = require("./src/middlewares/middleware");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public"))); //permite acesso direto a pasta public pela url

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(globalMiddleWare);
app.use(routes);

app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
