import { BorderOutlined, CloseOutlined, MinusOutlined } from "@ant-design/icons";
import clsx from "clsx";
import { ReactNode } from "react";

interface ITabWindowHeaderProps {
  title: ReactNode;
  className?: string;
  onMinimize?: (a: any) => void;
  onMaximize?: (a: any) => void;
  onClose?: (a: any) => void;
}

const TabWindowHeader = ({ title, onMinimize, onMaximize, onClose, className }: ITabWindowHeaderProps) => {
  return (
    <div className={clsx("flex items-center justify-between rounded-t-md bg-white px-4 py-1", className)}>
      <div className="pointer-events-none flex select-none gap-2 text-sm text-zinc-950">{title}</div>
      <div className="flex items-center space-x-2">
        {onMinimize && (
          <button onClick={onMinimize} className="cursor-pointer rounded-sm">
            <MinusOutlined className="text-[12px] !text-zinc-950" />
          </button>
        )}
        {onMaximize && (
          <button onClick={onMaximize} className="cursor-pointer rounded-sm">
            <BorderOutlined className="text-[12px] !text-zinc-950" />
          </button>
        )}
        {onClose && (
          <button onClick={onClose} className="cursor-pointer rounded-sm">
            <CloseOutlined className="text-[12px] !text-zinc-950" />
          </button>
        )}
      </div>
    </div>
  );
};

export { TabWindowHeader };
