import { apiClient } from "@shared/services/apiClient";
import type { IOfficializationDataResponse } from "@shared/types/Officialization.type";

export const SelectOfficializationService = {
  getPlans() {
    return apiClient.get<IOfficializationDataResponse[]>("/officialization", {
      notRequiresAuth: false,
    });
  },
};
