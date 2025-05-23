import { Login } from "@optmoves/index";
import { useAuth } from "../../hooks/auth/useAuth";

interface ILoginProps {}

const LoginPage = (props: ILoginProps) => {
  const {} = props;

  const { handleMsalLogin, handleDefaultLogin } = useAuth();

  return (
    <Login.Root>
      <Login.Banner />
      <Login.Main>
        <Login.Header title="Login" />
        <Login.Form onSubmit={(data) => handleDefaultLogin({ password: data.password, username: data.email })} />
        <Login.SocialButtons onClickLoginMicrosoft={handleMsalLogin} />
        <Login.Footer />
      </Login.Main>
    </Login.Root>
  );
};

export { LoginPage };
