import { Form, Typography } from "antd";
import { useAuth } from "../../hooks/auth/useAuth";
import { OptButton, OptInputControl } from "../../lib";

const LoginPage = () => {
  const { handleDefaultLogin } = useAuth();
  const [form] = Form.useForm();

  return (
    <div className="flex h-screen w-full bg-gray-100">
      <div className="h-full w-[55%]">
        <img src="./wabtec-login2.png" alt="Background" className="h-full w-full object-contain xl:object-cover" />
      </div>
      <div className="flex w-[45%] items-center justify-center bg-white p-8">
        <Form
          form={form}
          layout="vertical"
          className="w-full max-w-md"
          onFinish={(values) => handleDefaultLogin(values)}
        >
          <Typography.Title
            level={2}
            className="text-center text-[1.75rem] font-bold tracking-[8px] text-primary-color"
          >
            Service Monitor
          </Typography.Title>

          <div className="flex flex-col gap-4">
            <OptInputControl
              isFloating
              label="E-mail"
              name="username"
              rules={[{ required: true }]}
              inputProps={{ style: { padding: 16 } }}
            />
            <OptInputControl
              isFloating
              label="Senha"
              rules={[{ required: true }]}
              name="password"
              inputProps={{ style: { padding: 16 } }}
            />
          </div>

          <OptButton
            htmlType="submit"
            className="mt-4 h-[66px] w-full cursor-pointer rounded-[50px] border-none bg-primary-color px-5 py-5 text-lg font-bold text-white no-underline transition-colors duration-500 hover:bg-primary-color-hover"
          >
            Login
          </OptButton>
        </Form>
      </div>
    </div>
  );
};

export { LoginPage };
