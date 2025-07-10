export interface IOfficeMenuContext {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  isPanelOpenDown: boolean;
  setIsPanelOpenDown: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  prefix: string;
  setPrefix: React.Dispatch<React.SetStateAction<string>>;
}
