import { hash } from "bcrypt";
import { IUserLoginDataRepository } from "../../../repositories/IUserLoginDataRepository";

class CreateUserUseCase {
  constructor(private userLoginDataRepository: IUserLoginDataRepository) {}

  async execute({ name, email, password }): Promise<void> {
    const passwordHash = await hash(password, 8);
    const passwordSalt = await hash(email, 8);

    this.userLoginDataRepository.create({
      loginName: name,
      emailAddress: email,
      passwordHash,
      passwordSalt,
    });
  }
}

export { CreateUserUseCase };
