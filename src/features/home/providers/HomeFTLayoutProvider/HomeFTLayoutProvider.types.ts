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
}
