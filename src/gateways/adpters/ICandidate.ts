import { BaseGateway } from "../../base/gateway.base";
import BaseModel from "../../base/model.base";
import Application from "../../entity/Application";
import Candidate from "../../entity/Candidate";


export default interface ICandidate extends BaseGateway<Candidate, Candidate & BaseModel> {
   getApplication(numBi:string):Promise<(Application & BaseModel)[]>;
}