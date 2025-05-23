import { HtmlHTMLAttributes, ReactNode } from "react";

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children?: ReactNode;
  width?: string;
  height?: string;
}

export interface ModalHeaderProps {
  title: string;
  onClose: () => void;
  iconName?: string;
  children?: ReactNode;
}

export interface ModalBodyProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface ModalFooterProps {
  children: ReactNode;
}
