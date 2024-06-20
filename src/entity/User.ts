export default class User{

  public name: string;
  public email: string;
  public password: string;
  public status: boolean;
  public accessLevelId: string;
  public companyId: string;


  constructor(params: User) {
    Object.assign(this, params);
  }
}

