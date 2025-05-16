import { createContext, useContext, useState } from "react";
import { IClickableElement } from "../GHTChart.types";
import { IContextMenuProps } from "../elements/GHTChartContextMenu/GHTChartContextMenu";

interface IGHTChartContext {
  cursorPointer: React.CSSProperties["cursor"];
  setCursorPointer: React.Dispatch<React.SetStateAction<React.CSSProperties["cursor"]>>;
  selectedElementClickable: IClickableElement;
  setSelectedElementClickable: React.Dispatch<IClickableElement>;
  openContextMenu: IContextMenuProps;
  setOpenContextMenu: React.Dispatch<React.SetStateAction<Omit<IContextMenuProps, "onAction" | "onClose">>>;
}

interface IGHTChartProviderProps {
  children: React.ReactNode;
}

const GHTChartContext = createContext<IGHTChartContext | null>(null);

const GHTChartProvider = (props: IGHTChartProviderProps) => {
  const [cursorPointer, setCursorPointer] = useState<React.CSSProperties["cursor"]>("default");
  const [selectedElementClickable, setSelectedElementClickable] = useState<IClickableElement>({} as IClickableElement);
  const [openContextMenu, setOpenContextMenu] = useState<IContextMenuProps | null>(null);

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
