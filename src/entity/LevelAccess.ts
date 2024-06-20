import User from "./User";

export default class NivelAcesso {
  public id!: number;
  public role: string;
  public descricao!: string;
  public users: User[];
  public createdDate: Date;
  public updatedDate: Date;
  constructor(params: NivelAcesso) {
    Object.assign(this, params);
  }
}
