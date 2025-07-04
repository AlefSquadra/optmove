import type { IOnGraphCoordinatesUpdateProps } from "@features/home/components/charts/GHTChartD3/GHTChartD3";
import type { IModalData } from "@shared/types/IModalData.type";

export interface IHomeFTLayoutProvider {
  children: React.ReactNode;
}
export interface IOpenPanelTabBarLeft {
  isOpen: boolean;
  openTabName: string | "trens" | null;
}

export interface FTLayoutContext {
  selectedPanelTabBarLeft: IOpenPanelTabBarLeft;
  setSelectedPanelTabBarLeft: React.Dispatch<React.SetStateAction<IOpenPanelTabBarLeft>>;
  isOpenPanelTabBarDown: boolean;
  setIsPanelOpenDown: React.Dispatch<React.SetStateAction<boolean>>;
  showAccomplished: boolean;
  setShowAccomplished: React.Dispatch<React.SetStateAction<boolean>>;
  showTimelineView: boolean;
  setShowTimelineView: React.Dispatch<React.SetStateAction<boolean>>;
  openSelectOfficialization: boolean;
  setOpenSelectOfficialization: React.Dispatch<React.SetStateAction<boolean>>;
  openSystemParams: IModalData<any>;
  setOpenSystemParams: React.Dispatch<React.SetStateAction<IModalData<any>>>;
  graphTimeAndCoordinates: IOnGraphCoordinatesUpdateProps;
  setGraphTimeAndCoordinates: React.Dispatch<React.SetStateAction<IOnGraphCoordinatesUpdateProps>>;
}
