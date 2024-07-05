import { BaseGateway } from "../../base/gateway.base";
import BaseModel from "../../base/model.base";
import Candidate from "../../entity/Candiddate";


export default interface ICandidate extends BaseGateway<Candidate, Candidate & BaseModel> {

    
}