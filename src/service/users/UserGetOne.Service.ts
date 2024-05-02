import { BaseService } from "../../base/service.base";
import User from "../../entity/User";
import Model from "../../base/model.base"
import { UserGatewayInterface } from "../../gateways/adpters/Users/IUser";
import TypeError from "../../shared/TypeError";

export default class UserGetOne implements BaseService<number, (User & Model) | TypeError>{

    constructor(private readonly userGateway: UserGatewayInterface ){}

    public Execute = async (id: number):Promise<(User & Model) | TypeError > => {

        if(isNaN(id) || id== null) return new TypeError("ID do Usuario não é valido",400);
        
        const userResult= await this.userGateway.readOne(id);
        if(!userResult) return new TypeError("Usuario não encontrado", 404);
        return userResult
    }
    
}
