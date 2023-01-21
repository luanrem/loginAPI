import { Repository } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { AppDataSource } from "../../../infra/typeorm";

import { User } from "../entities/User";
import {
  IUserLoginDataRepository,
  ICreateUserLoginDataDTO,
} from "./IUserLoginDataRepository";

class UserLoginDataRepository implements IUserLoginDataRepository {
  private repository: Repository<User>;

  private constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({
    login_name,
    user_email,
    password_hash,
    password_salt,
  }: ICreateUserLoginDataDTO): Promise<void> {
    const user = this.repository.create({
      user_id: uuidV4(),
      login_name,
      user_email,
      password_hash,
      password_salt,
    });

    await this.repository.save(user);
  }
}

export { UserLoginDataRepository };
