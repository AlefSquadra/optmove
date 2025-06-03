import type { contextMenuDefinitions } from "@features/home/components/charts/elements/GHTChartContextMenu/contextMenuDefinitions";

export type IModifiersKeys = "ctrl" | "shift" | "alt" | string;

type ContextMenuDefinitions = typeof contextMenuDefinitions;

type ContextMenuGroupList = ContextMenuDefinitions[keyof ContextMenuDefinitions];

type ContextMenuItem = ContextMenuGroupList[number]["items"][number];

export type ContextType = keyof typeof contextMenuDefinitions;

export type GHTChartContextMenuType = ContextType;

export type ContextMenuItemAction = ContextMenuItem["action"];

export interface IDataContextMenu {
  id: string | number;
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface IContextMenuProps {
  x: number;
  y: number;
  name: string;
  type: ContextType;
  data?: IDataContextMenu;
  onClose: () => void;
  onAction: (action: ContextMenuItemAction, menuItem: IDataContextMenu) => void;
}

export interface IMenuItemContextMenu {
  id: ContextMenuItemAction | string;
  label: string;
  icon?: string;
  shortcut?: string;
  action?: string;
  disabled?: boolean;
  content?: (props: IContextMenuProps, disabled?: boolean) => React.ReactNode;
}

export interface IMenuGroupContextMenu {
  id: string;
  items: IMenuItemContextMenu[];
}
