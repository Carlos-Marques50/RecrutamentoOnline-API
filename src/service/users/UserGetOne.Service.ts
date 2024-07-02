import { BaseService } from "../../base/service.base";
import User from "../../entity/User";
import Model from "../../base/model.base";
import { UserGatewayInterface } from "../../gateways/adpters/IUser";
import TypeError from "../../shared/TypeError";

export default class UserGetOne
  implements BaseService<string, (User & Model) | TypeError> {
  constructor(private readonly userGateway: UserGatewayInterface) { }

  public Execute = async (id: string): Promise<(User & Model) | TypeError> => {

    const userResult = await this.userGateway.readOne(id);

    if (!userResult || userResult === null) {
      return new TypeError("Usuario não encontrado", 404);
    } else {
      return userResult;
    }
  };
}
