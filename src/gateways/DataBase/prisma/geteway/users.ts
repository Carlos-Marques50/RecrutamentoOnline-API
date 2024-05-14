import BaseModel from "../../../../base/model.base";
import User from "../../../../entity/User";
import { UserGatewayInterface } from "../../../adpters/Users/IUser";
import { prismaClient } from "../../config";

type Users = User & BaseModel;

export class UserDataBase implements UserGatewayInterface {

  async readByEmail(email: string): Promise<User & BaseModel> {

    return await prismaClient.user.findFirst({
      where:{email}
    });

  }

  resetPassword(id: string, password: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  store(params: User): Promise<User & BaseModel> {
    throw new Error("Method not implemented.");
  }

  async readAll(): Promise<Users[]> {
    return await prismaClient.user.findMany();
  }

  async readOne(id: string): Promise<Users | any> {
    
    const userResult = await prismaClient.user.findFirst({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        status: true,
        accessLevelId:true,
        companyId:true,
        createdAt: true,
        updatedAt: true,

      },
    });

    return userResult;
  }

  update(params: { [key: string]: any }): Promise<User> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }

}
