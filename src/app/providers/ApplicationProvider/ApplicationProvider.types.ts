import type { IOfficializationApplicationData } from "@shared/types/Officialization.type";
import type { ISelectZoneConfig } from "@shared/types/SelectedZone.type";

export interface IApplicationContext {
  selectZoneParams: ISelectZoneConfig;
  setSelectZoneParams: React.Dispatch<React.SetStateAction<ISelectZoneConfig>>;
  selectedOfficialization: IOfficializationApplicationData | undefined;
  setSelectedOfficialization: React.Dispatch<React.SetStateAction<IOfficializationApplicationData | undefined>>;
}

export type IApplicationProvider = object;
