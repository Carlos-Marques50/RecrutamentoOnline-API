import { BaseService } from "../../base/service.base";
import { IntputDataApplicationDTO, OutputDataApplicationDTO } from "../../dto/applicationDTO/Application.dto";
import { IntputDataCandidateDTO } from "../../dto/candidateDTO/Candidate.dto";
import { IApplication } from "../../gateways/adpters/IApplication";
import TypeError from "../../shared/TypeError";

export default class ApplicationApplySerice implements BaseService<IntputDataApplicationDTO,OutputDataApplicationDTO | TypeError>{

    constructor(private applicationGateway:IApplication){
        this.applicationGateway = applicationGateway;
    }

    async Execute(applicationDate: IntputDataApplicationDTO, candidateDate:IntputDataCandidateDTO): Promise<OutputDataApplicationDTO | TypeError> {

        const applicationCreated = await this.applicationGateway.apply(applicationDate, candidateDate);
        if (!applicationCreated) {
            return new TypeError("Candidatura não registrada.",400);
        }
       return applicationCreated
    }

}