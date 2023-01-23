import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUserLoginDataRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByName(name: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
}

export { IUserLoginDataRepository };
