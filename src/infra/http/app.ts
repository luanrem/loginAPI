import "reflect-metadata";
import express from "express";
import { AppDataSource } from "../typeorm";
import { router } from "./routes";

const app = express();

AppDataSource.initialize()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Error connecting database", err));

app.use(express.json());

app.use(router);

export { app };
