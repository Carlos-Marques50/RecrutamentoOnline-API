import { Router } from "express";
import Aplication from "../gateways/DataBase/prisma/geteway/application";
import ApplicationGetAllService from "../service/application/ApplicationGetAll.Service";
import ApplicationGetOneSerive from "../service/application/AplplicationGetOne.Service";
import ApplicationDeleteService from "../service/application/ApplicationDelete.Service";
import ApplicationController from "../controllers/application/Application.Controller";
import ApplicationApplyService from "../service/application/ApplicationApply.Service";
import ApplicationStoreSerice from "../service/application/ApplicationGetStore.Service";


const RouteApplication = Router();

const getewayData = new Aplication(); // Fonte de Dados

const GetAllCandidateService = new ApplicationGetAllService(getewayData);
const GetOneApplicationService = new ApplicationGetOneSerive(getewayData);
const StoreApplicationService = new ApplicationStoreSerice(getewayData);
const DeleteApplicationService = new ApplicationDeleteService(getewayData);
const ApplyApplicationService = new ApplicationApplyService(getewayData);

const controllerApplication = new ApplicationController(GetAllCandidateService,GetOneApplicationService,StoreApplicationService,DeleteApplicationService,ApplyApplicationService);


RouteApplication.get('/all', controllerApplication.getAll);
RouteApplication.get('/:application_id', controllerApplication.getOne);
RouteApplication.post('/register', controllerApplication.store);
RouteApplication.delete("/delete/:application_id",controllerApplication.delete);
RouteApplication.post("/apply",controllerApplication.apply);

export default RouteApplication;
