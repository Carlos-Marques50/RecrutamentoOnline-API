import { Router } from "express";
import CandidateController from "../controllers/candidate/Candidate.Controller";
import CandidateGetAllService from "../service/candidate/CandidateGetAll.Service";
import CandidateGateway from "../gateways/DataBase/prisma/geteway/candidate";
import CandidateGetOneSerive from "../service/candidate/CandidateGetOne.Service";
import CandidateStoreService from "../service/candidate/CandidateStore.Service";
import candidateDeleteService from "../service/candidate/CandidateDelete.Service";

const RouteCandidate = Router();

const getewayData = new CandidateGateway(); // Fonte de Dados

const GetAllCandidateService = new CandidateGetAllService(getewayData);
const GetOneCandidateService = new CandidateGetOneSerive(getewayData);
const StoreCandidateService = new CandidateStoreService(getewayData);
const DeleteCandidateService = new candidateDeleteService(getewayData);

const controllerCandidate = new CandidateController(GetAllCandidateService,GetOneCandidateService,StoreCandidateService,DeleteCandidateService);


RouteCandidate.get('/all', controllerCandidate.getAll);
RouteCandidate.get('/:candidate_id', controllerCandidate.getOne);
RouteCandidate.post('/register', controllerCandidate.store);
RouteCandidate.delete("/delete/:candidate_id",controllerCandidate.delete);

export default RouteCandidate;
