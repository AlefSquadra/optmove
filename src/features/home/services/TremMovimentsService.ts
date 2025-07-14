import { apiClientMock } from "@shared/services/apiClient";

export const TrainMovementsService = {
  getTrainMovementsService(data: { dataflzList: string; prefixoTrem: string }) {
    return apiClientMock.get("/api/v1/Ght/movimentosTrem", {
      params: {
        dataflzList: data.dataflzList,
        prefixoTrem: data.prefixoTrem,
      },
      notRequiresAuth: false,
    });
  },
};
