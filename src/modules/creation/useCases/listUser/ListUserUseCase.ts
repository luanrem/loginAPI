import { inject, injectable } from "tsyringe";
import { IUserLoginDataRepository } from "../../../../shared/repositories/IUserLoginDataRepository";

interface IListUserResponse {
  user_id?: string;
  login_name: string;
  user_email: string;
}

@injectable()
class ListUserUseCase {
  constructor(
    @inject("UserLoginDataRepository")
    private userLoginDataRepository: IUserLoginDataRepository
  ) {}

  async execute(id: string): Promise<IListUserResponse> {
    const user = await this.userLoginDataRepository.findById(id);

    return {
      user_id: user.user_id,
      login_name: user.login_name,
      user_email: user.user_email,
    };
  }
}

export { ListUserUseCase };
