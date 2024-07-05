import { BaseService } from "../../base/service.base";
import { IntputDataCandidateDTO, OutputDataCandidateDTO } from "../../dto/candidateDTO/Candidate.dto";
import ICandidate from "../../gateways/adpters/ICandidate";
import TypeError from "../../shared/TypeError";

export default class CandidateStoreSerice implements BaseService<IntputDataCandidateDTO,OutputDataCandidateDTO | TypeError>{

    constructor(private candidateGateway:ICandidate){
        this.candidateGateway = candidateGateway;
    }

    async Execute(params: IntputDataCandidateDTO): Promise<OutputDataCandidateDTO | TypeError> {

        const candidateCreated = await this.candidateGateway.store(params);

        if (!candidateCreated) {
            return new TypeError("Candidato não registrado.",400);
        }
       return candidateCreated
    }

}