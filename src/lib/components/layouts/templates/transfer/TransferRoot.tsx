import classNames from "classnames";
import React, { useMemo, useState } from "react";
import { TransferItem, TransferProps } from "./Transfer.types";
import { TransferContext } from "./TransferContext";

export const Root: React.FC<TransferProps & { children: React.ReactNode }> = ({
  dataSource,
  targetKeys,
  onChange,
  children,
  className,
}) => {
  const [selectedLeft, setSelectedLeft] = useState<TransferItem[]>([]);
  const [selectedRight, setSelectedRight] = useState<TransferItem[]>([]);

  const leftItems = useMemo(
    () => dataSource?.filter((i) => !targetKeys.find((a) => a.key === i.key)),
    [dataSource, targetKeys],
  );
  const rightItems = useMemo(
    () => dataSource?.filter((i) => targetKeys.find((a) => a.key === i.key)),
    [dataSource, targetKeys],
  );

  const moveToRight = () => {
    onChange([...targetKeys, ...selectedLeft]);
    setSelectedLeft([]);
  };

  const moveToLeft = () => {
    const keysToRemove = selectedRight.map((item) => item.key);
    onChange(targetKeys.filter((item) => !keysToRemove.includes(item.key)));
    setSelectedRight([]);
  };

  return (
    <TransferContext.Provider
      value={{
        leftItems,
        rightItems,
        selectedLeft,
        selectedRight,
        setSelectedLeft,
        setSelectedRight,
        moveToRight,
        moveToLeft,
      }}
    >
      <div className={classNames("flex w-full items-center gap-4", className)}>{children}</div>
    </TransferContext.Provider>
  );
};
