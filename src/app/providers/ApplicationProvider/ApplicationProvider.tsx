import { ApplicationContext } from "@app/providers/ApplicationProvider/ApplicationContext";
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

  return (
    <ApplicationContext.Provider
      value={{ selectZoneParams, setSelectZoneParams, selectedOfficialization, setSelectedOfficialization }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
