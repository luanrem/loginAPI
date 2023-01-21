import { hash } from "bcrypt";
import { IUserLoginDataRepository } from "../../repositories/IUserLoginDataRepository";

class CreateUserUseCase {
  constructor(private userLoginDataRepository: IUserLoginDataRepository) {}

  async execute({ username, email, password }): Promise<void> {
    const password_hash = await hash(password, 8);
    const password_salt = await hash(email, 8);

    this.userLoginDataRepository.create({
      login_name: username,
      user_email: email,
      password_hash,
      password_salt,
    });
  }
}

export { CreateUserUseCase };
