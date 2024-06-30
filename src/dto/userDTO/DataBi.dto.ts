export interface dataBiSuccess {
  error: boolean;
  name: string;
  data_de_nascimento: Date;
  pai: string;
  mae: string;
  morada: string | null;
  emitido_em: Date;
  type: string;
}

export interface dataBiError {
  error: boolean;
  message: string;
}
