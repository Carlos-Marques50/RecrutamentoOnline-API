
export interface BaseGateway<Entity, Model> {
    store(params: Entity): Promise<Model>;
    readAll(): Promise<Model[]>;
    readOne(id:string): Promise<Model | any>;
    update(params:Entity,id:string): Promise<Entity>;
    delete(id:string): Promise<Boolean>; 
}