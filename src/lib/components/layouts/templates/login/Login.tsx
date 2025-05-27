import { Button, Card, Form, Input, Typography } from "antd";
import { LoginBackground, MRSLogo } from "../../../../assets";
import { BannerProps, FormProps, HeaderProps, MainProps, RootProps } from "./Login.types";

const { Title } = Typography;

export const LoginRoot = ({ children }: RootProps) => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-lg">
      <Card className="shadow-2xl">{children}</Card>
    </div>
  </div>
);

export const LoginBanner = ({
  children,
  background = LoginBackground,
  logoImg = MRSLogo,
  title = "Seu lugar para planejar, programar e acompanhar!",
}: BannerProps) => (
  <div
    className="flex min-h-[200px] w-full items-center justify-center bg-cover"
    style={{ backgroundImage: `url(${background})` }}
  >
    <div className="flex flex-col items-center justify-center gap-2 px-4 py-6 text-white">
      {children ?
        children
      : <>
          <img src={logoImg} alt="Logo" className="w-24" />
          <p className="text-center text-xl">{title}</p>
        </>
      }
    </div>
  </div>
);

export const LoginMain = ({ children }: MainProps) => (
  <main className="flex w-full flex-col items-center justify-center gap-6 bg-white p-6">{children}</main>
);

export const LoginHeader = ({ title = "Service Monitor" }: HeaderProps) => (
  <div className="flex w-full flex-col items-start gap-1">
    <Title level={2} className="!m-0 text-blue-primary">
      {title}
    </Title>
    <p className="text-gray-500">Bem-vindo(a)!</p>
  </div>
);

export const LoginForm = ({ onSubmit }: FormProps) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} layout="vertical" onFinish={onSubmit} className="flex w-full flex-col gap-4">
      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          { required: true, message: "E-mail é obrigatório" },
          { type: "email", message: "Digite um e-mail válido" },
        ]}
      >
        <Input placeholder="Digite seu e-mail" size="large" />
      </Form.Item>

      <Form.Item
        label="Senha"
        name="password"
        rules={[
          { required: true, message: "Senha é obrigatória" },
          { min: 10, message: "A senha precisa ter pelo menos 10 caracteres" },
        ]}
      >
        <Input.Password placeholder="Digite sua senha" size="large" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="!" size="large">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export const LoginFooter = () => (
  <div className="flex flex-col items-center text-sm text-gray-500">
    <p className="mb-0">
      ©{new Date().getFullYear()} | Developed by <strong>Wabtec Corporation</strong>
    </p>
  </div>
);
