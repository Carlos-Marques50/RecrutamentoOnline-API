import Model from "../../base/model.base"
import { BaseService } from "../../base/service.base"
import User from "../../entity/User"
import { UserGatewayInterface } from "../../gateways/adpters/IUser"
import TypeError from "../../shared/TypeError";

export default class UserGetAllService implements BaseService<void, (User & Model)[]>
{
    constructor(private readonly userGateway: UserGatewayInterface){}

    Execute = async () => {

        const usersResult = await this.userGateway.readAll();

        // if(!usersResult) throw new TypeError("Dados não encontrados",404);

        return usersResult;
    }

}
