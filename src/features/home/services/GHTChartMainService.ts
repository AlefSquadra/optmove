import type { IDataGHT, IRestrictionsGHT, IYLabelsGHT } from "@features/home/components/charts/GHTChart/GHTChart.types";
import { apiClient } from "@shared/services/apiClient";

export const GHTChartMainService = {
  getYards(ramal: string = "ICZ-ISN Baixada Conceição-Santos") {
    return apiClient.get<IYLabelsGHT[]>(`/v1/Ght/patios/${ramal}`, {
      notRequiresAuth: false,
    });
  },

  getTrains(data: { dateGhtTimeline: string; officializations: string[] }) {
    return apiClient.get<{ trains: IDataGHT[]; yards: IYLabelsGHT[]; restrictions: IRestrictionsGHT[] }>(
      "/v1/Ght/trens",
      {
        params: {
          DateGHTTimeline: data.dateGhtTimeline,
          DateOfficializationList: data.officializations,
        },

        paramsSerializer: (p) => {
          const sp = new URLSearchParams();
          Object.entries(p).forEach(([k, v]) =>
            Array.isArray(v) ? v.forEach((item) => sp.append(k, item)) : sp.append(k, String(v)),
          );
          return sp.toString();
        },

        notRequiresAuth: false,
      },
    );
  },

  getRestrictions(dataOfficialization: string) {
    return apiClient.get<IRestrictionsGHT[]>(`/v1/Ght/restricoes/${dataOfficialization}`, {
      notRequiresAuth: false,
    });
  },
};
