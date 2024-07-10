import { Router } from "express";
import CandidateController from "../controllers/candidate/Candidate.Controller";
import CandidateGetAllService from "../service/candidate/CandidateGetAll.Service";
import CandidateGateway from "../gateways/DataBase/prisma/geteway/candidate";
import CandidateGetOneSerive from "../service/candidate/CandidateGetOne.Service";
import CandidateStoreService from "../service/candidate/CandidateStore.Service";
import candidateDeleteService from "../service/candidate/CandidateDelete.Service";
import * as multer from 'multer'
import * as path from "path"
import CandidateSaveProfessionalResume from "../service/candidate/CandidateSaveProfessionalResume.Service";
import CandidateGetApplication from "../service/candidate/CandidateGetApplication.Service";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });

const RouteCandidate = Router();

const getewayData = new CandidateGateway();

const GetAllCandidateService = new CandidateGetAllService(getewayData);
const GetOneCandidateService = new CandidateGetOneSerive(getewayData);
const StoreCandidateService = new CandidateStoreService(getewayData);
const DeleteCandidateService = new candidateDeleteService(getewayData);
const GetCandidateHasApplication= new CandidateGetApplication(getewayData);
const candidateSaveProfessionalResume = new CandidateSaveProfessionalResume(getewayData)

const controllerCandidate = new CandidateController(GetAllCandidateService,GetOneCandidateService,StoreCandidateService,DeleteCandidateService, GetCandidateHasApplication,candidateSaveProfessionalResume);


RouteCandidate.get('/all', controllerCandidate.getAll);
RouteCandidate.get('/:candidate_id', controllerCandidate.getOne);
RouteCandidate.post('/register', controllerCandidate.store);
RouteCandidate.delete("/delete/:candidate_id",controllerCandidate.delete);
RouteCandidate.post('/upload/:id', upload.single('file'), controllerCandidate.uploadFile);
RouteCandidate.get("/applications/:num_bi",controllerCandidate.getCandidatehasApplication);


export default RouteCandidate;
