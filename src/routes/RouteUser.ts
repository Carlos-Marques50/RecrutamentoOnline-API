import {Router} from "express";
import { UserControlle } from "../controllers/user/User.Controller";
import { UserMockGateway } from "../gateways/mock/userMockGateway";
import UserGetAllService from "../service/users/UserGetAll.service";
import UserGetOne from "../service/users/UserGetOne.Service";

const RouteUser= Router();

const gatewayData = new UserMockGateway("http://localhost:3001")//Injection in Data

const GetAllServiceInjection = new UserGetAllService(gatewayData);
const GetOneServiceInjection= new UserGetOne(gatewayData);

const userController = 
new UserControlle(
    GetAllServiceInjection,
    GetOneServiceInjection
);

RouteUser.get("/all", userController.getAll);
RouteUser.get("/:id", userController.getOne);


export default RouteUser;