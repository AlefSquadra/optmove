import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { OptSelect } from "../../un-controls";

const meta: Meta<typeof OptSelect> = {
  title: "Forms/Control/SelectControl",
  component: OptSelect,
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof OptSelect>;

const Template = (args: any) => {
  const { control, setError } = useForm({
    defaultValues: { [args.name]: "" },
  });

  useEffect(() => {
    setError(args.name, { type: "manual", message: args.error });
  }, [setError, args.name]);

  return (
    <form>
      <OptSelect {...args} control={control} />
    </form>
  );
};

export const Default: Story = {
  render: Template,
};

export const WithError: Story = {
  render: Template,
};

export const Disabled: Story = {
  render: Template,
};
