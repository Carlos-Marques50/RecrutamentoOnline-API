import { BaseService } from "../../base/service.base";
import { IApplication } from "../../gateways/adpters/IApplication";


import TypeError from "../../shared/TypeError";

export default class ApplicationDeleteService implements BaseService<string, boolean | TypeError> {

    constructor(private applicationGateway: IApplication) {
        this.applicationGateway = applicationGateway;
    }
    async Execute(application_id: string): Promise<boolean | TypeError> {

        const application = await this.applicationGateway.readOne(application_id);

        if (!application) {
            return new TypeError("Candidatura não encontrada", 404);
        }
        const applicationDelete = await this.applicationGateway.delete(application_id);

        if (!applicationDelete) {
            return new TypeError("Erro ao Apagar a candidatura", 400);
        }

        return true;

    }
}