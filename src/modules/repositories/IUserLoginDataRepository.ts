interface ICreateUserLoginDataDTO {
  loginName: string;
  emailAddress: string;
  passwordHash: string;
  passwordSalt: string;
}

interface IUserLoginDataRepository {
  create({
    loginName,
    emailAddress,
    passwordHash,
    passwordSalt,
  }: ICreateUserLoginDataDTO): void;
}

export { IUserLoginDataRepository, ICreateUserLoginDataDTO };
