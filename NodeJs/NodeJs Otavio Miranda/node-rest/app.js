import dotenv from "dotenv";

dotenv.config();

import "./src/database";
import express from "express";

import home from "./src/routes/home";
import user from "./src/routes/user";
import tokens from "./src/routes/token";
import aluno from "./src/routes/aluno";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", home);
    this.app.use("/users", user);
    this.app.use("/tokens", tokens);
    this.app.use("/alunos", aluno);
  }
}

export default new App().app;
