import { Router } from "express";

import { tokenAuthenticateRoutes } from "./tokenAuthenticate.routes";
import { usersRoute } from "./users.routes";

const router = Router();

router.use("/user", usersRoute);
router.use("/token", tokenAuthenticateRoutes);

export { router };
