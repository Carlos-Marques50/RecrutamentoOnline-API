import axios from "axios";
import BaseModel from "../../base/model.base";
import { IntputDataLogin, OutputDataLogin } from "../../dto/userDTO/Login.dto";
import User from "../../entity/User";
import { UserGatewayInterface } from "../adpters/IUser";

type Users = User & BaseModel;

export class UserMockGateway implements UserGatewayInterface {
  private users: Users[] = [];

  constructor(url: string) {
    this.init(url);
  }

  private async init(url: string): Promise<void> {
    try {
      const res = await axios.get(`${url}/users`);
      const data = res.data as { users: Users[] };
      this.users = data.users;
    } catch (error) {
      console.error("Erro ao inicializar usuários:", error);
    }
  }

  readByEmail(email: string): Promise<User & BaseModel> {
    throw new Error("Method not implemented.");
  }

  resetPassword(id: string, password: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  public test = async (): Promise<void> => { };

  public login = async (
    dataUser: IntputDataLogin
  ): Promise<OutputDataLogin> => {
    throw new Error("Method not implemented.");
  };

  public readOne = async (id: string): Promise<(User & BaseModel) | false> => {
    var userResult = this.users.find((user) => user.id === id);

    if (!userResult) return false;

    return userResult;
  };

  public readAll = async (): Promise<(User & BaseModel)[]> => {
    return this.users;
  };

  public update = async (params: { [key: string]: any }): Promise<User> => {
    return this.users[0];
  };

  public store = async (params: User): Promise<User & BaseModel> => {
    return this.users[0];
  };

  public delete = async (id: string): Promise<Boolean> => {
    return true;
  };
}
