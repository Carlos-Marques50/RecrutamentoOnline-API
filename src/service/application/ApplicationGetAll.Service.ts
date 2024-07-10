import { BaseService } from "../../base/service.base";
import { IntputDataApplicationDTO, OutputDataApplicationDTO } from "../../dto/applicationDTO/Application.dto";
import { IApplication } from "../../gateways/adpters/IApplication";


import TypeError from "../../shared/TypeError";

export default class ApplicationGetAllService implements BaseService<IntputDataApplicationDTO, OutputDataApplicationDTO[] | TypeError> {

    private applicationService: IApplication;

    constructor(applicationService: IApplication) {
        this.applicationService = applicationService;
    }

    async Execute(): Promise<OutputDataApplicationDTO[] | TypeError> {
        const applicationAll = await this.applicationService.readAll();
        if (!applicationAll) {
            return new TypeError("Erro ao Consultar as Candidaturas", 400);
        }
        return applicationAll;
    }


}