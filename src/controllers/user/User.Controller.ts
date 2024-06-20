import { Request, Response } from "express";
import TypeError from "../../shared/TypeError";
import controller_base from "../../base/controller.base";
import UserGetOne from "../../service/users/UserGetOne.Service";
import UserGetAllService from "../../service/users/UserGetAll.Service";
import UserLogin from "../../service/users/UserLogin.Service";
import UserStore from "../../service/users/UserStore.Service";
import UserResetPassword from "../../service/users/UserResetPassword.Service";

export class UserController implements controller_base {
  private readonly GetAllService: UserGetAllService;
  private readonly GetOneService: UserGetOne;
  private readonly UserLoginService: UserLogin;
  private UserStoreService: UserStore;
  private UserResetPassword: UserResetPassword;

  constructor(
    GetAllService: UserGetAllService,
    GetOneService: UserGetOne,
    UserLoginService: UserLogin,
    UserStoreService: UserStore,
    UserResetPassword: UserResetPassword
  ) {
    this.GetAllService = GetAllService;
    this.GetOneService = GetOneService;
    this.UserLoginService = UserLoginService;
    this.UserStoreService = UserStoreService;
    this.UserResetPassword = UserResetPassword;
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

    /*
      Contribuição aberta:
      -Validação dos dados vindo da Chamada da API
      -Mensagem de Erro dos dados mão formatado
    */

    const serviceResult = await this.UserStoreService.Execute(dataUserCreted);

    if (Error instanceof TypeError) {
      return res.status(Error.status).json({ mensagem: Error.message });
    }

    return res.status(200).json({ UserCreated: serviceResult });
  };

  public update = async (req: Request, res: Response): Promise<Response> => {
    throw new Error("Method not implemented.");
  };

  public delete = async (req: Request, res: Response): Promise<Response> => {
    throw new Error("Method not implemented.");
  };

  public login = async (req: Request, res: Response) => {
    const serviceResult = await this.UserLoginService.Execute(req.body);

    if (serviceResult instanceof TypeError) {
      return res
        .status(serviceResult.status)
        .json({ mensagem: serviceResult.message });
    }
    return res.status(200).json(serviceResult);
  };

  // public recoveryPassword = async (req: Request, res: Response) => {
  //   /*
  //     Contribuição aberta:
  //     -Validação dos dados vindo da Chamada da API
  //     -Mensagem de Erro dos dados mão formatado
  //   */

  //   try {
  //     const dataRecoveryPass = {
  //       id: req.body.id,
  //       oldPassword: req.body.oldPassword,
  //       newPassword: req.body.newPassword,
  //     };

  //     const serviceResult = await this.UserResetPassword.Execute(
  //       dataRecoveryPass
  //     );
  //     var test: any;
  //     console.log(serviceResult);
  //     if (test instanceof TypeError) {
       
  //       return res.status(test.status).json(test.message);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(200).json({
  //       mensagem: "Senha Actualizada com Sucesso",
  //     });
  //   }
  // };


  public recoveryPassword = async (req: Request, res: Response) => {
    const dataRecoveryPass = {    
      id: req.body.id,
      oldPassword: req.body.oldPassword,
      newPassword: req.body.newPassword,
    };
   

      const serviceResult = await this.UserResetPassword.Execute(dataRecoveryPass);
      console.log(serviceResult);
      
    
  };
  
}
