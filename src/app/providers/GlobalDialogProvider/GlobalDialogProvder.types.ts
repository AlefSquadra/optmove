import type { CSSProperties } from "react";

export interface DialogConfig {
  title: string;
  content?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  autoClose?: boolean;
  duration?: number;
  style?: CSSProperties;
}

export interface GlobalDialogContextType {
  showDialog: (config: DialogConfig) => void;
  closeDialog: () => void;
}
