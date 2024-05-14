
import LevelAccess from "./LevelAccess";
import Company from "./Company";


export default class User {
    
  public id?: string;
  public name: string;
  public email: string;
  public password: string;
  public status: boolean;
  public accessLevelId: string;
  public accessLevel?: LevelAccess;
  public companyId: string;
  public company?: Company;
  public createdDate?: Date;
  public updatedDate?: Date;

  constructor(params: User) {
    Object.assign(this,params)
  }
}
