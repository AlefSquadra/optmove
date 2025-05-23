import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Transfer, TransferItem } from "./Transfer";
import { Root as TransferRoot } from "./TransferRoot";

const meta = {
  title: "Transfers/Transfer",
  tags: ["autodocs"],
  component: TransferRoot,
} satisfies Meta<typeof TransferRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dataSource: [],
    targetKeys: [],
    onChange: () => {},
    children: <></>,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);
    const items = Array.from({ length: 20 }, (_, i) => ({
      key: String(i),
      title: `Item ${i + 1}`,
    }));

    const [targetKeys, setTargetKeys] = useState<TransferItem[]>([]);

    return (
      <Transfer.Root dataSource={items} targetKeys={targetKeys} onChange={setTargetKeys}>
        <Transfer.List direction="left" />
        <Transfer.Actions />
        <Transfer.List direction="right" />
      </Transfer.Root>
    );
  },
};
