import { BaseService } from "../../base/service.base"
import { IntputDataVacancyDTO, OutputDataVacancyDTO } from "../../dto/vacancyDTO/Vacancy.dto";
import IVacancy from "../../gateways/adpters/IVacancy";
import TypeError from "../../shared/TypeError";


export default class VacancyGetAllService implements BaseService<IntputDataVacancyDTO, OutputDataVacancyDTO[] | TypeError>{

    constructor(private VacancyService: IVacancy){
        this.VacancyService= VacancyService;
    }

    async Execute(): Promise<OutputDataVacancyDTO[] | TypeError> {
        
        const vacancyAll = await this.VacancyService.readAll();

        if (!vacancyAll) {
            return new TypeError("Erro ao Buscar Vagas", 400);
        }
        return vacancyAll;
        
    }

}