export abstract class BaseService<In, Out> {
    abstract Execute(params: In, data?: any): Promise<Out>
}