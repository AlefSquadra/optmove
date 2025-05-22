import { clsx } from "clsx";
import React, { createContext, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";

import { OptMoveIcon } from "../../../ui";
import {
  DropdownContextType,
  IDropdownContentProps,
  IDropdownItemProps,
  IDropdownRootProps,
  IDropdownTriggerProps,
  PlacementType,
} from "./Dropdown.types";

const DropdownContext = createContext<DropdownContextType | null>(null);

function useDropdown() {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("Dropdown components must be used within Dropdown.Root");
  return context;
}

const getPlacementClasses = (placement: PlacementType) => {
  switch (placement) {
    case "top":
      return "bottom-full mb-2 left-0";
    case "bottom":
      return "top-full mt-2 left-0";
    case "left":
      return "right-full mr-2 top-0";
    case "right":
      return "left-full ml-2 top-0";
    default:
      return "";
  }
};

export const DropdownRoot: React.FC<IDropdownRootProps> = ({ children, placement = "bottom" }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownContext.Provider value={{ open, setOpen, placement, dropdownRef }}>
      <div ref={dropdownRef} className="relative inline-block">
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export const DropdownTrigger: React.FC<IDropdownTriggerProps> = ({ children }) => {
  const { open, setOpen } = useDropdown();

  return (
    <button
      onClick={() => setOpen(!open)}
      className="flex items-center justify-center gap-2 rounded bg-white shadow-sm"
    >
      {children}
      {open ?
        <OptMoveIcon name="ChevronUpIcon" height={12} width={12} />
      : <OptMoveIcon name="ChevronDownIcon" height={12} width={12} />}
    </button>
  );
};

export const DropdownContent: React.FC<IDropdownContentProps> = ({ children }) => {
  const { open, placement, dropdownRef } = useDropdown();
  const contentRef = useRef<HTMLDivElement>(null);
  const [resolvedPlacement, setResolvedPlacement] = useState<PlacementType>(placement);
  const [ready, setReady] = useState(false); // se já pode mostrar o menu

  useLayoutEffect(() => {
    if (!open) {
      setReady(false);
      return;
    }

    const measureAndSet = () => {
      if (!dropdownRef.current || !contentRef.current) return;

      const triggerRect = dropdownRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const vw = window.innerWidth;

      let finalPlacement = placement;

      if (placement === "bottom" && triggerRect.bottom + contentRect.height > vh) {
        finalPlacement = "top";
      } else if (placement === "top" && triggerRect.top - contentRect.height < 0) {
        finalPlacement = "bottom";
      } else if (placement === "right" && triggerRect.right + contentRect.width > vw) {
        finalPlacement = "left";
      } else if (placement === "left" && triggerRect.left - contentRect.width < 0) {
        finalPlacement = "right";
      }

      setResolvedPlacement(finalPlacement);
      setReady(true); // agora pode renderizar visivelmente
    };

    // timeout curtíssimo para garantir que DOM esteja pintado
    const timeout = setTimeout(measureAndSet, 1);

    return () => clearTimeout(timeout);
  }, [open, placement]);

  if (!open) return null;

  return (
    <div
      ref={contentRef}
      className={clsx(
        "absolute z-50 w-48 rounded-md bg-white-background shadow-lg ring-1 ring-opacity-5",
        !ready && "pointer-events-none invisible", // invisível para medir
        ready && getPlacementClasses(resolvedPlacement),
      )}
    >
      <div className="py-1">{children}</div>
    </div>
  );
};

export const DropdownItem: React.FC<IDropdownItemProps> = ({ children, onClick, disabled }) => {
  const { setOpen } = useDropdown();

  return (
    <button
      onClick={() => {
        if (!disabled) {
          onClick();
          setOpen(false);
        }
      }}
      disabled={disabled}
      className={clsx(
        "w-full px-4 py-2 text-left text-sm",
        disabled ? "cursor-not-allowed text-gray-400" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
      )}
    >
      {children}
    </button>
  );
};
