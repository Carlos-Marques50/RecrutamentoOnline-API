import BaseModel from "../../../../base/model.base";
import { IntputDataCandidateDTO, OutputDataCandidateDTO } from "../../../../dto/candidateDTO/Candidate.dto";
import Application from "../../../../entity/Application";
import Candidate from "../../../../entity/Candidate";
import ICandidate from "../../../adpters/ICandidate";
import { prismaClient } from "../../config";

export default class CandidateGateway implements ICandidate {


    async getApplication(numBi: string): Promise<(Application & BaseModel)[] | any  > {
    
        try {
            const getApplication = await prismaClient.candidate.findUnique({
                where: {num_bi: numBi},
                include:{applications:true}
            });
           
            return getApplication;
        } catch (error) {
            return error.message;
        }

    }

    async readOne(id: string): Promise<OutputDataCandidateDTO | any> {

        const candidateOne = await prismaClient.candidate.findFirst({
            where: { id }
        });
        return candidateOne;
    }
 
    async store(params:IntputDataCandidateDTO): Promise<OutputDataCandidateDTO>  {

        try {
            const candidateCreate = await prismaClient.candidate.create({
                data: params,
            });
            return candidateCreate;

        } catch (error: any) {
            console.error(error);
            return error.meta.target;
            //Retificar o tratamento de erro, não pode estar visivel fora do esccopo
        }
    }

    async readAll(): Promise<OutputDataCandidateDTO[]> {
        const candidateAll = await prismaClient.candidate.findMany();
        return candidateAll;
    }

    async update(params: IntputDataCandidateDTO, id: string): Promise<OutputDataCandidateDTO> {
        return await prismaClient.candidate.update({
            where: { id }, data: params
        })
    }

    async delete(id: string): Promise<Boolean> {
        try {
            const candidateDelete = await prismaClient.candidate.delete({
                where: { id }
            });

            return true;

        } catch (error: any) {
            return error.meta.target; //Reparar este erro, não pode estar visivel na parte externa do codigo.(no retorno da API)
        }
    }

}