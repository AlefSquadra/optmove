import { Login } from "@optmove/design-system";
import { useAuth } from "../../hooks/auth/useAuth";

interface ILoginProps {}

const LoginPage = (props: ILoginProps) => {
  const {} = props;

  const { login } = useAuth();

  return (
    <Login.Root>
      <Login.Banner />
      <Login.Main>
        <Login.Header title="Login" />
        <Login.Form onSubmit={login} />
        <Login.SocialButtons onClickLoginMicrosoft={login} />
        <Login.Footer />
      </Login.Main>
    </Login.Root>
  );
};

export { LoginPage };
