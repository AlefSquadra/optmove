import { ApplicationContext } from "@app/providers/ApplicationProvider/ApplicationContext";
import type { TrainData } from "@features/home/components/charts/GHTChartD3/GHTChartD3";
import type { IOfficializationApplicationData } from "@shared/types/Officialization.type";
import type { ISelectZoneConfig } from "@shared/types/SelectedZone.type";
import { useState } from "react";

export const ApplicationProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectZoneParams, setSelectZoneParams] = useState<ISelectZoneConfig>({
    profileZone: "2",
    mesaZone: "BaixadaSantista",
    mesaZoneId: "BaixadaSantista",
  });
  const [selectedOfficialization, setSelectedOfficialization] = useState<IOfficializationApplicationData | undefined>(
    undefined,
  );
  const [trainsInGhtChart, setTrainsInGhtChart] = useState<TrainData[]>([]);

  return (
    <ApplicationContext.Provider
      value={{
        selectZoneParams,
        setSelectZoneParams,
        selectedOfficialization,
        setSelectedOfficialization,
        trainsInGhtChart,
        setTrainsInGhtChart,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
