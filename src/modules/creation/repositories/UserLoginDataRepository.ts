import { Repository } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { AppDataSource } from "../../../infra/typeorm";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

import { User } from "../entities/User";
import { IUserLoginDataRepository } from "./IUserLoginDataRepository";

class UserLoginDataRepository implements IUserLoginDataRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({
    login_name,
    user_email,
    password_hash,
    password_salt,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      user_id: uuidV4(),
      login_name,
      user_email,
      password_hash,
      password_salt,
    });

    await this.repository.save(user);
  }

  findByName(name: string): Promise<User> {
    throw new Error("Method not implemented."); //TODO - Not implemented on production yet
  }
}

export { UserLoginDataRepository };
