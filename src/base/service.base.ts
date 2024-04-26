export abstract class BaseService<In, Out> {
    abstract Execute(params: In): Promise<Out>
}