import type { IContextMenuProps } from "@features/home/components/charts/GHTChart/elements/GHTChartContextMenu/contextMenu.types";
import type {
  IElementEventInPlotG,
  IGHTChartContext,
  IGHTChartProviderProps,
} from "@features/home/components/charts/GHTChart/provider/GhtChartProvider.types";
import { createContext, useContext, useState } from "react";
import type { IClickableElement } from "../GHTChart.types";

const GHTChartContext = createContext<IGHTChartContext | null>(null);

const GHTChartProvider = (props: IGHTChartProviderProps) => {
  const [cursorPointer, setCursorPointer] = useState<React.CSSProperties["cursor"]>("default");
  const [selectedElementClickable, setSelectedElementClickable] = useState<IClickableElement>({} as IClickableElement);
  const [openContextMenu, setOpenContextMenu] = useState<Omit<IContextMenuProps, "onAction" | "onClose"> | null>(null);
  const [onMouseOverInElementData, setOnMouseOverInElementData] = useState<IElementEventInPlotG | null>(null);

  return (
    <GHTChartContext.Provider
      value={{
        cursorPointer,
        setCursorPointer,
        selectedElementClickable,
        openContextMenu,
        setOpenContextMenu,
        setSelectedElementClickable,
        mouseOverInElementData: onMouseOverInElementData,
        setMouseOverInElementData: setOnMouseOverInElementData,
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
