import { HttpClient } from "@config/HttpClient";
import { backendToken } from "@shared/services/apiClient";

/**
 * Interface representing a single priority item for destination prioritization.
 */
export interface IPrioridadeParametrizada {
  id: string;
  segmento: string;
  tipoMovimento: string;
  lotacao: string;
  produto: string;
  terminal: string;
}

const apiClientPriorizarDestino = new HttpClient("http://localhost:8080/priorizarDestino", () => backendToken);

export class PriorizarDestinoService {
  static getPatios = async (): Promise<string[]> => {
    return apiClientPriorizarDestino.get<string[]>("/patios");
  };

  static getProdutos = async (): Promise<string[]> => {
    return apiClientPriorizarDestino.get<string[]>("/produtos");
  };

  static getTerminais = async (): Promise<string[]> => {
    return apiClientPriorizarDestino.get<string[]>("/terminais");
  };

  static getPrioridades = async (ordered: boolean): Promise<IPrioridadeParametrizada[]> => {
    const query = ordered ? "?ordered=true" : "";
    return apiClientPriorizarDestino.get<IPrioridadeParametrizada[]>(`/prioridades${query}`);
  };

  static refreshPrioridadesMemory = async (): Promise<void> => {
    await apiClientPriorizarDestino.post("/prioridades/refresh-memory");
  };

  static refreshPrioridadesDB = async (): Promise<void> => {
    await apiClientPriorizarDestino.post("/prioridades/refresh-db");
  };

  static savePrioridades = async (items: IPrioridadeParametrizada[]): Promise<void> => {
    await apiClientPriorizarDestino.post("/prioridades", items);
  };
}
