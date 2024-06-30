import { Router } from "express";
import { UserController } from "../controllers/user/User.Controller";
import { UserMockGateway } from "../gateways/mock/userMockGateway";
import UserGetAllService from "../service/Users/UserGetAll.Service";
import UserGetOne from "../service/Users/UserGetOne.Service";
import { UserDataBase } from "../gateways/DataBase/prisma/geteway/users";
import UserLogin from "../service/Users/UserLogin.Service";
import UserStore from "../service/Users/UserStore.Service";
import UserResetPassword from "../service/Users/UserResetPassword.Service";
import { UserUpdate } from "../service/users/UserUpdate.Service";

const RouteUser = Router();

const gatewayData = new UserDataBase(); //Injection in Data->for PreProduction
//const MockGatewayData= new UserMockGateway("Url");//Injection in Data->for Test

const GetAllServiceInjection = new UserGetAllService(gatewayData);
const GetOneServiceInjection = new UserGetOne(gatewayData);
const UserLoginServiceInjection = new UserLogin(gatewayData);
const UserStoreServiceInjection = new UserStore(gatewayData);
const UserResetPasswordInjection = new UserResetPassword(gatewayData);
const UserUpdateInjection = new UserUpdate(gatewayData);

const userController = new UserController(
  GetAllServiceInjection,
  GetOneServiceInjection,
  UserLoginServiceInjection,
  UserStoreServiceInjection,
  UserResetPasswordInjection,
  UserUpdateInjection,
);


//Consult
RouteUser.get("/all", userController.getAll);
RouteUser.get("/:id", userController.getOne);

//Auth
RouteUser.post("/register", userController.store);
RouteUser.post("/login", userController.login);
RouteUser.post("/recovery", userController.recoveryPassword);

//Update
RouteUser.put("/update/:user_id", userController.update);


export default RouteUser;
