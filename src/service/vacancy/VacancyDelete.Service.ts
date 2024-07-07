import { BaseService } from "../../base/service.base";
import { IntputDataVacancyDTO, OutputDataVacancyDTO } from "../../dto/vacancyDTO/Vacancy.dto";
import IVacancy from "../../gateways/adpters/IVacancy";
import TypeError from "../../shared/TypeError";

export default class VacancyDeleteService implements BaseService<string, boolean | TypeError>{

    constructor(private VacancyService:IVacancy){
        this.VacancyService = VacancyService;
    }
    async Execute(vacancy_id: string): Promise<boolean | TypeError> {

        const Vacancy = await this.VacancyService.readOne(vacancy_id);

        if (!Vacancy) {
            return new TypeError("Candidato não encontrado", 404);
        }
        const vacancyDelete = await this.VacancyService.delete(vacancy_id);

        if (!vacancyDelete) {
            return new TypeError("Erro ao Apagar o candidato", 400);
        }

        return true;
    }

}