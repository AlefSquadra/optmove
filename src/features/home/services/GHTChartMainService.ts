import type { IDataGHT, IRestrictionsGHT, IYLabelsGHT } from "@features/home/components/charts/GHTChart/GHTChart.types";
import { apiClient } from "@shared/services/apiClient";

export const GHTChartMainService = {
  getYards(ramal: string = "ICZ-ISN Baixada Conceição-Santos") {
    return apiClient.get<IYLabelsGHT[]>(`/v1/Ght/patios/${ramal}`, {
      notRequiresAuth: false,
    });
  },
  getTrains(officializationDates: string[] = [""]) {
    console.log("officializationDates", officializationDates);
    return apiClient.post<
      { yards: any[]; trains: IDataGHT[] },
      {
        DateGHTTimeline: string;
        DateOfficializationList: string[];
      }
    >(`/v1/ght/trens/v2`, {
      DateGHTTimeline: "2025-06-03T03:09:22",
      DateOfficializationList: ["2025-06-03T09:09:22"],
    });
  },
  getRestrictions(dataOfficialization: string) {
    return apiClient.get<IRestrictionsGHT[]>(`/v1/Ght/restricoes/${dataOfficialization}`, {
      notRequiresAuth: false,
    });
  },
};
