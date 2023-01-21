import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserLoginTable1674265179337 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user_login_data",
        columns: [
          {
            name: "user_id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "login_name",
            type: "varchar",
          },
          {
            name: "password_hash",
            type: "varchar",
          },
          {
            name: "password_salt",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user_login_data");
  }
}
