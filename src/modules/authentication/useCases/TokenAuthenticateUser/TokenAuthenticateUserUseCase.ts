import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";

import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { IUserLoginDataRepository } from "../../../../shared/repositories/IUserLoginDataRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class TokenAuthenticateUserUseCase {
  constructor(
    @inject("UserLoginDataRepository")
    private userLoginDataRepository: IUserLoginDataRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userLoginDataRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password incorrect");
    }

    const password_salted = user.password_salt + password;
    const passwordMatch = await compare(password_salted, user.password_hash);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect");
    }

    const token = sign({}, "058611678c7433d348e5924351048581", {
      subject: user.user_id,
      expiresIn: "1d",
    });

    return {
      user: {
        name: user.login_name,
        email: user.user_email,
      },
      token,
    };
  }
}

export { TokenAuthenticateUserUseCase };
