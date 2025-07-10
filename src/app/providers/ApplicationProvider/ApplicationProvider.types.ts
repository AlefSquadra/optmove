import type { TrainData } from "@features/home/components/charts/GHTChartD3/GHTChartD3";
import type { IOfficializationApplicationData } from "@shared/types/Officialization.type";
import type { ISelectZoneConfig } from "@shared/types/SelectedZone.type";

export interface IApplicationContext {
  selectZoneParams: ISelectZoneConfig;
  setSelectZoneParams: React.Dispatch<React.SetStateAction<ISelectZoneConfig>>;
  selectedOfficialization: IOfficializationApplicationData | undefined;
  setSelectedOfficialization: React.Dispatch<React.SetStateAction<IOfficializationApplicationData | undefined>>;
  trainsInGhtChart: TrainData[];
  setTrainsInGhtChart: React.Dispatch<React.SetStateAction<TrainData[]>>;
}

export type IApplicationProvider = object;
