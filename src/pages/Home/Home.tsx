import { Button } from "@optmove/design-system";
import { useAuth } from "../../hooks/auth/useAuth";

interface IHomeProps {}

const Home = (props: IHomeProps) => {
  const {} = props;
  const { user, logout } = useAuth();

  return (
    <>
      <h1>Home</h1>
      <h1>user: {user?.name}</h1>
      <Button className="bg-primary-600" onClick={() => logout()}>
        Sair
      </Button>
    </>
  );
};

export { Home };
