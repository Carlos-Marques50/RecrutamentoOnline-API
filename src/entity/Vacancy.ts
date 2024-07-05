

export default class Vacancy{

    public requirements: string;
    public category: string;
    public title: string;
    public description?: string;
    public status: boolean;
    public user_id: string;
    public dateEnd: Date;

    constructor(params:Vacancy){
        Object.assign(this,params);
    }
}

