import { useApplicationContext } from "@app/providers/ApplicationProvider/useApplication";
import { FTP } from "@features/home/components/FTP/FTP";
import { FTV } from "@features/home/components/FTV/FTV";
import type { FTZoneTemplate as FTZoneTemplateType } from "@shared/constants/FTZoneTemplate.enum";
import type { JSX } from "react";

const zoneComponents: Record<FTZoneTemplateType, JSX.Element> = {
  1: <FTP />,
  2: <FTV />,
};
const Home = () => {
  const { selectZoneParams } = useApplicationContext();
  const profileZone = selectZoneParams?.profileZone;

  return zoneComponents[profileZone];
};

export { Home };
