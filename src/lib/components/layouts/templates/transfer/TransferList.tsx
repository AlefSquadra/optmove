import classNames from "classnames";
import React from "react";
import { TransferItem } from "./Transfer.types";
import { useTransferContext } from "./TransferContext";

interface ITransferListProps {
  direction: "left" | "right";
  className?: string;
}

const List: React.FC<ITransferListProps> = ({ direction, className }) => {
  const ctx = useTransferContext();
  const items = direction === "left" ? ctx.leftItems : ctx.rightItems;
  const selectedKeys = direction === "left" ? ctx.selectedLeft : ctx.selectedRight;
  const setSelectedKeys = direction === "left" ? ctx.setSelectedLeft : ctx.setSelectedRight;

  const handleChange = (transferItem: TransferItem, checked: boolean) => {
    setSelectedKeys(checked ? [...selectedKeys, transferItem] : selectedKeys.filter((k) => k.key !== transferItem.key));
  };

  return (
    <div className={classNames("h-80 w-64 overflow-auto rounded border p-2", className)}>
      {items?.map((item: TransferItem) => (
        <label key={item.key} className="block cursor-pointer px-2 py-1 hover:bg-gray-100">
          <input
            type="checkbox"
            className="mr-2"
            disabled={item.disabled}
            checked={selectedKeys.some((k) => k.key === item.key)}
            onChange={(e) => handleChange(item, e.target.checked)}
          />
          {item.title}
        </label>
      ))}
    </div>
  );
};

export { List };
export type { ITransferListProps };
