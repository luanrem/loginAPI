import { Router } from "express";
import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";
import { CreateUserController } from "../../../modules/creation/useCases/createUser/CreateUserController";
import { ListUserController } from "../../../modules/creation/useCases/listUser/ListUserController";

const usersRoute = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

usersRoute.post("/", createUserController.handle);

usersRoute.get("/:id", ensureAuthenticated, listUserController.handle);

export { usersRoute };
