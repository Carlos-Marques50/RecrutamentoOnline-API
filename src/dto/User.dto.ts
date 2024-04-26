
export interface InputUserDto{
    
    name: string, 
    email:string, 
    status: boolean,
    password:string,  
    
}

export interface OutputUserDto {

    id:number,
    name: string, 
    email:string, 
    status: boolean,
    password:string,  
    createdDate:Date,
    updatedDate:Date,
    
}