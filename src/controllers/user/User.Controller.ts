import { Request, Response } from "express";
import TypeError from "../../shared/TypeError";
import controller_base from "../../base/controller.base";
import UserGetOne from "../../service/users/UserGetOne.Service";
import UserGetAllService from "../../service/users/UserGetAll.Service";
import { ParamsDictionary } from "express-serve-static-core";

export class UserController implements controller_base {

  private readonly GetAllService: UserGetAllService;
  private GetOneService: UserGetOne;

  constructor(
    GetAllService: UserGetAllService,
    GetOneService: UserGetOne
  ) {
    this.GetAllService = GetAllService;
    this.GetOneService = GetOneService;
  }

  public getAll = async (req: Request, res: Response) => {
    const serviceResult = await this.GetAllService.Execute();
    if (serviceResult instanceof TypeError) {
      return res
        .status(serviceResult.status)
        .json({ mensagem: serviceResult.message });
    }
    return res.status(200).json(serviceResult);
  };

  public getOne = async (req: Request, res: Response) => {
    
    const serviceResult = await this.GetOneService.Execute(req.params.id);
    if (serviceResult instanceof TypeError) {
      return res.status(serviceResult.status).json(serviceResult.message);
    }
    return res.status(200).json(serviceResult);
  };

  public store = async (
    req: Request<ParamsDictionary, any, any, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): Promise<Response<any, Record<string, any>>> => {
    throw new Error("Method not implemented.");
  };

  public update = async (
    req: Request<ParamsDictionary, any, any, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): Promise<Response<any, Record<string, any>>> => {
    throw new Error("Method not implemented.");
  };

  public delete = async (
    req: Request<ParamsDictionary, any, any, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): Promise<Response<any, Record<string, any>>> => {
    throw new Error("Method not implemented.");
  };



}
