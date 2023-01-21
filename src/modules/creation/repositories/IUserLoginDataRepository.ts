import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUserLoginDataRepository {
  create(data: ICreateUserDTO): Promise<void>;
}

export { IUserLoginDataRepository };
