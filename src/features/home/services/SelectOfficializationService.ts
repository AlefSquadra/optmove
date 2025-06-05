import { apiClient } from "@shared/services/apiClient";
import type { IOfficializationDataFilter, IOfficializationDataResponse } from "@shared/types/Officialization.type";

export const SelectOfficializationService = {
  getPlans(data: IOfficializationDataFilter) {
    return apiClient.get<IOfficializationDataResponse[]>("/v1/Ght/selecionarOficializacoes", {
      params: data,
      notRequiresAuth: false,
    });
  },
};
