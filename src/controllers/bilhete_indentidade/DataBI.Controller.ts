import { Request, Response } from "express";
import controller_base from "../../base/controller.base";
import { DataBIService } from "../../service/Bilhete_Identidade/BiGetAll.Service";

export default class DataBiController implements controller_base {
  private readonly BiGetAllService: DataBIService;

  constructor(BiGetAllService: DataBIService) {
    this.BiGetAllService = BiGetAllService;
  }

  async getAll(req: Request, res: Response): Promise<Response> {

    const serviceResult = await this.BiGetAllService.Execute(req.body.numBi);
    return res.status(200).json(serviceResult);
  }

  async store(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
  async getOne(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
  async update(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
  async delete(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
}
