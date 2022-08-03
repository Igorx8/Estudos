require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {
  globalMiddleWare,
  checkCsrfError,
  csrfMiddleware,
} = require("./src/middlewares/middleware");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const routes = require("./routes");
const path = require("path");
const helmet = require("helmet");
const csrf = require("csurf");

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
app.use(express.static(path.resolve(__dirname, "public")));
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

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

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
