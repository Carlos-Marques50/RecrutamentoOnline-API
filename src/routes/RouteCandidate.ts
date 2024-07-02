import { Router } from "express";
import CandidateController from "../controllers/candidate/Candidate.Controller";
import CandidateGetAllService from "../service/candidate/CandidateGetAll.Service";
import CandidateGateway from "../gateways/DataBase/prisma/geteway/candidate";

const RouteCandidate = Router();

const getewayData = new CandidateGateway(); //Font of DataBase
const GetAllCandidateService = new CandidateGetAllService(getewayData);
const controllerCandidate = new CandidateController(GetAllCandidateService);


RouteCandidate.get('/all', controllerCandidate.getAll);



export default RouteCandidate;
