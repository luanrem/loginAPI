import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { IUserLoginDataRepository } from "../../repositories/IUserLoginDataRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserLoginDataRepository")
    private userLoginDataRepository: IUserLoginDataRepository
  ) {}

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
