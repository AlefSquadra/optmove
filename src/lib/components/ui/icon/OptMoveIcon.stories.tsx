import { Meta, StoryObj } from "@storybook/react";
import { OptMoveIcon } from "./OptMoveIcon";

const meta = {
  title: "Icons/OptMoveIcon",
  tags: ["!autodocs"],
  component: OptMoveIcon,
  argTypes: {
    name: {
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof OptMoveIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "AddIconGrayIcon",
    width: 24,
    height: 24,
    color: "red",
  },
  render: (args) => {
    return <OptMoveIcon {...args}></OptMoveIcon>;
  },
};
