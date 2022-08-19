import { Router } from "express";
import userController from "../controllers/UserController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// Não deveria existir
router.get("/", loginRequired, userController.index); // Lista usuários
router.get("/:id", userController.show); // Lista usuário

// Deveria existir
router.post("/", userController.store);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;

/*
index -> listagem (get)
store/create -> criação (post)
delete -> apaga (delete)
show -> mostra um unico (get)
update -> atualiza (patch ou put)
*/
