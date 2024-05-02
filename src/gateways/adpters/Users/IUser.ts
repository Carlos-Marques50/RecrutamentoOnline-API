import { BaseGateway } from "../../../base/gateway.base"
import BaseModel from "../../../base/model.base";
import User from "../../../entity/User";
import { IntputDataLogin,OutputDataLogin } from "../../../dto/Login.dto";

export interface UserGatewayInterface extends BaseGateway<User, (User & BaseModel)> {

    test():Promise<void>;
    
    login(dataUser:IntputDataLogin):Promise<OutputDataLogin>;
}
