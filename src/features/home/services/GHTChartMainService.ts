import type { RestrictionData, TrainData, YLabel } from "@features/home/components/charts/GHTChartD3/GHTChartD3";
import { apiClient, apiClientMock } from "@shared/services/apiClient";

export const GHTChartMainService = {
  getSbs(ramal: string = "ICZ-ISN Baixada Conceição-Santos") {
    return apiClient.get<YLabel[]>(`/v1/ght/sbs/${ramal}`, {
      notRequiresAuth: false,
    });
  },

  getTrains(data: { dateGhtTimeline: string; officializations: string[] }) {
    return apiClient.get<TrainData[]>("v1/ght/trens", {
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
    });
  },

  getRectangles(data: { dateGhtTimeline: string; officializations: string[] }) {
    return apiClientMock.get<RestrictionData[]>(`/v1/ght/chart/rectangles`, {
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
    });
  },
};
