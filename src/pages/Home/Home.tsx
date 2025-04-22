import { SelectZonePage } from "../selectZone/SelectZonePage";

interface IHomeProps {}

const Home = (props: IHomeProps) => {
  const {} = props;
  // const { user, logout } = useAuth();

  return (
    <>
      {/* <h1>Home</h1>
      <h1>user: {user?.name}</h1>
      <Button className="bg-primary-600" onClick={() => logout()}>
        Sair
      </Button> */}
      <SelectZonePage />
    </>
  );
};

export { Home };
