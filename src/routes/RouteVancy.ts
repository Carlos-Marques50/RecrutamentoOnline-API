import { Router } from "express";
import vacancyGateway from "../gateways/DataBase/prisma/geteway/vacancy";
import VacancyGetAllService from "../service/vacancy/VancacyGetAll.Service";
import VacancyGetOneService from "../service/vacancy/VancyGetOne.Service";
import VacancyStoreService from "../service/vacancy/VacancyStore.Service";
import VacancyDeleteService from "../service/vacancy/VacancyDelete.Service";
import VacancyController from "../controllers/vacancy/Vacancy.Controller";


const RouteCandidate = Router();

const getewayData = new vacancyGateway(); // Fonte de Dados

const GetAllVacancyService= new VacancyGetAllService(getewayData);
const GetOneVancayService= new VacancyGetOneService(getewayData);
const StoreVancyService= new VacancyStoreService(getewayData);
const DeleteVacancyService= new VacancyDeleteService(getewayData);

const controllerVacancy = new VacancyController(GetAllVacancyService,GetOneVancayService,StoreVancyService,DeleteVacancyService);

RouteCandidate.get('/all',controllerVacancy.getAll);
RouteCandidate.get('/:vacancy_id',controllerVacancy.getOne);
RouteCandidate.post('/register',controllerVacancy.store);
RouteCandidate.delete("/delete/:vacancy_id",controllerVacancy.delete);

export default RouteCandidate;
