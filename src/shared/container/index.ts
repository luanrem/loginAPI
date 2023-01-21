import { container } from "tsyringe";

import { IUserLoginDataRepository } from "../../modules/creation/repositories/IUserLoginDataRepository";
import { UserLoginDataRepository } from "../../modules/creation/repositories/UserLoginDataRepository";

container.registerSingleton<IUserLoginDataRepository>(
  "UserLoginDataRepository",
  UserLoginDataRepository
);
