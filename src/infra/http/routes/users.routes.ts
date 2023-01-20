import { Router } from "express";
import { createUserController } from "../../../modules/creation/useCases/createUser";

const usersRoute = Router();

usersRoute.post("/users", (request, response) => {
  return createUserController.handle(request, response);
});

export { usersRoute };
