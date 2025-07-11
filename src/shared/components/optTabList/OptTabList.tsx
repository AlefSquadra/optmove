import { OptTab, OptTabList } from "@shared/components/fluentui";
import type { SelectTabData, SelectTabEvent, TabValue } from "@fluentui/react-components";
import clsx from "clsx";
import React, { type ReactNode } from "react";

export interface IOptTabItem {
  id: string;
  value: TabValue;
  label: string;
}

interface IOptTabListProps {
  items: IOptTabItem[];
  defaultValue?: TabValue;
  onChange?: (value: TabValue) => void;
  children?: ReactNode;
  className?: string;
}

const OptTabListComponent = ({ items, defaultValue, onChange, children, className }: IOptTabListProps) => {
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
      <OptTabList selectedValue={selectedValue} onTabSelect={onTabSelect}>
        {items.map((item) => (
          <OptTab key={item.id} id={item.id} value={item.value}>
            {item.label}
          </OptTab>
        ))}
      </OptTabList>
      {content}
    </div>
  );
};

const OptTabElement = ({ children, className }: { children: React.ReactNode; value: TabValue; className?: string }) => {
  return <div className={clsx("h-full", className)}>{children}</div>;
};

OptTabListComponent.Element = OptTabElement;

export { OptTabListComponent };
