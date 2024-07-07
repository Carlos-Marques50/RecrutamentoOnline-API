import { Request, Response } from "express";
import controller_base from "../../base/controller.base";


export default class VacancyController implements controller_base{
    store(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }
    getAll(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
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


