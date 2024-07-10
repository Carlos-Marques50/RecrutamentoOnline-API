import { Request, Response } from "express";
import controller_base from "../../base/controller.base";
import CandidateGetAllService from "../../service/candidate/CandidateGetAll.Service";
import TypeError from "../../shared/TypeError";
import CandidateGetOneService from "../../service/candidate/CandidateGetOne.Service";
import CandidateStoreService from "../../service/candidate/CandidateStore.Service";
import CandidateDeleteService from "../../service/candidate/CandidateDelete.Service";
import CandidateSaveProfessionalResume from "../../service/candidate/CandidateSaveProfessionalResume.Service";
import CandidateGetApplication from "../../service/candidate/CandidateGetApplication.Service";

export default class CandidateController implements controller_base {

    private readonly CandidateGetAllService: CandidateGetAllService;
    private readonly CandidateGetOneService: CandidateGetOneService;
    private CandidateStoreService: CandidateStoreService;
    private readonly CandidateDeleteService: CandidateDeleteService;
    private CandidateGetApplication: CandidateGetApplication;
    private readonly CandidateSaveProfessionalResume: CandidateSaveProfessionalResume;

    constructor(
        CandidateGetAllService: CandidateGetAllService, 
        CandidateGetOneService: CandidateGetOneService, 
        CandidateStoreService: CandidateStoreService, 
        CandidateDeleteService: CandidateDeleteService,
        CandidateGetApplication:CandidateGetApplication,
        CandidateSaveProfessionalResume: CandidateSaveProfessionalResume
    ) {
        this.CandidateGetAllService = CandidateGetAllService;
        this.CandidateGetOneService = CandidateGetOneService;
        this.CandidateStoreService = CandidateStoreService;
        this.CandidateDeleteService = CandidateDeleteService;
        this.CandidateSaveProfessionalResume = CandidateSaveProfessionalResume;
        this.CandidateGetApplication= CandidateGetApplication;
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

    public uploadFile = async (req: Request, res: Response) => {
        if (!req.params.id) return  res.status(400).json({ error: true, message: 'Forneça o `id` do Candidato.' });
        if (req.file) {

            const useCaseResult = await this.CandidateSaveProfessionalResume.Execute(req.file.filename, req.params.id)
            console.log(useCaseResult);
            
            if (useCaseResult instanceof TypeError) 
                return res.status(useCaseResult.status).json({ error: true, message: useCaseResult.message });

            return res.json({ error: false, message: 'Arquivo carregado com sucesso!', data: req.file });
        } else {
            return res.status(400).json({ error: true, message: 'Nenhum arquivo foi carregado.' });
        }
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

    public getCandidatehasApplication = async (req: Request, res: Response): Promise<Response> => {
        const serviceResult = await this.CandidateGetApplication.Execute(req.params.num_bi);
        if (serviceResult instanceof TypeError) {
            return res.status(serviceResult.status).json(serviceResult.message);
        }
        return res.status(200).json(serviceResult);
    }

}