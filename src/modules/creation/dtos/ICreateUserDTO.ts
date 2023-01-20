interface ICreateUserDTO {
  userId: string;
  loginName: string;
  passwordHash: string;
  passwordSalt: string;
}

export { ICreateUserDTO };
