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

  async findByName(name: string): Promise<User> {
    const user = await this.repository.findOneBy({
      login_name: name,
    });
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOneBy({
      user_email: email,
    });
    return user;
  }
}

export { UserLoginDataRepository };
