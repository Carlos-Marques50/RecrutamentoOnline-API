import { BaseService } from "../../base/service.base"
import { IntputDataCandidateDTO, OutputDataCandidateDTO } from "../../dto/userDTO/Candidate.dto";
import ICandidate from "../../gateways/adpters/ICandidate";
import TypeError from "../../shared/TypeError";

export default class CandidateGetOneSerive implements BaseService<string, OutputDataCandidateDTO | TypeError> {

    constructor(private candidateService: ICandidate) {
        this.candidateService;
    }

    async Execute(candidate_id: string): Promise<OutputDataCandidateDTO | TypeError> {

        const candidateOne = await this.candidateService.readOne(candidate_id);
        if (!candidateOne || candidateOne == null) {
            return new TypeError("Usuario não encontrado", 404);
        }
        return candidateOne;
    }

}