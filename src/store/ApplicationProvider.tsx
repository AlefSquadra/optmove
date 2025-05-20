import { createContext, useContext, useState } from "react";
import { ISelectZoneConfig } from "../models/entities/ISelectZoneConfig";

export interface IApplicationContext {
  selectZoneParams: ISelectZoneConfig;
  setSelectZoneParams: React.Dispatch<React.SetStateAction<ISelectZoneConfig>>;
}
export interface IApplicationProvider {}

export const ApplicationContext = createContext<IApplicationContext | null>(null);

export const ApplicationProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectZoneParams, setSelectZoneParams] = useState<ISelectZoneConfig>({
    profileZone: "Visualizador",
    mesaZone: "BaixadaSantista",
    mesaZoneId: "BaixadaSantista",
  });

  return (
    <ApplicationContext.Provider value={{ selectZoneParams, setSelectZoneParams }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = () => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error("useApplicationContext must be used within an ApplicationProvider");
  }
  return context;
};
