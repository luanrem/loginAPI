import { Router } from "express";
import { CreateUserController } from "../../../modules/creation/useCases/createUser/CreateUserController";

const usersRoute = Router();

const createUserController = new CreateUserController();

usersRoute.post("/users", createUserController.handle);

export { usersRoute };
