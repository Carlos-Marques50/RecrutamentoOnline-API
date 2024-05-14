import User from "./User";
import Address from "./Address";

export default class Empresa {
  public id?: string;
  public name: string;
  public phone: number;
  public nif: string;
  public email: string;
  public logo_img: string;
  public users?: User[];
  public address: Address;
  public createdDate?: Date;
  public updatedDate?: Date;

  constructor(params: Empresa) {
    Object.assign(this, params);
  }
}
