//CandidateSaveProfessionalResume.Service
import { BaseService } from "../../base/service.base"
import ICandidate from "../../gateways/adpters/ICandidate";
import TypeError from "../../shared/TypeError";

export default class 
CandidateSaveProfessionalResume implements BaseService<string, TypeError | void> {
    constructor(private readonly candidateGatewayAdapter: ICandidate) {
        this.candidateGatewayAdapter;
    }

    async Execute(filename: string, candidateId: string) {

        const candidateExists = await this.candidateGatewayAdapter.readOne(candidateId)

        console.log("CANDIDATO", candidateExists);
        
        if (candidateExists === null) return new TypeError("Candidato não encontrado!", 404)
        
            console.log("PARECE QUE CHEGOU AQUI");
            

        candidateExists.doc = filename

        await this.candidateGatewayAdapter.update(candidateExists, candidateId)
    }
}