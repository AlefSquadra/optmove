import { Form } from "antd";
import { OptButton, Text } from "../../..";
import { LoginBackground, MRSLogo } from "../../../../assets";
import { OptInputControl } from "../../../forms";
import {
  BannerProps,
  FooterProps,
  FormProps,
  HeaderProps,
  MainProps,
  RootProps,
  SocialButtonsProps,
} from "./Login.types"; // Importa as interfaces separadas

export const LoginRoot = ({ children }: RootProps) => (
  <section className="flex min-h-screen items-center justify-center bg-gray-blue">
    <div className="flex max-h-[720px] max-w-[1750px] bg-white shadow-lg">{children}</div>
  </section>
);

export const LoginBanner = ({
  children,
  background = LoginBackground,
  logoImg = MRSLogo,
  title = "Seu lugar para planejar, programar e acompanhar!",
}: BannerProps) => (
  <div className="flex w-full items-center justify-center bg-cover lg:min-w-[60%]">
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 py-6 text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      {children ?
        children
      : <>
          <img src={logoImg} alt="Logo" style={{ width: "100px" }} />
          <p className="text-center text-xl text-white">{title}</p>
        </>
      }
    </div>
  </div>
);

export const LoginMain = ({ children }: MainProps) => (
  <main className="flex w-full flex-col items-center justify-center gap-4 bg-white p-4">{children}</main>
);

export const LoginHeader = ({ title }: HeaderProps) => (
  <div className="flex w-full flex-col justify-start gap-0">
    <Text.Headline variant="1" className="text-left font-montserrat text-4xl text-blue-primary">
      {title}
    </Text.Headline>
    <p className="mb-1">Bem-vindo(a)!</p>
  </div>
);

export const LoginForm = ({ onSubmit }: FormProps) => {
  const [form] = Form.useForm<any>();

  return (
    <Form form={form} layout="vertical" onFinish={onSubmit} className="w-full">
      <div className="align-center flex flex-col justify-center gap-2">
        <OptInputControl name="email" label="Usuário" rules={[{ required: true, message: "Usuário obrigatório" }]} />
        <OptInputControl name="password" label="Senha" rules={[{ required: true, message: "Senha obrigatório" }]} />
        <OptButton htmlType="submit">Entrar</OptButton>
      </div>
    </Form>
  );
};

export const LoginSocialButtons = ({ onClickLoginGoogle, onClickLoginMicrosoft }: SocialButtonsProps) => (
  <div className="flex w-full gap-2">
    {onClickLoginGoogle && (
      <OptButton className="w-full bg-blue-primary-100" onClick={onClickLoginGoogle} variant="outlined">
        <img src="https://img.icons8.com/color/48/000000/google.png" alt="Google" style={{ width: "24px" }} />
        Entrar com Google
      </OptButton>
    )}
    {onClickLoginMicrosoft && (
      <OptButton className="w-full bg-blue-primary-100 text-white" onClick={onClickLoginMicrosoft} variant="outlined">
        <img src="https://img.icons8.com/color/48/000000/microsoft.png" alt="Microsoft" style={{ width: "24px" }} />
        Entrar com Microsoft
      </OptButton>
    )}
  </div>
);

export const LoginFooter = ({ children }: FooterProps) => (
  <div className="flex flex-col items-center pb-6">
    {children ?
      children
    : <>
        <p className="text-d-grey mb-0 text-sm">Não consegue acessar?</p>
        <p className="text-d-grey mb-0 text-sm">Entre em contato com seu gestor.</p>
      </>
    }
  </div>
);
