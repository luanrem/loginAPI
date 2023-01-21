import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("user_login_data")
class User {
  @PrimaryColumn("uuid")
  user_id: string;

  @Column("varchar")
  login_name: string;

  @Column("varchar")
  user_email: string;

  @Column("varchar")
  password_hash: string;

  @Column("varchar")
  password_salt: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.user_id) {
      this.user_id = uuidV4();
    }
  }
}

export { User };
