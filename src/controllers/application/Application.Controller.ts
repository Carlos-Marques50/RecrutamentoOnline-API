import { Request, Response } from "express";
import controller_base from "../../base/controller.base";
import TypeError from "../../shared/TypeError";
import ApplicationGetOneSerive from "../../service/application/AplplicationGetOne.Service";
import ApplicationGetAllService from "../../service/application/ApplicationGetAll.Service";
import ApplicationStoreSerice from "../../service/application/ApplicationGetStore.Service";
import ApplicationDeleteService from "../../service/application/ApplicationDelete.Service";
import ApplicationApplySerice from "../../service/application/ApplicationApply.Service";


export default class ApplicationController implements controller_base {

    private readonly ApplicationGetAllService: ApplicationGetAllService;
    private readonly ApplicationGetOneSerive: ApplicationGetOneSerive;
    private ApplicationStoreSerice: ApplicationStoreSerice;
    private readonly ApplicationDeleteService: ApplicationDeleteService;
    private ApplicationApplySerice: ApplicationApplySerice;

    constructor(ApplicationGetAllService: ApplicationGetAllService, ApplicationGetOneSerive: ApplicationGetOneSerive, ApplicationStoreSerice: ApplicationStoreSerice, ApplicationDeleteService: ApplicationDeleteService,ApplicationApplySerice: ApplicationApplySerice) {
        this.ApplicationGetAllService = ApplicationGetAllService;
        this.ApplicationGetOneSerive = ApplicationGetOneSerive;
        this.ApplicationStoreSerice = ApplicationStoreSerice;
        this.ApplicationDeleteService = ApplicationDeleteService;
        this.ApplicationApplySerice= ApplicationApplySerice;
    }

        public store = async (req: Request, res: Response): Promise<Response> => {

            var dataApplication = {
                description: req.body.description,
                candidateId: req.body.candidateId,
                vacancyId  : req.body.vacancyId,
            }

            //Falta tratar ou validar os dados

            const serviceResult = await this.ApplicationStoreSerice.Execute(dataApplication);

            if (serviceResult instanceof TypeError) {
                return res.status(serviceResult.status).json(serviceResult.message);
            }
            return res.status(200).json({ Candidate: serviceResult });
        }

    public getAll = async (req: Request, res: Response): Promise<Response> => {

        const serviceResult = await this.ApplicationGetAllService.Execute();

        if (serviceResult instanceof TypeError) {
            return res.status(serviceResult.status).json(serviceResult.message);
        }
        return res.status(200).json(serviceResult);
    }

    public getOne = async (req: Request, res: Response): Promise<Response> => {
        const serviceResult = await this.ApplicationGetOneSerive.Execute(req.params.candidate_id);
        if (serviceResult instanceof TypeError) {
            return res.status(serviceResult.status).json(serviceResult.message);
        }
        return res.status(200).json(serviceResult);
    }

    public update = async (req: Request, res: Response): Promise<Response> => {

        throw new Error("Method not implemented.");
    }

    public delete = async (req: Request, res: Response): Promise<Response> => {

        const serviceResult = await this.ApplicationDeleteService.Execute(req.params.candidate_id);

        if (serviceResult instanceof TypeError) {
            return res.status(serviceResult.status).json(serviceResult.message);
        }
        return res.status(200).json(serviceResult);
    }

    public apply = async (req: Request, res: Response): Promise<Response> => {

        var dataApplication = {
            description: req.body.description,
            candidateId: req.body.candidateId,
            vacancyId  : req.body.vacancyId,
        }

        var dataCandidate = {
            name: req.body.name,
            num_bi: req.body.num_bi,
            email: req.body.email,
            phone: req.body.phone,
            doc: req.body.doc,
            status: "available",
            dateBirth: req.body.dateBirth,
        }

        //Falta tratar ou validar os dados

        const serviceResult = await this.ApplicationApplySerice.Execute(dataApplication,dataCandidate);

        if (serviceResult instanceof TypeError) {
            return res.status(serviceResult.status).json(serviceResult.message);
        }
        return res.status(200).json({ Candidate: serviceResult });
    }

}