import BaseModel from "../../../../base/model.base";
import { InputUserDto, OutputUserDto } from "../../../../dto/userDTO/User.dto";
import User from "../../../../entity/User";
import { UserGatewayInterface } from "../../../adpters/IUser";
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
    try {
      const hashedPassword = bcrypt.hashSync(newPassword, 8);
      const user = await this.prismaClient.user.update({
        where: { id },
        data: { password: hashedPassword }
      });

      return !!user;
    } catch (error) {
      console.error('Erro ao redefinir a senha:', error);
      return false;
    }
  }

  async store(params: InputUserDto): Promise<Users> {
    const hashedPassword: string = bcrypt.hashSync(params.password, 8);
    params.password = hashedPassword;

    const create = await this.prismaClient.user.create({
      data: params,
    });
    return create;
  }

  async readAll(): Promise<OutputUserDto[]> {
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
        accessLevelId: true,
        companyId: true,
        password: true,
        createdAt: true,
        updatedAt: true,
      },

    });

    return userResult;
  }

  async update(params: User & BaseModel, id: string): Promise<Users> {

    try {
      const userResult = await this.prismaClient.user.update({
        where: { id: id },
        data: params
      });
      return userResult;

    } catch (error: any) {
      return error.meta.target;  //Reparar este erro, não pode estar visivel na parte externa do codigo.(no retorno da API)
    }

  }

  async delete(id: string): Promise<Boolean> {
    try {

      const userResult = await this.prismaClient.user.delete({
        where: { id }
      });
      return true;

    } catch (error: any) {
      return error.meta.target; //Reparar este erro, não pode estar visivel na parte externa do codigo.(no retorno da API)
    }
  }

}//Close of Class
