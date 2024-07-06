import { BaseGateway } from "../../base/gateway.base";
import BaseModel from "../../base/model.base";
import Vacancy from "../../entity/Vacancy";

export default interface IVacancy extends BaseGateway<Vacancy, Vacancy & BaseModel> {

}