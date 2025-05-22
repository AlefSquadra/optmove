import { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./index";

const meta = {
  title: "Charts/Dropdown",
  component: Dropdown.Root,
} satisfies Meta<typeof Dropdown.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <></>,
    placement: "bottom",
  },
  render: (args) => {
    return (
      <>
        <div className="flex h-screen items-center justify-center p-20">
          <Dropdown.Root placement="left">
            <Dropdown.Trigger>Mais opções</Dropdown.Trigger>

            <Dropdown.Content>
              <Dropdown.Item onClick={() => alert("Editar")}>Editar</Dropdown.Item>
              <Dropdown.Item onClick={() => alert("Excluir")}>Excluir</Dropdown.Item>
              <Dropdown.Item onClick={() => alert("Desativar")}>Desativar</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Root>
        </div>
      </>
    );
  },
};
