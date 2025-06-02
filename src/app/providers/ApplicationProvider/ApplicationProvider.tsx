import { ApplicationContext } from "@app/providers/ApplicationProvider/ApplicationContext";
import type { ISelectZoneConfig } from "@shared/types/SelectedZone.type";
import { useState } from "react";



export const ApplicationProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectZoneParams, setSelectZoneParams] = useState<ISelectZoneConfig>({
    profileZone: "2",
    mesaZone: "BaixadaSantista",
    mesaZoneId: "BaixadaSantista",
  });

  return (
    <ApplicationContext.Provider value={{ selectZoneParams, setSelectZoneParams }}>
      {children}
    </ApplicationContext.Provider>
  );
};

