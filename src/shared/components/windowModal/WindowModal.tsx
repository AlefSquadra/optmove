import { Dismiss20Regular, Maximize20Regular, Subtract20Regular } from "@fluentui/react-icons";
import clsx from "clsx";
import React, { Children, isValidElement, useEffect, useRef, useState, type ReactNode } from "react";

type Size = number | string;

interface WindowModalProps {
  title: string;
  children: React.ReactNode;
  initialWidth?: Size;
  initialHeight?: Size;
  open: boolean;
  onClose: () => void;
  showButtonsHeader?: boolean;
}

export const WindowModal: React.FC<WindowModalProps> & {
  Header: React.FC<{ children: ReactNode }>;
  Body: React.FC<{ children: ReactNode }>;
  Footer: React.FC<{ children: ReactNode }>;
} = ({ title, children, initialWidth = 600, initialHeight = 400, open, onClose, showButtonsHeader = true }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const parseSize = (value: Size, base: number) => {
    if (typeof value === "string" && value.includes("%")) {
      const percent = parseFloat(value) / 100;
      return base * percent;
    }
    return Number(value);
  };

  const initialWidthPx = parseSize(initialWidth, window.innerWidth);
  const initialHeightPx = parseSize(initialHeight, window.innerHeight);

  const [position, setPosition] = useState(() => ({
    x: (window.innerWidth - initialWidthPx) / 2,
    y: (window.innerHeight - initialHeightPx) / 2,
  }));

  const [size, setSize] = useState({
    width: initialWidthPx,
    height: initialHeightPx,
  });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return;
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
    if (isResizing) {
      setSize({
        width: Math.max(300, e.clientX - position.x),
        height: Math.max(200, e.clientY - position.y),
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  const handleMaximize = () => {
    if (isMaximized) {
      setSize({ width: initialWidthPx, height: initialHeightPx });
      setPosition({
        x: (window.innerWidth - initialWidthPx) / 2,
        y: (window.innerHeight - initialHeightPx) / 2,
      });
      setIsMaximized(false);
    } else {
      setSize({ width: window.innerWidth, height: window.innerHeight });
      setPosition({ x: 0, y: 0 });
      setIsMaximized(true);
    }
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleClose = () => {
    if (modalRef.current) {
      modalRef.current.style.display = "none";
      onClose();
    }
  };

  useEffect(() => {
    if (open && !isMaximized) {
      const initialWidthPx = parseSize(initialWidth, window.innerWidth);
      const initialHeightPx = parseSize(initialHeight, window.innerHeight);

      setPosition({
        x: Math.max(0, (window.innerWidth - initialWidthPx) / 2),
        y: Math.max(0, (window.innerHeight - initialHeightPx) / 2),
      });

      setSize({
        width: initialWidthPx,
        height: initialHeightPx,
      });
    }
  }, [open, initialWidth, initialHeight, isMaximized]);

  if (!open) return null;

  return (
    <div
      ref={modalRef}
      className={clsx(
        "fixed z-50 flex flex-col overflow-hidden rounded-md border border-gray-500 bg-white shadow-2xl",
        isMinimized && "hidden",
      )}
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
      }}
    >
      {/* Barra Superior */}
      <div
        className="flex cursor-move items-center justify-between bg-gray-600 p-2 text-white select-none"
        onMouseDown={handleMouseDown}
      >
        <span className="truncate font-medium">{title}</span>
        {showButtonsHeader && (
          <div className="flex gap-2">
            <button onClick={handleMinimize} className="rounded p-1 hover:bg-gray-500" title="Minimizar">
              <Subtract20Regular />
            </button>
            <button onClick={handleMaximize} className="rounded p-1 hover:bg-gray-500" title="Maximizar">
              <Maximize20Regular />
            </button>
            <button onClick={handleClose} className="rounded p-1 hover:bg-red-600" title="Fechar">
              <Dismiss20Regular />
            </button>
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {Children.map(children, (child) => {
          if (!isValidElement(child)) return child;

          const type = (child.type as unknown as { displayName: string }).displayName;

          if (type === "WindowModalBody") {
            return <div className="flex-1 overflow-auto bg-white p-4">{child.props.children}</div>;
          }

          if (type === "WindowModalHeader") {
            return <div className="border-b border-gray-200 bg-gray-100 px-4 py-2">{child.props.children}</div>;
          }

          if (type === "WindowModalFooter") {
            return <div className="border-t border-gray-200 bg-gray-50 px-4 py-2">{child.props.children}</div>;
          }

          return child;
        })}
      </div>

      {/* Resize Handle */}
      {!isMaximized && (
        <div
          onMouseDown={() => setIsResizing(true)}
          className="absolute right-0 bottom-0 z-50 h-4 w-4 cursor-nwse-resize"
        />
      )}
    </div>
  );
};

// Subcomponentes
const Header: React.FC<{ children: ReactNode }> = ({ children }) => <>{children}</>;
Header.displayName = "WindowModalHeader";

const Body: React.FC<{ children: ReactNode }> = ({ children }) => <>{children}</>;
Body.displayName = "WindowModalBody";

const Footer: React.FC<{ children: ReactNode }> = ({ children }) => <>{children}</>;
Footer.displayName = "WindowModalFooter";

WindowModal.Header = Header;
WindowModal.Body = Body;
WindowModal.Footer = Footer;
