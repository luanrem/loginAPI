import { v4 as uuidV4 } from "uuid";

import { User } from "../creation/model/User";
import {
  IUserLoginDataRepository,
  ICreateUserLoginDataDTO,
} from "./IUserLoginDataRepository";

class UserLoginDataRepository implements IUserLoginDataRepository {
  private userLoginData: User[] = [];

  async create({
    loginName,
    emailAddress,
    passwordHash,
    passwordSalt,
  }: ICreateUserLoginDataDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      loginName,
      emailAddress,
      passwordHash,
      passwordSalt,
    });

    this.userLoginData.push(user);

    console.log(this.userLoginData);
  }
}

export { UserLoginDataRepository };
