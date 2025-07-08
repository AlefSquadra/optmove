import type { IContextMenuProps } from "@features/home/components/charts/GHTChart/elements/GHTChartContextMenu/contextMenu.types";
import type { IClickableElement } from "@features/home/components/charts/GHTChart/GHTChart.types";
import type { TrainEditFormData } from "@features/home/components/tabPanelLeft/TrainEditForm/TrainEditForm";

export interface IGHTChartContext {
  cursorPointer: React.CSSProperties["cursor"];
  setCursorPointer: React.Dispatch<React.SetStateAction<React.CSSProperties["cursor"]>>;
  selectedElementClickable: IClickableElement;
  setSelectedElementClickable: React.Dispatch<IClickableElement>;
  openContextMenu: Omit<IContextMenuProps, "onAction" | "onClose"> | null;
  setOpenContextMenu: React.Dispatch<React.SetStateAction<Omit<IContextMenuProps, "onAction" | "onClose"> | null>>;
  mouseOverInElementData: IElementEventInPlotG | null;
  setMouseOverInElementData: React.Dispatch<React.SetStateAction<IElementEventInPlotG | null>>;
}

export interface IGHTChartProviderProps {
  children: React.ReactNode;
}

export interface TrainElementEventData extends TrainEditFormData {
  id: string;
}

export interface RestrictionElementEventData {
  code: string;
  description: string;
}

export interface SbEventData {
  color: string;
}

export type IElementEventInPlotG =
  | { element: "train"; data: TrainElementEventData }
  | { element: "restriction"; data: RestrictionElementEventData }
  | { element: "sb"; data: SbEventData };
