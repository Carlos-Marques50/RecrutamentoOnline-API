import { BaseService } from "../../base/service.base";
import User from "../../entity/User";
import Model from "../../base/model.base"
import { UserGatewayInterface } from "../../gateways/adpters/IUser";

export default class UserGetOne implements BaseService<number, (User & Model) | TypeError>{

    constructor(private readonly userGateway: UserGatewayInterface ){}

    Execute = async (id: number) => {

       return await this.userGateway.readOne(id);

    }
}



