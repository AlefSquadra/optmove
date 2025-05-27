import { BorderOutlined, CloseOutlined, MinusOutlined } from "@ant-design/icons";
import { Modal, ModalProps } from "antd";
import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import type { DraggableData, DraggableEvent } from "react-draggable";
import Draggable from "react-draggable";
import LogoMrs from "../../assets/images/logo-mrs.png";

export interface IOptModalProps extends ModalProps {
  children?: React.ReactNode;
  modalTitle?: string;
}

export interface IOptModalRefProps {
  showModal: () => void;
  closeModal: () => void;
}

const WindowHeader = ({ title, onMinimize, onMaximize, onClose }) => {
  return (
    <div className="rounded-t-mdpx-4 flex items-center justify-between bg-white px-4 py-1">
      <div className="pointer-events-none flex select-none gap-2 text-sm text-zinc-950">
        <img src={LogoMrs} className="object-contain" alt="OptMoveIcon" height={24} width={24} />
        {title}
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={onMinimize} className="cursor-pointer rounded-sm">
          <MinusOutlined className="text-[12px] !text-zinc-950" />
        </button>
        <button onClick={onMaximize} className="cursor-pointer rounded-sm">
          <BorderOutlined className="text-[12px] !text-zinc-950" />
        </button>
        <button onClick={onClose} className="cursor-pointer rounded-sm">
          <CloseOutlined className="text-[12px] !text-zinc-950" />
        </button>
      </div>
    </div>
  );
};

const OptModal = forwardRef<IOptModalRefProps, IOptModalProps>((props, ref) => {
  const { children, modalTitle, ...modalProps } = props;
  const [open, setOpen] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
  const draggleRef = useRef<HTMLDivElement>(null!);

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  useImperativeHandle(
    ref,
    () => ({
      showModal: () => setOpen(true),
      closeModal: () => setOpen(false),
      setDisabled: (value: boolean) => setDisabled(value),
      getBounds: () => bounds,
      getDraggleRef: () => draggleRef,
    }),
    [bounds, draggleRef],
  );

  return (
    <>
      <Modal
        width={800}
        title={
          <div
            style={{ width: "100%", cursor: "move" }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
            onFocus={() => {}}
            onBlur={() => {}}
          >
            <WindowHeader title={modalTitle} onClose={handleCancel} onMaximize={() => {}} onMinimize={() => {}} />
          </div>
        }
        wrapClassName="!bg-transparent"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        classNames={{
          content: "p-0 overflow-hidden",
        }}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            nodeRef={draggleRef}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
        footer={null}
        closable={false}
        centered
        maskClosable={false}
        mask={false}
        {...modalProps}
      >
        {children}
      </Modal>
    </>
  );
});

export { OptModal };
