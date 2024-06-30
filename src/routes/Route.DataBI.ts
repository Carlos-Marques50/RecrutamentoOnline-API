import { Router } from "express";
import { DataBI } from "../gateways/DataBI/dataBI.gateway";
import { DataBIService } from "../service/Bilhete_Identidade/BiGetAll.Service";
import DataBiController from "../controllers/bilhete_indentidade/DataBI.Controller";

const RouteDataBI = Router();

const gatewayData = new DataBI("https://consulta.edgarsingui.ao/consultar"); //Injection in Data->for PreProduction

const BiGetAllServiceInjection = new DataBIService(gatewayData);

const dataBiController = new DataBiController(
    BiGetAllServiceInjection
);

//Consult
RouteDataBI.get("/consult", dataBiController.getAll);

export default RouteDataBI;
