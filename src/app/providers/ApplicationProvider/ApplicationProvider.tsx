import { ApplicationContext } from "@app/providers/ApplicationProvider/ApplicationContext";
import type { TrainData } from "@features/home/components/charts/GHTChartD3/GHTChartD3";
import type { IOfficializationApplicationData } from "@shared/types/Officialization.type";
import type { ISelectZoneConfig } from "@shared/types/SelectedZone.type";
import { useEffect, useMemo, useState } from "react";

export const ApplicationProvider = ({ children }: { children: React.ReactNode }) => {
  const selectZoneParamsInStorage =
    localStorage.getItem("selectZoneParams") ? JSON.parse(localStorage.getItem("selectZoneParams") as string) : {};

  const [selectZoneParams, setSelectZoneParams] = useState<ISelectZoneConfig>(selectZoneParamsInStorage);
  const [selectedOfficialization, setSelectedOfficialization] = useState<IOfficializationApplicationData | undefined>(
    undefined,
  );
  const [trainsInGhtChart, setTrainsInGhtChart] = useState<TrainData[]>([]);

  useEffect(() => {
    localStorage.setItem("selectZoneParams", JSON.stringify(selectZoneParams));
  }, [selectZoneParams]);

  const contextValue = useMemo(
    () => ({
      selectZoneParams,
      setSelectZoneParams,
      selectedOfficialization,
      setSelectedOfficialization,
      trainsInGhtChart,
      setTrainsInGhtChart,
    }),
    [selectZoneParams, selectedOfficialization, trainsInGhtChart],
  );

  return <ApplicationContext.Provider value={contextValue}>{children}</ApplicationContext.Provider>;
};
