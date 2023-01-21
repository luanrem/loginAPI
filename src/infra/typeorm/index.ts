import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "user",
  password: "docker",
  database: "userapi",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: ["./src/infra/typeorm/migrations/*.ts"],
});
