import { UserLoginDataRepositoryInMemory } from "../../../../shared/repositories/in-memory/UserLoginDataRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { ListUserUseCase } from "./ListUserUseCase";

let userLoginDataRepository: UserLoginDataRepositoryInMemory;
let listUserUseCase: ListUserUseCase;
let createUserUseCase: CreateUserUseCase;

describe("List user", () => {
  beforeEach(() => {
    userLoginDataRepository = new UserLoginDataRepositoryInMemory();
    listUserUseCase = new ListUserUseCase(userLoginDataRepository);
    createUserUseCase = new CreateUserUseCase(userLoginDataRepository);
  });

  it("Should be possible to list a user", async () => {
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

    const loginResponse = await listUserUseCase.execute(userCreated.user_id);

    expect(loginResponse.login_name).toBe(user.username);
    expect(loginResponse.user_email).toBe(user.email);
  });
});
