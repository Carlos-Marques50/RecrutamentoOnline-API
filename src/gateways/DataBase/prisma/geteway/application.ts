import BaseModel from "../../../../base/model.base";
import Application from "../../../../entity/Application";
import { prismaClient } from "../../config";
import { IntputDataCandidateDTO } from "../../../../dto/candidateDTO/Candidate.dto";
import { IApplication } from "../../../adpters/IApplication";


export default class Aplication implements IApplication {


    async apply(applicationData: Application, candidateData: IntputDataCandidateDTO): Promise<Application & BaseModel> {
        try {
            const result = await prismaClient.$transaction(async (prisma) => {
                // Verifica se o candidato já existe com base no e-mail ou outro identificador único
                const existingCandidate = await prisma.candidate.findUnique({
                    where: { email: candidateData.email }, // Supondo que o e-mail seja único
                });
    
                let candidateId: string;
    
                if (existingCandidate) {
                    candidateId = existingCandidate.id;
                } else {
                    const resultCandidate = await prisma.candidate.create({
                        data: candidateData,
                    });
                    candidateId = resultCandidate.id;
                }
    
                applicationData.candidateId = candidateId;
    
                const resultApplication = await prisma.application.create({
                    data: applicationData,
                });
    
                return resultApplication;
            });
    
            return result;
        } catch (error: any) {
            console.error('Error during transaction:', error);
            throw new Error('Failed to apply application');
        }
    }

    async store(params: Application): Promise<Application & BaseModel> {

        try {
            const applicationCreate = await prismaClient.application.create({
                data: params,
            });
            return applicationCreate;

        } catch (error: any) {
            console.error(error);
            return error.meta.target;
            //Retificar o tratamento de erro, não pode estar visivel fora do esccopo
        }
    }

    async readAll(): Promise<(Application & BaseModel)[]> {
        const candidateAll = await prismaClient.application.findMany();
        return candidateAll;
    }

    async readOne(id: string): Promise<(Application & BaseModel) | any> {
        const candidateOne = await prismaClient.application.findFirst({
            where: { id }
        });
        return candidateOne;
    }

    async update(params: Application, id: string): Promise<Application> {
        throw new Error("Method not implemented.");
    }

    async delete(id: string): Promise<Boolean> {
        try {
            const applicationDelete = await prismaClient.application.delete({
                where: { id }
            });

            return true;

        } catch (error: any) {
            return error.meta.target; //Reparar este erro, não pode estar visivel na parte externa do codigo.(no retorno da API)
        }
    }

}