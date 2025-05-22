import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TextArea } from "./TextArea";
import { TextAreaCounter } from "./TextAreaCounter";

const meta = {
  title: "Forms/Base/TextArea",
  tags: ["autodocs"],
  component: TextArea,
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    maxLength: 10,
  },
  render: (args) => {
    return <TextArea {...args} />;
  },
};

export const Required: Story = {
  args: {
    maxLength: 10,
  },
  render: (args) => {
    const [value, steValue] = useState("");

    return (
      <>
        <TextArea value={value} onChange={(e) => steValue(e.target.value)} {...args} />
        <TextAreaCounter value={value} maxLength={args.maxLength} />
      </>
    );
  },
};

export const WithCounter: Story = {
  args: {
    maxLength: 10,
  },
  render: (args) => {
    const [value, steValue] = useState("");

    return (
      <>
        <TextArea value={value} onChange={(e) => steValue(e.target.value)} {...args} />
        <TextAreaCounter value={value} maxLength={args.maxLength} required={false} />
      </>
    );
  },
};
