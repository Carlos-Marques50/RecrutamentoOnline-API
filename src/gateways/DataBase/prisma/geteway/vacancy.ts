import BaseModel from "../../../../base/model.base";
import { IntputDataVacancyDTO, OutputDataVacancyDTO } from "../../../../dto/vacancyDTO/Vacancy.dto";
import IVacancy from "../../../adpters/IVacancy";
import { prismaClient } from "../../config";


export default class vacancyGateway implements IVacancy {

    async store(params: OutputDataVacancyDTO): Promise<OutputDataVacancyDTO> {
        try {
            const vacancyCreate = await prismaClient.vacancy.create({
                data: params,
            });
            return vacancyCreate;

        } catch (error: any) {
            console.error(error);
            return error;
            //Retificar o tratamento de erro, não pode estar visivel fora do esccopo
        }
    }

    async readAll(): Promise<OutputDataVacancyDTO[] | any> {
        const vacancyAll = prismaClient.vacancy.findMany();
        return vacancyAll;
    }

    async readOne(id: string): Promise<OutputDataVacancyDTO | any> {
        const vacancy = prismaClient.vacancy.findFirst({where: {id}});
        return vacancy;
    }

    async update(params: IntputDataVacancyDTO, id: string): Promise<IntputDataVacancyDTO> {
        try {
            const vacancyResult = await prismaClient.vacancy.update({
              where: {id},
              data: params
            });
            return vacancyResult;
      
          } catch (error: any) {
            return error.meta.target;  //Reparar este erro, não pode estar visivel na parte externa do codigo.(no retorno da API)
          }
      
    }

    async delete(id: string): Promise<Boolean> {
        try {
            const vacancyDelete = await prismaClient.vacancy.delete({
                where: { id }
            });

            return true;

        } catch (error: any) {
            return error.meta.target; //Reparar este erro, não pode estar visivel na parte externa do codigo.(no retorno da API)
        }
    }

}