import { AppError } from "./../../../../shared/errors/AppError";
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

  it("Should not be possible to create a new user with the same email", async () => {
    const user1 = {
      username: "Roger Jensen",
      email: "buvto@ma.gy",
      password: "475854",
    };

    const user2 = {
      username: "Nicholas Fowler",
      email: "buvto@ma.gy",
      password: "234836",
    };

    await createUserUseCase.execute({
      username: user1.username,
      email: user1.email,
      password: user1.password,
    });

    await expect(
      createUserUseCase.execute({
        username: user2.username,
        email: user2.email,
        password: user2.password,
      })
    ).rejects.toEqual(new AppError("User or Email Already Exists!"));
  });

  it("Should not be possible to create a new user with the same username", async () => {
    const user1 = {
      username: "Roger Jensen",
      email: "buvto@ma.gy",
      password: "475854",
    };

    const user2 = {
      username: "Roger Jensen",
      email: "azeso@jisva.ph",
      password: "234836",
    };

    await createUserUseCase.execute({
      username: user1.username,
      email: user1.email,
      password: user1.password,
    });

    await expect(
      createUserUseCase.execute({
        username: user2.username,
        email: user2.email,
        password: user2.password,
      })
    ).rejects.toEqual(new AppError("User or Email Already Exists!"));
  });
});
