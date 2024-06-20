import { BaseService } from "../../base/service.base";
import { UserGatewayInterface } from "../../gateways/adpters/Users/IUser";
import TypeError from "../../shared/TypeError";
import { IntputDataLogin, OutputDataLogin } from "../../dto/userDTO/Login.dto";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export default class UserLogin
  implements BaseService<IntputDataLogin, OutputDataLogin | TypeError>
{
  constructor(private readonly userGateway: UserGatewayInterface) {}

  public Execute = async (
    dataLogin: IntputDataLogin
  ): Promise<OutputDataLogin | TypeError> => {

    const length = Object.keys(dataLogin).length

    if (length === 0) return new TypeError("Dados em falta!", 400);

    const userExist = await this.userGateway.readByEmail(dataLogin.email);
    if (!userExist){
      console.log("TypeError");
      return new TypeError("Dados Incorreto", 401);
    } 

    const match = await bcrypt.compare(dataLogin.password, userExist.password);
    if (!match){
      return new TypeError("Dados Incorreto", 401);
    }

    const tokenConfig = { expiresIn: 60 * 60 };
    const payload = {
      id: userExist.id,
      name: userExist.name,
      // email: userExist.email,
      // status: userExist.status,
      // role: userExist.accessLevelId,
    };

    const jsonwebtokenUserToken = jwt.sign(payload, "secretKey", tokenConfig);
  
    return { 
      token: jsonwebtokenUserToken,
      User: userExist
    };
  };
}
