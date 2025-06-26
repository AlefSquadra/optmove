import { Dismiss20Regular, Maximize20Regular, Subtract20Regular } from "@fluentui/react-icons";
import type { ReactNode } from "react";

type WindowHeaderProps = {
  title: string;
  showButtons?: boolean;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
  onMouseDown?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children?: ReactNode;
};

export const TabWindowHeader = ({
  title,
  showButtons = true,
  onMinimize,
  onMaximize,
  onClose,
  onMouseDown,
  children,
}: WindowHeaderProps) => {
  return (
    <div
      className="flex cursor-move items-center justify-between bg-gray-600 p-2 text-white select-none md:p-1 md:px-2"
      onMouseDown={onMouseDown}
    >
      <span className="truncate font-medium">{title}</span>

      {showButtons && (
        <div className="flex gap-2">
          {onMinimize && (
            <button onClick={onMinimize} className="rounded p-1 hover:bg-gray-500" title="Minimizar">
              <Subtract20Regular />
            </button>
          )}
          {onMaximize && (
            <button onClick={onMaximize} className="rounded p-1 hover:bg-gray-500" title="Maximizar">
              <Maximize20Regular />
            </button>
          )}
          {onClose && (
            <button onClick={onClose} className="rounded p-1 hover:bg-red-600" title="Fechar">
              <Dismiss20Regular />
            </button>
          )}
          {children}
        </div>
      )}
    </div>
  );
};
