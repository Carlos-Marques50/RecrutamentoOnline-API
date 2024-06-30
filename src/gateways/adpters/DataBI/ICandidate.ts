export interface ICandidate<dataBiSuccess> {
  searchDataBI(numBi: string): Promise<dataBiSuccess>;
}
