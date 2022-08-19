import { Router } from "express";
import userController from "../controllers/UserController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get("/", loginRequired, userController.index);
router.get("/:id", userController.show);

router.post("/", userController.store);

router.put("/:id", userController.update);

router.delete("/:id", userController.delete);

export default router;

/*
index -> listagem (get)
store/create -> criação (post)
delete -> apaga (delete)
show -> mostra um unico (get)
update -> atualiza (patch ou put)
*/
