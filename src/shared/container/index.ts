import { container } from "tsyringe";

import { IUserLoginDataRepository } from "../repositories/IUserLoginDataRepository";
import { UserLoginDataRepository } from "../repositories/UserLoginDataRepository";

container.registerSingleton<IUserLoginDataRepository>(
  "UserLoginDataRepository",
  UserLoginDataRepository
);
