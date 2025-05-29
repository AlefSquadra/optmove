import { apiClient } from "../config";
import { HttpClient } from "../config/HttpClient";

export const apiClient2 = new HttpClient(import.meta.env.VITE_APP_BASE_URL_BACKEND_DEV, () => "");

export const SelectZoneService = {
  getProfilePlanner() {
    return apiClient.get<any>("/select-profile-planner");
  },
  getZonePlanner() {
    return apiClient.get<any>("/select-zone-planner");
  },
  getListTransferProfiles() {
    return apiClient.get<any>("/select-list-transfer-profile");
  },
};
