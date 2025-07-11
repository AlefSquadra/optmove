import {
  Menu,
  type MenuProps,
  MenuButton,
  type MenuButtonProps,
  MenuItem,
  type MenuItemProps,
  MenuList,
  type MenuListProps,
  MenuPopover,
  type MenuPopoverProps,
  MenuTrigger,
  type MenuTriggerProps,
} from "@fluentui/react-components";

const OptMenu = (props: MenuProps) => {
  return <Menu {...props} />;
};

const OptMenuButton = (props: MenuButtonProps) => {
  return <MenuButton {...props} />;
};

const OptMenuItem = (props: MenuItemProps) => {
  return <MenuItem {...props} />;
};

const OptMenuList = (props: MenuListProps) => {
  return <MenuList {...props} />;
};

const OptMenuPopover = (props: MenuPopoverProps) => {
  return <MenuPopover {...props} />;
};

const OptMenuTrigger = (props: MenuTriggerProps) => {
  return <MenuTrigger {...props} />;
};

export { OptMenu, OptMenuButton, OptMenuItem, OptMenuList, OptMenuPopover, OptMenuTrigger };
