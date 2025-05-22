import classNames from "classnames";
import { OptMoveIcon } from "../../../ui/icon/OptMoveIcon";
import { IModalProps, ModalBodyProps, ModalFooterProps, ModalHeaderProps } from "./Modal.types";

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return (
    <div className="flex items-center justify-end gap-4 rounded-b border-t border-solid border-slate-200 p-6">
      {children}
    </div>
  );
};

export const ModalBody = ({ children, ...rest }: ModalBodyProps) => {
  return (
    <div
      {...rest}
      className={classNames("flex h-[calc(100%-150px)] flex-col gap-y-7 overflow-auto p-8", rest.className)}
    >
      {children}
    </div>
  );
};

export const ModalHeader = ({ title, onClose, iconName = "PencilWhiteIconIcon", children }: ModalHeaderProps) => {
  return (
    <div className="flex h-[57px] items-center justify-between rounded-t border-b border-solid border-slate-200 bg-blue-primary-100 px-6 py-5">
      <div className="flex items-center">
        <OptMoveIcon name={iconName as any} color="white" />
        <h3 className="ml-4 font-manrope text-[20px] font-bold text-white-background">{title}</h3>
        {children}
      </div>

      <button className="font-normal" onClick={onClose}>
        <OptMoveIcon name="CloseIconIcon" color="white" />
      </button>
    </div>
  );
};

export const ModalRoot = ({ isOpen, onClose, width, height, children, className }: IModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="bg-black fixed inset-0 z-40 opacity-25" onClick={onClose}></div>

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black-500 bg-opacity-50">
        <div
          className={classNames("relative mx-auto my-6 overflow-hidden rounded-lg bg-white shadow-lg", className)}
          style={{ width, height }}
        >
          {children}
        </div>
      </div>
    </>
  );
};
