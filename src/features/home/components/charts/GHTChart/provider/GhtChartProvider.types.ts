import type { IContextMenuProps } from "@features/home/components/charts/GHTChart/elements/GHTChartContextMenu/contextMenu.types";
import type { IClickableElement } from "@features/home/components/charts/GHTChart/GHTChart.types";

export interface IGHTChartContext {
  cursorPointer: React.CSSProperties["cursor"];
  setCursorPointer: React.Dispatch<React.SetStateAction<React.CSSProperties["cursor"]>>;
  selectedElementClickable: IClickableElement;
  setSelectedElementClickable: React.Dispatch<IClickableElement>;
  openContextMenu: Omit<IContextMenuProps, "onAction" | "onClose"> | null;
  setOpenContextMenu: React.Dispatch<React.SetStateAction<Omit<IContextMenuProps, "onAction" | "onClose"> | null>>;
  mouseOverInElementData: IElementEventInPlotG<MouseEvent> | null;
  setMouseOverInElementData: React.Dispatch<React.SetStateAction<IElementEventInPlotG<MouseEvent> | null>>;
}

export interface IGHTChartProviderProps {
  children: React.ReactNode;
}

export interface TrainElementEventData {
  id: string;
  name: string;
}

export interface RestrictionElementEventData {
  code: string;
  description: string;
}

export interface SbEventData {
  color: string;
}

export type IElementEventInPlotG<T = any> =
  | { element: "train"; data: TrainElementEventData; event: T }
  | { element: "restriction"; data: RestrictionElementEventData; event: T }
  | { element: "sb"; data: SbEventData; event: T };
