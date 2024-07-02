import { BaseService } from "../../base/service.base";
import { InputUserDto, OutputUserDto } from "../../dto/userDTO/User.dto";
import { UserGatewayInterface } from "../../gateways/adpters/IUser";
import TypeError from "../../shared/TypeError";

export default class UserStore
  implements BaseService<InputUserDto, OutputUserDto | TypeError> {
  private readonly userGateway: UserGatewayInterface;

  constructor(userGateway: UserGatewayInterface) {
    this.userGateway = userGateway;
  }

  async Execute(params: InputUserDto): Promise<OutputUserDto | TypeError> {

    const emailExist = await this.userGateway.readByEmail(params.email);
    if (emailExist) {
      const erro = new TypeError("Este Email já esta sendo usado", 400);
      return erro;
    }
    const userCreated = await this.userGateway.store(params);
    if (!userCreated)
      return new TypeError(
        "Ocorreu algum erro inesperado! Por favor tente novamente mais tarde.",
        500
      );
    return userCreated;
  }
}
