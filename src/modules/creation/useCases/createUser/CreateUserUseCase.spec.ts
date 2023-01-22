import { UserLoginDataRepositoryInMemory } from "../../repositories/in-memory/UserLoginDataRepositoryInMemory";
import { CreateUserUseCase } from "./CreateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let userLoginDataRepository: UserLoginDataRepositoryInMemory;

describe("Create User", () => {
  beforeEach(() => {
    userLoginDataRepository = new UserLoginDataRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userLoginDataRepository);
  });

  it("Should be possible to create a new user", async () => {
    const user = {
      username: "John Doe",
      email: "johndoe@mail.com",
      password: "johndoepassword",
    };

    await createUserUseCase.execute({
      username: user.username,
      email: user.email,
      password: user.password,
    });

    const userCreated = await userLoginDataRepository.findByName(user.username);

    expect(userCreated).toHaveProperty("user_id");
  });
});
