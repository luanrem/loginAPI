import { response, Router } from "express";

const usersRoute = Router();

usersRoute.get("/users", () => {
  console.log("users");
});

export { usersRoute };
