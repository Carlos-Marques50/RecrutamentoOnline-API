import { countReset } from "console";
import { BaseGateway } from "../../base/gateway.base"
import BaseModel from "../../base/model.base";
import User from "../../entity/User";

export interface UserGatewayInterface extends BaseGateway<User, User & BaseModel> {
    test():Promise<void>;
}
