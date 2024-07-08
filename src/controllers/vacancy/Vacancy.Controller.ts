import { Request, Response } from "express";
import TypeError from "../../shared/TypeError";
import controller_base from "../../base/controller.base";
import VacancyGetAllService from "../../service/vacancy/VancacyGetAll.Service";
import VacancyGetOneService from "../../service/vacancy/VancyGetOne.Service";
import VacancyStoreService from "../../service/vacancy/VacancyStore.Service";
import VacancyDeleteService from "../../service/vacancy/VacancyDelete.Service";


export default class VacancyController implements controller_base {

    constructor(
        private VacancyGetAllSerices: VacancyGetAllService,
        private VacancyGetOneSerices: VacancyGetOneService,
        private VacancyStoreSerices: VacancyStoreService,
        private VacancyDeleteSerices: VacancyDeleteService
    ) { }

    public store = async (req: Request, res: Response): Promise<Response> => {

        const DataVacancy = {
            requirements: req.body.requirements,
            category: req.body.category,
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            userId: req.body.userId,
            dateEnd: req.body.dateEnd,
        }

        /*
        Contribuição aberta:
        -Validação dos dados vindo da Chamada da API
        -Mensagem de Erro dos dados mão formatado
        */

        const serviceResult = await this.VacancyStoreSerices.Execute(DataVacancy);

        if (Error instanceof TypeError) {
            return res.status(Error.status).json({ mensagem: Error.message });
        }

        return res.status(200).json({ vacancyCreated: serviceResult });

    }

    public getAll = async (req: Request, res: Response): Promise<Response> => {
        const serviceResult = await this.VacancyGetAllSerices.Execute();
        if (serviceResult instanceof TypeError) {
            return res
                .status(serviceResult.status)
                .json({ mensagem: serviceResult.message });
        }
        return res.status(200).json(serviceResult);
    }

    public getOne = async (req: Request, res: Response): Promise<Response> => {
        const serviceResult = await this.VacancyGetOneSerices.Execute(req.params.vacancy_id);
        if (serviceResult instanceof TypeError) {
            return res.status(serviceResult.status).json(serviceResult.message);
        }
        return res.status(200).json(serviceResult);
    }
    
    public delete = async (req: Request, res: Response): Promise<Response> => {
        const resultService = await this.VacancyDeleteSerices.Execute(req.params.vacancy_id);
        if (resultService instanceof TypeError) {
            return res.status(resultService.status).json(resultService.message);
        }
        return res.status(200).json(resultService);
    }
    
    public update = async (req: Request, res: Response): Promise<Response> => {
        throw new Error("Method not implemented.");
    }
}


