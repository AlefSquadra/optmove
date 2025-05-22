import { Meta, StoryObj } from "@storybook/react";
import { Login } from "./index";

const meta: Meta<typeof Login.Root> = {
  title: "Pages/Login",
  tags: ["autodocs"],
  component: Login.Root,
  argTypes: {},
} as Meta<typeof Login.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

// 📌 Mock das funções
const handleGoogleLogin = () => {
  console.log("Login com Google acionado");
};

const handleMicrosoftLogin = () => {
  console.log("Login com Microsoft acionado");
};

// 📌 História principal
export const Default: Story = {
  args: {},
  render: (args) => (
    <Login.Root>
      <Login.Banner />

      <Login.Main>
        <Login.Header title="Login" />
        <Login.Form />
        <Login.SocialButtons onClickLoginGoogle={handleGoogleLogin} onClickLoginMicrosoft={handleMicrosoftLogin} />
        <Login.Footer />
      </Login.Main>
    </Login.Root>
  ),
};
