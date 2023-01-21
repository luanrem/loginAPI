interface ICreateUserLoginDataDTO {
  login_name: string;
  user_email: string;
  password_hash: string;
  password_salt: string;
}

interface IUserLoginDataRepository {
  create({
    login_name,
    user_email,
    password_hash,
    password_salt,
  }: ICreateUserLoginDataDTO): Promise<void>;
}

export { IUserLoginDataRepository, ICreateUserLoginDataDTO };
