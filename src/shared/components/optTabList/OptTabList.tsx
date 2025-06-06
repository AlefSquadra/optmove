import { Tab, TabList, type SelectTabData, type SelectTabEvent, type TabValue } from "@fluentui/react-components";
import clsx from "clsx";
import React, { type ReactNode } from "react";

export interface ITabItem {
  id: string;
  value: TabValue;
  label: string;
}

interface IOptTabListProps {
  items: ITabItem[];
  defaultValue?: TabValue;
  onChange?: (value: TabValue) => void;
  children?: ReactNode;
  className?: string;
}

const OptTabList = ({ items, defaultValue, onChange, children, className }: IOptTabListProps) => {
  const [selectedValue, setSelectedValue] = React.useState<TabValue>(defaultValue ?? items[0]?.value);

  const onTabSelect = (_event: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value);
    onChange?.(data.value);
  };

  const content = React.Children.toArray(children).find((child: any) => {
    return child?.props?.value === selectedValue;
  });

  return (
    <div className={clsx("flex h-full flex-col gap-2", className)}>
      <TabList selectedValue={selectedValue} onTabSelect={onTabSelect}>
        {items.map((item) => (
          <Tab key={item.id} id={item.id} value={item.value}>
            {item.label}
          </Tab>
        ))}
      </TabList>
      {content}
    </div>
  );
};

const TabElement = ({ children, className }: { children: React.ReactNode; value: TabValue; className?: string }) => {
  return <div className={clsx("h-full", className)}>{children}</div>;
};

OptTabList.Element = TabElement;

export { OptTabList };
