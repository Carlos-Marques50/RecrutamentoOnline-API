import BaseModel from "../../base/model.base";
import User from "../../entity/User";
import { UserGatewayInterface } from "../adpters/IUser";

type Users = User & BaseModel

export class UserMockGateway implements UserGatewayInterface {

    private users: Users[] =  [];

    constructor(url: string) {
        this.init(url);
    }

    private async init(url: string): Promise<void> {
        try {

            const res = await fetch(`${url}/users`);
            const data = await res.json() as { users: [] };
            this.users = data.users as Users[];

        } catch (error) {
            console.error("Erro ao inicializar usuários:", error);
        }
    }

    async test(): Promise<void>{}
    
    async update(params: { [key: string]: any; }): Promise<User> {
        return this.users[0]
    }

    async store(params: User): Promise<User & BaseModel> {
        return this.users[0]
    }

    async readOne(id: number): Promise<User & BaseModel | false> {
       
        var userResult = this.users.find(user => user.id === id);

        if(!userResult) return false;

        return userResult;
    }
    
    readAll= async(): Promise<(User & BaseModel)[] > => {
        return this.users;
    }

    async delete(id: number): Promise<Boolean> {
        return true
    }

}
