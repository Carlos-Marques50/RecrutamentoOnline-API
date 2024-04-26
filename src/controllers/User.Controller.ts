import { Request,Response } from "express";
import UserGetAllService from "../service/users/UserGetAll.service";
import TypeError from "../shared/TypeError";

export class UserControlle
{
    constructor(private service: UserGetAllService){}

    Handle = async ()=> {

        // try {
        //     return await this.service.Execute();

        // } catch (error) {

        //     if(error instanceof TypeError) 
        //     return res.status(error.status).json({});
        // }
        return await this.service.Execute();
    }

}