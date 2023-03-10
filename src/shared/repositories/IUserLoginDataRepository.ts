import { ICreateUserDTO } from "../../modules/creation/dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUserLoginDataRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByName(name: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export { IUserLoginDataRepository };
