import { BaseService } from "../../base/service.base"
import { InputUserDto, OutputUserDto } from "../../dto/userDTO/User.dto";
import User from "../../entity/User";
import { UserGatewayInterface } from "../../gateways/adpters/IUser";
import TypeError from "../../shared/TypeError";

export class UserUpdate implements BaseService<InputUserDto, User | TypeError> {//Essa implementaçâo foi improvisada, retirei a DTO 

    private readonly userGateway: UserGatewayInterface
    constructor(userGateway: UserGatewayInterface) {
        this.userGateway = userGateway;
    }
    async Execute(params: InputUserDto, id: string): Promise<User | TypeError> {

        const serviceResult = await this.userGateway.update(params, id);
        if (!serviceResult) return new TypeError("Actualização do usuario invalido", 400);
        return serviceResult;
    }

}