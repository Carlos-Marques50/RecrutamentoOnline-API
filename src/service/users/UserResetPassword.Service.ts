import { BaseService } from "../../base/service.base";
import { InputDataRecoveryPass } from "../../dto/userDTO/RecoveryPass.dto";
import { UserGatewayInterface } from "../../gateways/adpters/Users/IUser";
import TypeError from "../../shared/TypeError";
import * as bcrypt from "bcrypt";

export default class UserResetPassword
  implements BaseService<InputDataRecoveryPass, boolean | string>
{
  private readonly userGateway: UserGatewayInterface;
  constructor(userGateway: UserGatewayInterface) {
    this.userGateway = userGateway;
  }
  async Execute(params: InputDataRecoveryPass): Promise<boolean | string> {
    const user = await this.userGateway.readOne(params.id);
    if (!user) {
      return "Usuario Não encontrado"
      
    }else{
      return true;
    }

    // if (!bcrypt.compareSync(params.oldPassword, user.password)) {
    //   return new TypeError("Password antiga incorreta", 400);
    // } 
    // const resetPassword = await this.userGateway.resetPassword(
    //   params.id,
    //   params.newPassword
    // );
    // if (!resetPassword) {
    //   return new TypeError("Facha na alteração da password", 500);
    // }
    // return true;

  }


}
