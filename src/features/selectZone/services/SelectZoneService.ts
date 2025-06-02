import { apiClient } from "@shared/services/apiClient";

interface IDefaultResponseSelectZones {
  name: string;
  id: string;
}

export const SelectZoneService = {
  getProfilePlanner() {
    return apiClient.get<IDefaultResponseSelectZones[]>("/SelecaoZonas/ProfilePlanne");
  },
  getZonePlanner() {
    return apiClient.get<IDefaultResponseSelectZones>("/SelecaoZonas/ZonePlanner");
  },
  getListTransferProfiles() {
    return apiClient.get<IDefaultResponseSelectZones>("/SelecaoZonas/TransferProfile");
  },
};
