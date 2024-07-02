import { BaseGateway } from "../../../../base/gateway.base";
import { IntputDataCandidate, OutputDataCandidate } from "../../../../dto/userDTO/Candidate.dto";
import ICandidate from "../../../adpters/ICandidate";
import { prismaClient } from "../../config";



export default class CandidateGateway implements ICandidate {

    readOne(id: string): Promise<OutputDataCandidate | any> {
        throw new Error("Method not implemented.");
    }

    async store(params: IntputDataCandidate): Promise<OutputDataCandidate> {
        throw new Error("Method not implemented.");
    }

    async readAll(): Promise<OutputDataCandidate[]> {
        const candidateAll = await prismaClient.candidate.findMany();
        return candidateAll;
    }

    async update(params: IntputDataCandidate, id: string): Promise<IntputDataCandidate> {
        throw new Error("Method not implemented.");
    }

    async delete(id: string): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

}