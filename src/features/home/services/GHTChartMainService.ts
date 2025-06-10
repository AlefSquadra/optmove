import type { IDataGHT, IRestrictionsGHT, IYLabelsGHT } from "@features/home/components/charts/GHTChart.types";
import { apiClient } from "@shared/services/apiClient";

export const GHTChartMainService = {
  getYards(ramal: string = "FPU-FOS Barra do Piraí") {
    return apiClient.get<IYLabelsGHT[]>(`/v1/Ght/patios/${ramal}`, {
      notRequiresAuth: false,
    });
  },
  getTrains(dataOfficialization: string) {
    return apiClient.get<IDataGHT[]>(`/v1/Ght/trens/${dataOfficialization}`, {
      notRequiresAuth: false,
    });
  },
  getRestrictions(dataOfficialization: string) {
    return apiClient.get<IRestrictionsGHT[]>(`/v1/Ght/restricoes/${dataOfficialization}`, {
      notRequiresAuth: false,
    });
  },
};
