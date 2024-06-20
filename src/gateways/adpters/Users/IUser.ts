import { BaseGateway } from "../../../base/gateway.base";
import BaseModel from "../../../base/model.base";
import User from "../../../entity/User";

export interface UserGatewayInterface
  extends BaseGateway<User, User & BaseModel> {
    
    readByEmail(email:string):Promise<User & BaseModel>
    resetPassword(id:string,password:string):Promise<boolean>
  
}
