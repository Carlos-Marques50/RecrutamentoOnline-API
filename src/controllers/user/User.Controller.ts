import { Request, Response } from "express";
import TypeError from "../../shared/TypeError";
import controller_base from "../../base/controller.base";
import { UserUpdate } from "../../service/users/UserUpdate.Service";
import UserGetAllService from "../../service/Users/UserGetAll.Service";
import UserGetOne from "../../service/Users/UserGetOne.Service";
import UserLogin from "../../service/Users/UserLogin.Service";
import UserStore from "../../service/Users/UserStore.Service";
import UserResetPassword from "../../service/Users/UserResetPassword.Service";

export class UserController implements controller_base {

  private readonly GetAllService: UserGetAllService;
  private readonly GetOneService: UserGetOne;
  private readonly UserLoginService: UserLogin;
  private UserStoreService: UserStore;
  private UserResetPasswordService: UserResetPassword;
  private UserUpdateService: UserUpdate;
  private UserDeleteService: UserDelete;

  constructor(
    GetAllService: UserGetAllService,
    GetOneService: UserGetOne,
    UserLoginService: UserLogin,
    UserStoreService: UserStore,
    UserResetPasswordService: UserResetPassword,
    UserUpdateService: UserUpdate,
    UserDeleteService: UserDelete,
  ) {
    this.GetAllService = GetAllService;
    this.GetOneService = GetOneService;
    this.UserLoginService = UserLoginService;
    this.UserStoreService = UserStoreService;
    this.UserResetPasswordService = UserResetPasswordService;
    this.UserUpdateService = UserUpdateService;
    this.UserDeleteService = UserDeleteService;
  }

  public getAll = async (req: Request, res: Response) => {
    const serviceResult = await this.GetAllService.Execute();
    if (serviceResult instanceof TypeError) {
      return res
        .status(serviceResult.status)
        .json({ mensagem: serviceResult.message });
    }
    return res.status(200).json(serviceResult);
  };

  public getOne = async (req: Request, res: Response) => {
    const serviceResult = await this.GetOneService.Execute(req.params.id);
    if (serviceResult instanceof TypeError) {
      return res.status(serviceResult.status).json(serviceResult.message);
    }
    return res.status(200).json(serviceResult);
  };

  public store = async (req: Request, res: Response): Promise<Response> => {
    const dataUserCreted = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      status: true,
      accessLevelId: req.body.accessLevelId,
      companyId: req.body.companyId,
    };

    const serviceResult = await this.UserStoreService.Execute(dataUserCreted);

    if (Error instanceof TypeError) {
      return res.status(Error.status).json({ mensagem: Error.message });
    }

    return res.status(200).json({ UserCreated: serviceResult });
  };

  public update = async (req: Request, res: Response): Promise<Response> => {
    const dataUserUpdated = await this.UserUpdateService.Execute(req.body, req.params.user_id);
    if (dataUserUpdated instanceof TypeError) {
      return res.status(dataUserUpdated.status).json({ errors: false, mensagem: dataUserUpdated.message });
    }
    
    return res.status(200).json(dataUserUpdated);
  }


  public login = async (req: Request, res: Response) => {
    const serviceResult = await this.UserLoginService.Execute(req.body);

    if (serviceResult instanceof TypeError) {
      return res
        .status(serviceResult.status)
        .json({ mensagem: serviceResult.message });
    }
    return res.status(200).json(serviceResult);
  };

  public recoveryPassword = async (req: Request, res: Response) => {
    const dataRecoveryPass = {
      id: req.body.id,
      oldPassword: req.body.oldPassword,
      newPassword: req.body.newPassword,
    }

    const serviceResult = await this.UserResetPasswordService.Execute(
      dataRecoveryPass
    );
    if (serviceResult instanceof TypeError) {
      res.status(serviceResult.status).json({ message: serviceResult.message });
    }
    return res.status(200).json(serviceResult);
  }
}
