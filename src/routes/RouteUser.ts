import { Router } from "express";
import { UserController } from "../controllers/user/User.Controller";
import { UserMockGateway } from "../gateways/mock/userMockGateway";
import UserGetAllService from "../service/users/UserGetAll.Service";
import UserGetOne from "../service/users/UserGetOne.Service";
import { UserDataBase } from "../gateways/DataBase/prisma/geteway/users";
import UserLogin from "../service/users/UserLogin.Service";
import UserStore from "../service/users/UserStore.Service";
import UserResetPassword from "../service/users/UserResetPassword.Service";

const RouteUser = Router();

const gatewayData = new UserDataBase(); //Injection in Data->for PreProduction
//const MockGatewayData= new UserMockGateway("Url");//Injection in Data->for Test

const GetAllServiceInjection = new UserGetAllService(gatewayData);
const GetOneServiceInjection = new UserGetOne(gatewayData);
const UserLoginServiceInjection = new UserLogin(gatewayData);
const UserStoreServiceInjection= new UserStore(gatewayData);
const UserResetPasswordInjection= new UserResetPassword(gatewayData);

const userController = new UserController(
  GetAllServiceInjection,
  GetOneServiceInjection,
  UserLoginServiceInjection,
  UserStoreServiceInjection,
  UserResetPasswordInjection,
);

//Consult
RouteUser.get("/all", userController.getAll);
RouteUser.get("/:id", userController.getOne);

//Auth
RouteUser.post("/login", userController.login);
RouteUser.post("/register",userController.store);
RouteUser.post("/recovery",userController.recoveryPassword);

export default RouteUser;
