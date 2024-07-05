import { BaseService } from "../../base/service.base";
import { IntputDataCandidateDTO, OutputDataCandidateDTO } from "../../dto/candidateDTO/Candidate.dto";
import ICandidate from "../../gateways/adpters/ICandidate";
import TypeError from "../../shared/TypeError";

export default class CandidateGetAllService implements BaseService<IntputDataCandidateDTO, OutputDataCandidateDTO[] | TypeError> {

    private candidateService: ICandidate;

    constructor(candidateService: ICandidate) {
        this.candidateService = candidateService;
    }

    async Execute(): Promise<OutputDataCandidateDTO[] | TypeError> {
        const candidateAll = await this.candidateService.readAll();
        if (!candidateAll) {
            return new TypeError("Erro ao Consultar os Candidatos", 400);
        }
        return candidateAll;
    }


}