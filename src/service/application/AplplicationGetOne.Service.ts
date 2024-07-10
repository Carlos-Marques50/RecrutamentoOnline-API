import { BaseService } from "../../base/service.base"
import { OutputDataApplicationDTO } from "../../dto/applicationDTO/Application.dto";
import { IApplication } from "../../gateways/adpters/IApplication";

import TypeError from "../../shared/TypeError";

export default class ApplicationGetOneSerive implements BaseService<string, OutputDataApplicationDTO | TypeError> {

    constructor(private applicationService: IApplication) {
        this.applicationService;
    }

    async Execute(application_id: string): Promise<OutputDataApplicationDTO | TypeError> {

        const applicationOne = await this.applicationService.readOne(application_id);
        if (!applicationOne || applicationOne == null) {
            return new TypeError("Candidatura não encontrado", 404);
        }
        return applicationOne;
    }

}