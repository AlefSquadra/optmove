import type { IContextMenuProps } from "@features/home/components/charts/GHTChart/elements/GHTChartContextMenu/contextMenu.types";
import { createContext, useContext, useState } from "react";
import type { IClickableElement } from "../GHTChart.types";

interface IGHTChartContext {
  cursorPointer: React.CSSProperties["cursor"];
  setCursorPointer: React.Dispatch<React.SetStateAction<React.CSSProperties["cursor"]>>;
  selectedElementClickable: IClickableElement;
  setSelectedElementClickable: React.Dispatch<IClickableElement>;
  openContextMenu: Omit<IContextMenuProps, "onAction" | "onClose"> | null;
  setOpenContextMenu: React.Dispatch<React.SetStateAction<Omit<IContextMenuProps, "onAction" | "onClose"> | null>>;
}

interface IGHTChartProviderProps {
  children: React.ReactNode;
}

const GHTChartContext = createContext<IGHTChartContext | null>(null);

const GHTChartProvider = (props: IGHTChartProviderProps) => {
  const [cursorPointer, setCursorPointer] = useState<React.CSSProperties["cursor"]>("default");
  const [selectedElementClickable, setSelectedElementClickable] = useState<IClickableElement>({} as IClickableElement);
  const [openContextMenu, setOpenContextMenu] = useState<Omit<IContextMenuProps, "onAction" | "onClose"> | null>(null);

  return (
    <GHTChartContext.Provider
      value={{
        cursorPointer,
        setCursorPointer,
        selectedElementClickable,
        openContextMenu,
        setOpenContextMenu,
        setSelectedElementClickable,
      }}
    >
      {props.children}
    </GHTChartContext.Provider>
  );
};

export const useGHTChartContext = () => {
  const context = useContext(GHTChartContext);
  if (context === null) {
    throw new Error("useGHTChartContext must be used within a GHTChartProvider");
  }
  return context;
};

export { GHTChartProvider };
