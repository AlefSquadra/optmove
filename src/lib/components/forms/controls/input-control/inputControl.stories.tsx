import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { OptInputControl } from "./opt-input-control";

const meta: Meta<typeof OptInputControl> = {
  title: "Forms/Control/InputControl",
  component: OptInputControl,
};

export default meta;
type Story = StoryObj<typeof OptInputControl>;

const Template = (args: any) => {
  const { control, setError } = useForm({
    defaultValues: { [args.name]: "" },
  });

  useEffect(() => {
    setError(args.name, { type: "manual", message: args.error });
  }, [setError, args.name]);

  return (
    <form>
      <OptInputControl {...args} control={control} />
    </form>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    name: "name",
    label: "Nome",
    required: true,
  },
};

export const WithError: Story = {
  render: Template,
};

export const Disabled: Story = {
  render: Template,
  args: {
    name: "telefone",
    label: "Telefone",
  },
};
