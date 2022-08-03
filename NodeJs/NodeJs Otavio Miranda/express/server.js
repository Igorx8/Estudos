require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose"); //faz a conexão com o mongo
const {
  globalMiddleWare,
  checkCsrfError,
  csrfMiddleware,
} = require("./src/middlewares/middleware");
const session = require("express-session"); //armazena os dados de sessao no servidor
const MongoStore = require("connect-mongo"); //salva os dados na base de dados, sem ele, os dados são salvos na memória do servidor
const flash = require("connect-flash"); //mensagens auto destrutivas
const routes = require("./routes");
const path = require("path");
const helmet = require("helmet"); //seguranca, seta algumas configs nos headers para melhorar a segurança
const csrf = require("csurf"); //gera tokens

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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public"))); //permite acesso direto a pasta public pela url
app.use(helmet());

const sessionOptions = session({
  secret: "pepinoTomate",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});
app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views")); //seta a pasta de onde o express irá usar as views
app.set("view engine", "ejs"); //a engine que usamos para renderizar o html

app.use(csrf());

//Nossos middlewares
app.use(globalMiddleWare);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
