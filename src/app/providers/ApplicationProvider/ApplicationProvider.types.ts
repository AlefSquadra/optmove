import type { ISelectZoneConfig } from "@shared/types/SelectedZone.type";

export interface IApplicationContext {
  selectZoneParams: ISelectZoneConfig;
  setSelectZoneParams: React.Dispatch<React.SetStateAction<ISelectZoneConfig>>;
}
export type IApplicationProvider = object;