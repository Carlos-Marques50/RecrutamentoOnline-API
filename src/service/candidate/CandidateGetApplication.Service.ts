import { BaseService } from "../../base/service.base";
import { OutputDataApplicationDTO } from "../../dto/applicationDTO/Application.dto";
import ICandidate from "../../gateways/adpters/ICandidate";
import TypeError from "../../shared/TypeError";

export default class CandidateGetApplication implements BaseService<string, OutputDataApplicationDTO[] | TypeError | any>{


    constructor(private CandidateGateway: ICandidate){}

    async Execute(numBi: string): Promise<TypeError | OutputDataApplicationDTO[] | any> {
        
        const repositoryCandidates= await this.CandidateGateway.getApplication(numBi);
        if (!repositoryCandidates) {
            return new TypeError("Candidato sem Aplicacação na Vaga", 400);
        }
        return repositoryCandidates;
    }

}