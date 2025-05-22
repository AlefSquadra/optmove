export type PlacementType = "top" | "bottom" | "left" | "right";

export type DropdownContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  placement: PlacementType;
  dropdownRef: React.RefObject<HTMLDivElement>;
};

export interface IDropdownRootProps {
  children: React.ReactNode;
  placement?: PlacementType;
}

export interface IDropdownTriggerProps {
  children: React.ReactNode;
}

export interface IDropdownContentProps {
  children: React.ReactNode;
}

export interface IDropdownItemProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}
