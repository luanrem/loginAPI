import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../shared/errors/AppError";
import { UserLoginDataRepository } from "../shared/repositories/UserLoginDataRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing!");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "058611678c7433d348e5924351048581"
    ) as IPayload;

    const userLoginDataRepository = new UserLoginDataRepository();
    const user = await userLoginDataRepository.findById(sub);

    if (!user) {
      throw new AppError("User does not exist!");
    }

    next();
  } catch {
    throw new AppError("Invalid Token!");
  }
}
