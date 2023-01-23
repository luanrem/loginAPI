import { Router } from "express";
import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";
import { TokenAuthenticateUserController } from "../../../modules/authentication/useCases/TokenAuthenticateUser/TokenAuthenticateUserController";

const tokenAuthenticateRoutes = Router();

const tokenAuthenticateUserController = new TokenAuthenticateUserController();

tokenAuthenticateRoutes.post(
  "/session",
  tokenAuthenticateUserController.handle
);

export { tokenAuthenticateRoutes };
