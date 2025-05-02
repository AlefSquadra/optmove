import { Navigate } from "react-router-dom";
import { useApplicationContext } from "../../store/ApplicationProvider";
import { FTP } from "./templates/ftp/FTP";
import { FTV } from "./templates/ftv/FTV";

interface IHomeProps {}

const zoneComponents: Record<string, JSX.Element> = {
  PlanejadorCCO: <FTP />,
  Visualizador: <FTV />,
};

const Home = (props: IHomeProps) => {
  const {} = props;
  const { selectZoneParams } = useApplicationContext();
  const profileZone = selectZoneParams?.profileZone;

  return zoneComponents[profileZone] || <Navigate to="/select-zone" />;
};

export { Home };
