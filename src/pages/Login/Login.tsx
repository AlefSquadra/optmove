import { Login } from '@optmove/design-system';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/auth/AuthService';
interface ILoginProps {}

const LoginPage = (props: ILoginProps) => {
const {} = props;
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await authService.login("admin", "1234");
      navigate("/");
    } catch (error) {
      alert("Erro ao fazer login");
    }
  };


    return (
        <><Login
        onClickLoginMicrosoft={handleLogin}
        /></>
    )
};

export { LoginPage as Login };

