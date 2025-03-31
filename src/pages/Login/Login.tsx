import { Login } from "@optmove/design-system";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../services/auth/AuthService";

interface ILoginProps {}

const LoginPage = (props: ILoginProps) => {
  const {} = props;
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }: { email: string; password: string }) => {
    try {
      await AuthService.login({ email, password });
      navigate("/");
    } catch (error) {
      alert("Erro ao fazer login");
    }
  };

  return (
    <Login.Root>
      <Login.Banner />
      <Login.Main>
        <Login.Header title="Login" />
        <Login.Form onSubmit={handleLogin} />
        <Login.SocialButtons onClickLoginMicrosoft={async () => AuthService.loginAzureAD()} />
        <Login.Footer />
      </Login.Main>
    </Login.Root>
  );
};

export { LoginPage };
