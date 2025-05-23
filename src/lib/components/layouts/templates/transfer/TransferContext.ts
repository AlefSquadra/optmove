import React from "react";
import { TransferItem } from "./Transfer.types";

export interface TransferContextType {
  leftItems: TransferItem[];
  rightItems: TransferItem[];
  selectedLeft: TransferItem[];
  selectedRight: TransferItem[];
  setSelectedLeft: (keys: TransferItem[]) => void;
  setSelectedRight: (keys: TransferItem[]) => void;
  moveToRight: () => void;
  moveToLeft: () => void;
}

export const TransferContext = React.createContext<TransferContextType | null>(null);

export const useTransferContext = () => {
  const ctx = React.useContext(TransferContext);
  if (!ctx) throw new Error("Transfer.* components must be used within <Transfer.Root>");
  return ctx;
};
