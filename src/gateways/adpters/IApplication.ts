import { BaseGateway } from "../../base/gateway.base";
import BaseModel from "../../base/model.base";
import Application from "../../entity/Application";
import Candidate from "../../entity/Candidate";


export interface IApplication extends BaseGateway<Application, Application & BaseModel>{
    apply(applicationData: Application, candidateData: Candidate ): Promise<Application & BaseModel> 
   
}