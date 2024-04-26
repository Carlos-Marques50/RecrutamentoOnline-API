export interface BaseGateway<Entity, Model> {
    store(params: Entity): Promise<Model>;
    readAll(): Promise<Model[]>;
    readOne(id:number): Promise<Model>;
    update(params: { [key: string]: any }): Promise<Entity>;
    delete(id:number): Promise<Boolean>; 
}