import { Meta, StoryObj } from "@storybook/react";
import { OptSelect } from "./Selects";

const meta = {
  title: "Forms/Base/Select",
  tags: ["autodocs"],
  component: OptSelect,
  argTypes: {
    value: { control: "text" },
    onChange: { action: "changed" },
    onBlur: { action: "blurred" },
  },
} satisfies Meta<typeof OptSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "1",
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
    onChange: (value) => {
      console.log("Selected value:", value);
    },
  },
};
