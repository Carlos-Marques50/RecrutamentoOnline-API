import axios from "axios";
import { ICandidate } from "../adpters/DataBI/ICandidate";
import { dataBiSuccess } from "../../dto/userDTO/DataBi.dto";

export class DataBI implements ICandidate<dataBiSuccess> {
  private url: string;

  constructor(UrlBI: string) {
    this.url = UrlBI;
  }

  async searchDataBI(numBi: string): Promise<dataBiSuccess> {
    try {
      const res = await axios.get(`${this.url}/${numBi}`);
      const data = res.data as dataBiSuccess;
      return data as dataBiSuccess;
    } catch (error) {
      console.error("Erro ao pegar dados do BI,entre em contacto com o ministerio da Justiça:", error);
    }
  }


}
