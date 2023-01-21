interface ICreateUserLoginDataDTO {
  loginName: string;
  emailAddress: string;
  passwordHash: string;
  passwordSalt: string;
}

interface IUserLoginDataRepositoryInMemory {
  create({
    loginName,
    emailAddress,
    passwordHash,
    passwordSalt,
  }: ICreateUserLoginDataDTO): void;
}

export { IUserLoginDataRepositoryInMemory, ICreateUserLoginDataDTO };
