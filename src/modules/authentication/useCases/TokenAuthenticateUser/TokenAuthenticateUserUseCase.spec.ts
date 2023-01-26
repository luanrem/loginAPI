import { UserLoginDataRepositoryInMemory } from "../../../../shared/repositories/in-memory/UserLoginDataRepositoryInMemory";
import { ICreateUserDTO } from "../../../creation/dtos/ICreateUserDTO";
import { CreateUserUseCase } from "../../../creation/useCases/createUser/CreateUserUseCase";
import { TokenAuthenticateUserUseCase } from "./TokenAuthenticateUserUseCase";

let userLoginDataRepository: UserLoginDataRepositoryInMemory;
let tokenAuthenticateUserUseCase: TokenAuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User by Token", () => {
  beforeEach(() => {
    userLoginDataRepository = new UserLoginDataRepositoryInMemory();
    tokenAuthenticateUserUseCase = new TokenAuthenticateUserUseCase(
      userLoginDataRepository
    );
    createUserUseCase = new CreateUserUseCase(userLoginDataRepository);
  });

  it("Should be able to authenticate user", async () => {
    const user = {
      username: "John Doe",
      email: "johndoe@mail.com",
      password: "johndoepassword",
    };

    await createUserUseCase.execute(user);

    const result = await tokenAuthenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });
});
