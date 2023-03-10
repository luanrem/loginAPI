import { genSalt, hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUserLoginDataRepository } from "../../../../shared/repositories/IUserLoginDataRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserLoginDataRepository")
    private userLoginDataRepository: IUserLoginDataRepository
  ) {}

  async execute({ username, email, password }): Promise<void> {
    const userNameAlreadyExists = await this.userLoginDataRepository.findByName(
      username
    );

    if (userNameAlreadyExists) {
      throw new AppError("User or Email Already Exists!");
    }

    const userEmailAlreadyExists =
      await this.userLoginDataRepository.findByEmail(email);

    if (userEmailAlreadyExists) {
      throw new AppError("User or Email Already Exists!");
    }

    const password_salt = await genSalt(8);
    const password_salted = password_salt + password;
    const password_hash = await hash(password_salted, 10);

    this.userLoginDataRepository.create({
      login_name: username,
      user_email: email,
      password_hash,
      password_salt,
    });
  }
}

export { CreateUserUseCase };
