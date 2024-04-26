import {Router} from "express";
import { UserControlle } from "../controllers/User.Controller";
import { UserMockGateway } from "../gateways/mock/userMockGateway";
import UserGetAllService from "../service/users/UserGetAll.service";


const RouteUser= Router();

const gateway = new UserMockGateway("http://localhost:3001")//Injection in Data

const InjectionDependency = new UserGetAllService(gateway)

const userController = new UserControlle(InjectionDependency)

RouteUser.get("/all", userController.Handle);


export default RouteUser;