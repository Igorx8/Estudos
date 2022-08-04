import "core-js/stable";
import "regenerator-runtime/runtime";

import Login from "./modules/Login";
import Contato from "./modules/Contato";

const login = new Login("form.form-login");
const cadastro = new Login("form.form-cadastro");
login.init();
cadastro.init();

const contato = new Contato("form.form-contato");
contato.init();

// import "./assets/css/style.css";
