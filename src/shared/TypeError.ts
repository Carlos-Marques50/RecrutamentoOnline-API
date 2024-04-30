
export default class TypeError extends Error{

    declare message:string;
    declare status:number;

    constructor(message:string,status:number, ){
        super();
        this.message= message;
        this.status= status;
    }

}