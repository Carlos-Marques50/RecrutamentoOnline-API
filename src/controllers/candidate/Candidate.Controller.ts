import { Request, Response } from "express";
import controller_base from "../../base/controller.base";
import CandidateGetAllService from "../../service/candidate/CandidateGetAll.Service";
import TypeError from "../../shared/TypeError";

export default class CandidateController implements controller_base {

    private readonly CandidateGetAllService: CandidateGetAllService;

    constructor(CandidateGetAllService: CandidateGetAllService) {
        this.CandidateGetAllService = CandidateGetAllService;
    }

    store(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }
    async getAll(req: Request, res: Response): Promise<Response> {
        const serviceResult = this.CandidateGetAllService.Execute();

        return res.status(200).json(serviceResult);
    }
    getOne(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }
    update(req: Request, res: Response): Promise<Response> {

        throw new Error("Method not implemented.");
    }
    delete(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }

}