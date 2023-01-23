import { Router } from "express";
import { CreateUserController } from "../../../modules/creation/useCases/createUser/CreateUserController";
import { ListUserController } from "../../../modules/creation/useCases/listUser/ListUserController";

const usersRoute = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

usersRoute.post("/", createUserController.handle);

usersRoute.get("/:id", listUserController.handle);

export { usersRoute };
