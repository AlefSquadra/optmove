import { apiClient } from "../config";

export const SelectZoneService = {
  getProfilePlanner() {
    return apiClient.get<any>("/select-profile-planner");
  },
  getZonePlanner() {
    return apiClient.get<any>("/SelecaoZonas/ZonePlanner");
  },
  getListTransferProfiles() {
    return apiClient.get<any>("/select-list-transfer-profile");
  },
};
