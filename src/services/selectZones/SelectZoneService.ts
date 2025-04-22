import { apiClient } from "../config";

export const SelectZoneService = {
  getProfilePlanner() {
    return apiClient.get<any>("/select-profile-planner", {
      notRequiresAuth: true,
    });
  },
  getZonePlanner() {
    return apiClient.get<any>("/select-zone-planner", {
      notRequiresAuth: true,
    });
  },
  getListTransferProfiles() {
    return apiClient.get<any>("/select-list-transfer-profile", {
      notRequiresAuth: true,
    });
  },
};
