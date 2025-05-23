import { apiClient } from "../config";

export const OfficializationService = {
  getSelectOfficializationGHT() {
    return apiClient.get<any>("/officialization");
  },
};
