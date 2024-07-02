import { BaseGateway } from "../../base/gateway.base";
import { IntputDataCandidate, OutputDataCandidate } from "../../dto/userDTO/Candidate.dto";
import Candidate from "../../entity/Candiddate";


export default interface ICandidate extends BaseGateway<IntputDataCandidate, OutputDataCandidate> {

}