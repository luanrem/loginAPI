import { v4 as uuidV4 } from "uuid";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

import { User } from "../../entities/User";
import { IUserLoginDataRepository } from "../IUserLoginDataRepository";

class UserLoginDataRepositoryInMemory implements IUserLoginDataRepository {
  private userLoginData: User[] = [];

  async create({
    login_name,
    user_email,
    password_hash,
    password_salt,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      user_id: uuidV4(),
      login_name,
      user_email,
      password_hash,
      password_salt,
    });

    this.userLoginData.push(user);
  }

  async findByName(name: string): Promise<User> {
    const user = this.userLoginData.find((user) => user.login_name === name);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.userLoginData.find((user) => user.user_email === email);

    return user;
  }
}

export { UserLoginDataRepositoryInMemory };
