import { BaseService } from "../../base/service.base"
import { InputUserDto, OutputUserDto } from "../../dto/userDTO/User.dto";
import { UserGatewayInterface } from "../../gateways/adpters/Users/IUser";


export class UserUpdate implements BaseService<InputUserDto,OutputUserDto>{

    private readonly userGateway: UserGatewayInterface
    constructor(userGateway:UserGatewayInterface){
        this.userGateway= userGateway;
    }
    Execute(params: InputUserDto): Promise<OutputUserDto> {
        throw new Error("Method not implemented.");
    }
    
}