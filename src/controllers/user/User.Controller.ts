import { Request,Response } from "express";
import TypeError from "../../shared/TypeError";
import controller_base from "../../base/controller.base";
import UserGetOne from "../../service/users/UserGetOne.Service";
import UserGetAllService from "../../service/users/UserGetAll.service";
import { ParamsDictionary } from "express-serve-static-core";

export class UserControlle implements controller_base
{

    private readonly GetAllService: UserGetAllService;
    private GetOneService: UserGetOne;

    constructor(GetAllService:UserGetAllService, GetOneService:UserGetOne ){
        this.GetAllService=GetAllService;
        this.GetOneService=GetOneService;
    }

    getAll = async (req:Request,res:Response)=> {

        const serviceResult= await this.GetAllService.Execute();
        if(serviceResult instanceof TypeError){
            return res.status(serviceResult.status).json({mensagem:serviceResult.message});
        }
        return res.status(200).json(serviceResult);
    }

    getOne = async (req:Request,res:Response) => {
       
        const id = Number(req.params.id);

        console.log(id);
        
        const serviceResult= await this.GetOneService.Execute(id);
        if(serviceResult instanceof TypeError){
            return res.status(serviceResult.status).json({mensagem:serviceResult.message});
        }
        return res.status(200).json(serviceResult);
    }

    store(req: Request<ParamsDictionary, any, any, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
        throw new Error("Method not implemented.");
    }

    update(req: Request<ParamsDictionary, any, any, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
        throw new Error("Method not implemented.");
    }

    delete(req: Request<ParamsDictionary, any, any, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
        throw new Error("Method not implemented.");
    }



}