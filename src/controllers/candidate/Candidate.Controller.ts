import { Request, Response } from "express";
import controller_base from "../../base/controller.base";
import CandidateGetAllService from "../../service/candidate/CandidateGetAll.Service";
import TypeError from "../../shared/TypeError";
import CandidateGetOneService from "../../service/candidate/CandidateGetOne.Service";
import CandidateStoreService from "../../service/candidate/CandidateStore.Service";
import CandidateDeleteService from "../../service/candidate/CandidateDelete.Service";

export default class CandidateController implements controller_base {

    private readonly CandidateGetAllService: CandidateGetAllService;
    private readonly CandidateGetOneService: CandidateGetOneService;
    private CandidateStoreService: CandidateStoreService;
    private readonly CandidateDeleteService: CandidateDeleteService;

    constructor(CandidateGetAllService: CandidateGetAllService, CandidateGetOneService: CandidateGetOneService, CandidateStoreService: CandidateStoreService, CandidateDeleteService: CandidateDeleteService) {
        this.CandidateGetAllService = CandidateGetAllService;
        this.CandidateGetOneService = CandidateGetOneService;
        this.CandidateStoreService = CandidateStoreService;
        this.CandidateDeleteService = CandidateDeleteService;
    }

    public store = async (req: Request, res: Response): Promise<Response> => {

        var dataCandidate = {
            name: req.body.name,
            num_bi: req.body.num_bi,
            phone: req.body.phone,
            email: req.body.email,
            doc: req.body.doc,
            dateBirth: req.body.dateBirth,
            status: req.body.status,
        }

        //Falta tratar ou validar os dados

        const serviceResult = await this.CandidateStoreService.Execute(dataCandidate);

        if (serviceResult instanceof TypeError) {
            return res.status(serviceResult.status).json(serviceResult.message);
        }
        return res.status(200).json({ Candidate: serviceResult });
    }

    public getAll = async (req: Request, res: Response): Promise<Response> => {

        const serviceResult = await this.CandidateGetAllService.Execute();

        if (serviceResult instanceof TypeError) {
            return res.status(serviceResult.status).json(serviceResult.message);
        }
        return res.status(200).json(serviceResult);
    }

    public getOne = async (req: Request, res: Response): Promise<Response> => {
        const serviceResult = await this.CandidateGetOneService.Execute(req.params.candidate_id);
        if (serviceResult instanceof TypeError) {
            return res.status(serviceResult.status).json(serviceResult.message);
        }
        return res.status(200).json(serviceResult);
    }

    public update = async (req: Request, res: Response): Promise<Response> => {

        throw new Error("Method not implemented.");
    }

    public delete = async (req: Request, res: Response): Promise<Response> => {

        const serviceResult = await this.CandidateDeleteService.Execute(req.params.candidate_id);

        if (serviceResult instanceof TypeError) {
            return res.status(serviceResult.status).json(serviceResult.message);
        }
        return res.status(200).json(serviceResult);
    }

}