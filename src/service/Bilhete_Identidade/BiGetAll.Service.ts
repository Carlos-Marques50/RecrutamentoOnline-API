import { BaseService } from "../../base/service.base";
import { dataBiError, dataBiSuccess } from "../../dto/userDTO/DataBi.dto";
import { ICandidate } from "../../gateways/adpters/DataBI/ICandidate";

export class DataBIService implements BaseService<string, dataBiSuccess> {

  private readonly DataBIGateway: ICandidate<dataBiSuccess>;

  constructor(DataBIGateway: ICandidate<dataBiSuccess>) {
    this.DataBIGateway = DataBIGateway;
  }

  searchDataBI = async (numBi: string) => {
    const dataBi = await this.DataBIGateway.searchDataBI(numBi);

    console.log(dataBi);
    // return dataBi;
  }

  Execute = async (numBi: string): Promise<dataBiSuccess> => {
    // return this.searchDataBI(numBi);

    console.log(this.DataBIGateway.searchDataBI(numBi));
    return this.DataBIGateway.searchDataBI(numBi);
  }

}

