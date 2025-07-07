import type { IOnGraphCoordinatesUpdateProps } from "@features/home/components/charts/GHTChartD3/GHTChartD3";
import type { TrainEditFormData } from "@features/home/components/tabPanelLeft/TrainEditForm/TrainEditForm";
import type { IModalData } from "@shared/types/IModalData.type";

export interface IHomeFTLayoutProvider {
  children: React.ReactNode;
}

export type IOpenPanelTabBarLeftTrainEdit = {
  isOpen: boolean;
  openTabName: string | "trens" | null;
  data?: any;
};

export type IOpenPanelTabBarLeftTrainEditGeneral = {
  isOpen: boolean;
  openTabName: "Editando o trem";
  data?: TrainEditFormData;
};

export type IOpenPanelTabBarLeft = IOpenPanelTabBarLeftTrainEditGeneral | IOpenPanelTabBarLeftTrainEdit;

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
