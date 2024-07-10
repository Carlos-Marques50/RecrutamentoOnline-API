import { BaseService } from "../../base/service.base";
import { IntputDataApplicationDTO, OutputDataApplicationDTO } from "../../dto/applicationDTO/Application.dto";
import { IApplication } from "../../gateways/adpters/IApplication";


import TypeError from "../../shared/TypeError";

export default class ApplicationStoreSerice implements BaseService<IntputDataApplicationDTO,OutputDataApplicationDTO | TypeError>{

    constructor(private applicationGateway:IApplication){
        this.applicationGateway = applicationGateway;
    }

    async Execute(params: IntputDataApplicationDTO): Promise<OutputDataApplicationDTO | TypeError> {

        const applicationCreated = await this.applicationGateway.store(params);

        if (!applicationCreated) {
            return new TypeError("Candidatura não registrada.",400);
        }
       return applicationCreated
    }

}