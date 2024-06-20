import BaseModel from "../../../../base/model.base";
import User from "../../../../entity/User";
import { UserGatewayInterface } from "../../../adpters/Users/IUser";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

type Users = User & BaseModel;

export class UserDataBase implements UserGatewayInterface {
  private prismaClient = new PrismaClient();

  async readByEmail(email: string): Promise<Users> {
    return await this.prismaClient.user.findFirst({
      where: { email },
    });
  }

  async resetPassword(id: string, newPassword: string): Promise<boolean> {
    const user = this.prismaClient.user.update({
      where:{id},
      data:{password: bcrypt.hashSync(newPassword, 8)}
    });
    if(user){
      return true;
    }else{
      return false;
    }
  }

  async store(params: User): Promise<Users> {
    const hashedPassword: string = bcrypt.hashSync(params.password, 8);
    params.password = hashedPassword;

    const create = await this.prismaClient.user.create({
      data: params,
    });
    return create;
  }

  async readAll(): Promise<(Users)[]> {
    return await this.prismaClient.user.findMany();
  }

  async readOne(id: string): Promise<Users | any> {
    const userResult = await this.prismaClient.user.findFirst({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        status: true,
        accessLevelId:true,
        companyId:true,
        password:true,
        createdAt: true,
        updatedAt: true,
      },
      
    });

    return userResult;
  }

  update(params:User, id:string): Promise<Users> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
}
