import { BaseService } from "../../base/service.base";
import { IntputDataVacancyDTO, OutputDataVacancyDTO } from "../../dto/vacancyDTO/Vacancy.dto";
import IVacancy from "../../gateways/adpters/IVacancy";
import TypeError from "../../shared/TypeError";

export default class VacancyStoreService implements BaseService<IntputDataVacancyDTO, OutputDataVacancyDTO | TypeError>{

    constructor(private VacancyService: IVacancy){
        this.VacancyService = VacancyService;
    }

    async Execute(params: IntputDataVacancyDTO, data?: any): Promise<OutputDataVacancyDTO | TypeError> {

        const Vacancy = await this.VacancyService.store(params);

        if (!Vacancy) {
            return new TypeError("Vaga não registrado.",400);
        }
       return Vacancy;
    }
    
}