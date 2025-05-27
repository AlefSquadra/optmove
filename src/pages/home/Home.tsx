import { useApplicationContext } from "../../store/ApplicationProvider";
import { FTP } from "./templates/ftp/FTP";
import { FTV } from "./templates/ftv/FTV";

interface IHomeProps {}

const zoneComponents: Record<string, JSX.Element> = {
  1: <FTP />,
  2: <FTV />,
};

const Home = (props: IHomeProps) => {
  const {} = props;
  const { selectZoneParams } = useApplicationContext();
  const profileZone = selectZoneParams?.profileZone;

  return zoneComponents[profileZone];
};

export { Home };
