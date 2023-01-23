import { Request, Response } from "express";
import { container } from "tsyringe";
import { TokenAuthenticateUserUseCase } from "./TokenAuthenticateUserUseCase";

class TokenAuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const tokenAuthenticateUserUseCase = container.resolve(
      TokenAuthenticateUserUseCase
    );

    const token = await tokenAuthenticateUserUseCase.execute({
      password,
      email,
    });

    return response.json(token);
  }
}

export { TokenAuthenticateUserController };
