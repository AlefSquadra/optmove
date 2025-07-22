import type { IContextMenuProps } from "@features/home/components/charts/GHTChart/elements/GHTChartContextMenu/contextMenu.types";
import type { IClickableElement } from "@features/home/components/charts/GHTChart/GHTChart.types";
import type { RestrictionData, TrainData, TrainMovement } from "@features/home/components/charts/GHTChartD3/GHTChartD3";
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
  highlightedPrefix: string | null;
  setHighlightedPrefix: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface IGHTChartProviderProps {
  children: React.ReactNode;
}

export interface TrainElementEventData extends TrainEditFormData {
  id: string;
}

export interface RestrictionElementEventData extends RestrictionData {
  code?: string;
  description?: string;
}

export interface SbEventData {
  color: string;
}

export interface ITrainMovementsElementEvent {
  actualMovement: TrainMovement;
  train: TrainData;
}

export type TrainElementEventDataType = { element: "train"; data: ITrainMovementsElementEvent };
export type TrainMovementsElementEventDataType = { element: "trainMovements"; data: TrainData };
export type RestrictionElementEventDataType = { element: "restriction"; data: RestrictionElementEventData };
export type SbEventDataType = { element: "sb"; data: SbEventData };

export type IElementEventInPlotG =
  | TrainElementEventDataType
  | RestrictionElementEventDataType
  | SbEventDataType
  | TrainMovementsElementEventDataType;
