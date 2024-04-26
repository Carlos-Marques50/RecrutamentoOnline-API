import BaseModel from "../../base/model.base";
import User from "../../entity/User";
import { UserGatewayInterface } from "../adpters/IUser";

type Users = User & BaseModel

export class UserMockGateway implements UserGatewayInterface {

    private users: Users[] =  [];

    constructor(url: string) {

        fetch(`${url}/users`)
        .then(res => res.json())
        .then(data => {
            this.users = data as Users[]
        });

    }

    async test(): Promise<void> {
        
    }
    
    async update(params: { [key: string]: any; }): Promise<User> {
        return this.users[0]
    }

    async store(params: User): Promise<User & BaseModel> {
        return this.users[0]
    }

    async readOne(id: number): Promise<User & BaseModel> {
        return this.users[0]
    }
    
    readAll= async(): Promise<(User & BaseModel)[]> => {
        return this.users;
    }

    async delete(id: number): Promise<Boolean> {
        return true
    }

}