export interface IOfficializationDataResponse {
  id: string;
  trainsOfficialization: string;
  user: string;
  dateOfficialization: string;
  mesa: string;
  timeline: string;
  officializationType: string;
  versionModel: string;
}

export interface IOfficializationDataFilter {
  dataInicial: string | Date;
  dataFinal: string | Date;
  tipo: string;
  prefixo: string;
}
