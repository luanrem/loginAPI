import { v4 as uuidV4 } from "uuid";

class User {
  userId?: string;

  loginName: string;

  userEmail: string;

  passwordHash: string;

  passwordSalt: string;

  created_at: Date;

  constructor() {
    if (!this.userId) {
      this.userId = uuidV4();
    }
  }
}

export { User };
