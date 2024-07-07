import { BaseService } from "../../base/service.base";
import { IntputDataVacancyDTO, OutputDataVacancyDTO } from "../../dto/vacancyDTO/Vacancy.dto";
import IVacancy from "../../gateways/adpters/IVacancy";
import TypeError from "../../shared/TypeError";

export default class VacancyGetOneService implements BaseService<string, OutputDataVacancyDTO | TypeError>{

    constructor(private VacancyService: IVacancy){
        this.VacancyService= VacancyService;
    }

    async Execute(vacancy_id: string): Promise<OutputDataVacancyDTO | TypeError> {

        const vacancyOne = await this.VacancyService.readOne(vacancy_id);
        if (!vacancyOne || vacancyOne == null) {
            return new TypeError("Vaga não encontrado", 404);
        }
        return vacancyOne;
    }
    
}