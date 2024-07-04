import { BaseService } from "../../base/service.base";
import ICandidate from "../../gateways/adpters/ICandidate";
import TypeError from "../../shared/TypeError";

export default class candidateDeleteService implements BaseService<string, boolean | TypeError> {

    constructor(private candidateGateway: ICandidate) {
        this.candidateGateway = candidateGateway;
    }
    async Execute(candidate_id: string): Promise<boolean | TypeError> {

        const candidate = await this.candidateGateway.readOne(candidate_id);

        if (!candidate) {
            return new TypeError("Candidato não encontrado", 404);
        }
        const candidateDelete = await this.candidateGateway.delete(candidate_id);

        if (!candidateDelete) {
            return new TypeError("Erro ao Apagar o candidato", 400);
        }

        return true;

    }
}