export interface IOfficeMenuContext {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  prefix: string;
  setPrefix: React.Dispatch<React.SetStateAction<string>>;
}
