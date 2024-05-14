
export interface BaseGateway<Entity, Model > {
    store(params: Entity): Promise<Model>;
    readAll(): Promise<Model[]>;
    readOne(id:string): Promise<Model | any>;
    update(params: { [key: string]: any }): Promise<Entity>;
    delete(id:string): Promise<Boolean>; 
}