interface ICreateUserDTO {
  user_id: string;
  login_name: string;
  user_email: string;
  password_hash: string;
  password_salt: string;
}

export { ICreateUserDTO };
