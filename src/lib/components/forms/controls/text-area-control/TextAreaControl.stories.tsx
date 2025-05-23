import { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { TextAreaControl } from "./TextAreaControl";

const meta: Meta<typeof TextAreaControl> = {
  title: "Forms/Control/TextAreaControl",
  component: TextAreaControl,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextAreaControl>;

const Template = <T extends FieldValues>(args: any) => {
  const { control, setError } = useForm<(T & FieldValues) | { [x: number]: string }>({
    defaultValues: { [args.name]: "" },
  });

  useEffect(() => {
    if (args.textAreaProps.hasError) {
      setError(args.name, { type: "manual", message: "Esse campo é obrigatorio" });
    }
  }, [setError, args.name, args.textAreaProps.required]);

  return (
    <form className="p-4">
      <TextAreaControl {...args} control={control} />
    </form>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    name: "description",
    label: "Descrição",
    showMessageError: false,
    textAreaProps: { maxLength: 600, placeholder: "Digite sua descrição" },
  },
};

export const WithError: Story = {
  render: Template,
  args: {
    name: "description",
    label: "Descrição",
    textAreaProps: { maxLength: 600, required: true, hasError: true, placeholder: "Digite sua descrição" },
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    name: "description",
    label: "Descrição",

    textAreaProps: { maxLength: 600, placeholder: "Digite sua descrição", disabled: true },
  },
};
