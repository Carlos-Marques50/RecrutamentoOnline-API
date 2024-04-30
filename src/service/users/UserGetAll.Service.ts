import Model from "../../base/model.base"
import { BaseService } from "../../base/service.base"
import User from "../../entity/User"
import { UserGatewayInterface } from "../../gateways/adpters/IUser"
import TypeError from "../../shared/TypeError";

type Users= User & Model;

export default class UserGetAllService implements BaseService<void, (User & Model)[] |TypeError >
{
    constructor(private readonly userGateway: UserGatewayInterface){}

   Execute = async ():Promise<(User & Model)[] | TypeError > => {

        const usersResult = await this.userGateway.readAll();

        if (!usersResult) {
            return new TypeError("Dados não encontrados", 404);
        }

        return usersResult;
    }


}
