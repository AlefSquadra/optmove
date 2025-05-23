import { Meta, StoryObj } from "@storybook/react";
import { GHTChart } from "./GHTChart";
import { GHTChartMock } from "./GHTChartMock";

const meta = {
  title: "Charts/GHTChart",
  component: GHTChart,
} satisfies Meta<typeof GHTChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: GHTChartMock.data,
    yLabels: GHTChartMock.yLabels,
    database: GHTChartMock.database,
    restricoes: GHTChartMock.restricts,
    defaultHeight: 500,
  },
  render: (args) => {
    return <GHTChart {...args} />;
  },
};
