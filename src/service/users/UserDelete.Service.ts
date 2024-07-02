import { BaseService } from "../../base/service.base";
import { UserGatewayInterface } from "../../gateways/adpters/IUser";
import TypeError from '../../shared/TypeError';

export default class UserDelete implements BaseService<string, boolean | TypeError> {

    private userGateway: UserGatewayInterface;

    constructor(usergateway: UserGatewayInterface) {
        this.userGateway = usergateway;
    }

    async Execute(params: string): Promise<boolean | TypeError> {

        const userExit = await this.userGateway.readOne(params);

        if (!userExit) {
            return new TypeError("Usuario não encontrado", 401);
        }

        const userGateway = await this.userGateway.delete(params);
        if (!userGateway) {
            return new TypeError("Erro inesperado ao Apagar o Usuario, Contacta o Suporte da API", 50);
        }
        return true;
    }

}