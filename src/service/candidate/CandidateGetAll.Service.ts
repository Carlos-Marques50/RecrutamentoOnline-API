import { BaseService } from "../../base/service.base";
import { IntputDataCandidate, OutputDataCandidate } from "../../dto/userDTO/Candidate.dto";
import ICandidate from "../../gateways/adpters/ICandidate";

import TypeError from "../../shared/TypeError";


export default class CandidateGetAllService implements BaseService<IntputDataCandidate, OutputDataCandidate[] | TypeError> {

    private candidateService: ICandidate;

    constructor(candidateService: ICandidate) {
        this.candidateService = candidateService;

    }
    async Execute(): Promise<OutputDataCandidate[] | TypeError> {
        const candidateAll = await this.candidateService.readAll();
        if (candidateAll) {
            return new TypeError("Erro ao Consultar os Candidatos", 400);
        }
        return candidateAll;
    }


}