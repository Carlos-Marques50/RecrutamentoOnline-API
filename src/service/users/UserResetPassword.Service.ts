import { BaseService } from "../../base/service.base";
import { InputDataRecoveryPass } from "../../dto/userDTO/RecoveryPass.dto";
import { UserGatewayInterface } from "../../gateways/adpters/Users/IUser";
import TypeError from "../../shared/TypeError";
import * as bcrypt from "bcrypt";

export default class UserResetPassword
  implements BaseService<InputDataRecoveryPass, string | TypeError> {
  private readonly userGateway: UserGatewayInterface;
  constructor(userGateway: UserGatewayInterface) {
    this.userGateway = userGateway;
  }
  async Execute(params: InputDataRecoveryPass): Promise<string | TypeError> {
    const user = await this.userGateway.readOne(params.id);
    if (!user) {
      return new TypeError("User não encontrado!", 400);
    }
    if (!bcrypt.compareSync(params.oldPassword, user.password)) {
      return new TypeError("Password antiga incorreta", 400);
    }
    const resetPassword = await this.userGateway.resetPassword(
      params.id,
      params.newPassword
    );
    if (!resetPassword) {
      console.error("Bug Detectado - Falha desconhecida na alteração da Password!");
      return new TypeError("Falha na alteração da password", 500);
    }
    return "Password Alterada com sucesso";
  }


}
