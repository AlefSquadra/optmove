import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { OptInput } from "./opt-Input";

const meta = {
  title: "Forms/Base/Inputs",
  tags: ["autodocs"],
  component: OptInput,
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    maxLength: { control: "number" },
    onChange: { action: "changed" },
    onBlur: { action: "blurred" },
  },
} satisfies Meta<typeof OptInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    value: "1234",
    maxLength: 4,
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <OptInput
        {...args}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          args.onChange(event);
        }}
        onBlur={(event) => {
          args.onBlur(event);
        }}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    label: "Label",
    value: "1234",
    maxLength: 4,
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <OptInput
        {...args}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          args.onChange(event);
        }}
        onBlur={(event) => {
          args.onBlur(event);
        }}
        disabled
      />
    );
  },
};

export const Date: Story = {
  args: {
    label: "Label",
    maxLength: 4,
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <OptInput
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          args.onChange(event);
        }}
        onBlur={(event) => {
          args.onBlur(event);
        }}
        type="datetime-local"
        {...args}
      />
    );
  },
};

export const Mask: Story = {
  args: {},
  render: (args) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Input changed:", event.target.value);
    };
    return (
      <OptInput
        label="Telefone"
        placeholder="(99) 99999-9999"
        maskPattern="(99) 99999-9999"
        onChange={handleInputChange}
        {...args}
      />
    );
  },
};
