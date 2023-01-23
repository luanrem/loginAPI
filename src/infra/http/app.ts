import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import "reflect-metadata";

import { AppDataSource } from "../typeorm";

import { router } from "./routes";
import { AppError } from "../../shared/errors/AppError";

const app = express();

AppDataSource.initialize()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Error connecting database", err));

import "../../shared/container";

app.use(express.json());

app.use(router);

app.use(
  (err: Error, requests: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
