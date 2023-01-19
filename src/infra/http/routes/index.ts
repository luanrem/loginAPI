import { Router } from "express";

import { usersRoute } from "./users.routes";

const router = Router();

router.use("/", usersRoute);

export { router };
