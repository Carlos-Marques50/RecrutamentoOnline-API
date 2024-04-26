import { Request,Response } from "express";

export default interface controller_base
{
    store(req:Request, res:Response): Promise<Response>;
    readAll(req:Request, res:Response): Promise<Response>;
    readOne(req:Request, res:Response): Promise<Response>;
    update(req:Request, res:Response): Promise<Response>;
    delete(req:Request, res:Response): Promise<Response>;
}