import { BaseService } from "../../base/service.base";
import { ICandidate } from "../../gateways/adpters/DataBI/ICandidate";



export class DataBIService implements BaseService<string, dataBiSuccess >{
    searchDataBI(numBi: any) {
      throw new Error("Method not implemented.");
    }

    private readonly DataBIGateway:ICandidate<dataBiSuccess >;

    constructor(DataBIGateway: ICandidate<dataBiSuccess >){
        this.DataBIGateway= DataBIGateway;
    }

    async Execute(numBi: string): Promise<dataBiSuccess > {
    
       const dataBi= await this.DataBIGateway.searchDataBI(numBi);
       return dataBi;

    }

}