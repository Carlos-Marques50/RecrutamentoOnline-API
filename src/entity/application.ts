
export default class Application{
    public description?: string
    public candidateId: string
    public vacancyId  : string

    constructor(params:Application){
        Object.assign(this,params);
    }
}
