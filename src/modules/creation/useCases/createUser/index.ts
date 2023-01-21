import { UserLoginDataRepository } from "../../repositories/UserLoginDataRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const userLoginDataRepository = new UserLoginDataRepository();

const createUserUseCase = new CreateUserUseCase(userLoginDataRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
