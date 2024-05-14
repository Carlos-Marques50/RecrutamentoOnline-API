import Company from "./Company";

export default class Empresa {
  public id!: string;

  public district: string;

  public county: string;

  public city: string;

  public companeis: Company[];

  public createdDate!: Date;

  public updatedDate!: Date;

  constructor(params:Empresa) {
    Object.assign(this,params);
  }
}
