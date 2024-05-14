import { Router } from "express";
import { UserController } from "../controllers/user/User.Controller";
import { UserMockGateway } from "../gateways/mock/userMockGateway";
import UserGetAllService from "../service/users/UserGetAll.Service";
import UserGetOne from "../service/users/UserGetOne.Service";
import { UserDataBase } from "../gateways/DataBase/prisma/geteway/users";

const RouteUser = Router();

const gatewayData = new UserDataBase() //Injection in Data

const GetAllServiceInjection = new UserGetAllService(gatewayData);
const GetOneServiceInjection = new UserGetOne(gatewayData);

const userController = new UserController(
  GetAllServiceInjection,
  GetOneServiceInjection
);

RouteUser.get("/all", userController.getAll);
RouteUser.get("/:id", userController.getOne);

export default RouteUser;
