import clsx from "clsx";
import React, { useState } from "react";

type Direction = "up" | "down" | "left" | "right";

interface TabBarItem {
  tab: React.ReactNode;
  content: React.ReactNode;
}

interface TabBarProps {
  direction: Direction;
  items: TabBarItem[];
  activeItem?: number;
  rtl?: boolean;
}

export const TabBar: React.FC<TabBarProps> = ({ direction, items, activeItem = 0, rtl = false }) => {
  const isVertical = direction === "left" || direction === "right";
  const isReverse = direction === "up" || direction === "left";
  const [activeIndex, setActiveIndex] = useState(activeItem);

  const currentContent = items[activeIndex]?.content ?? null;

  if (direction === "down") {
    return (
      <div className="relative w-full">
        <div className="absolute bottom-full left-0 z-[60] mb-2 w-full">{currentContent}</div>

        <div className="flex h-full w-full flex-row gap-0">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={clsx(
                "text-black relative flex cursor-pointer items-center justify-center border-2 border-gray-200 bg-white px-4 text-sm",
                "rounded-t-2xl",
                index === activeIndex && "bg-gray-100",
              )}
            >
              {item.tab}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const tabList = (
    <div className={clsx("z-10", isVertical ? "flex flex-col" : "flex flex-row", direction === "right" && "order-2")}>
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex?.(index)}
          className={clsx(
            "text-black flex cursor-pointer items-center justify-center border-2 border-gray-200 bg-white text-sm",
            isVertical ? "rounded-e-2xl p-3" : "rounded-b-2xl px-4 py-2",
            index === activeIndex && "bg-gray-100",
          )}
        >
          <div
            className={clsx(
              isVertical && rtl && "[text-orientation:sideways] [writing-mode:sideways-lr]",
              "text-center",
            )}
          >
            {item.tab}
          </div>
        </div>
      ))}
    </div>
  );

  const contentPanel = (
    <div
      className={clsx(
        "bg-white p-4",
        isVertical ?
          direction === "left" ?
            "absolute left-full top-0 h-full"
          : "absolute right-full top-0 h-full"
        : direction === "up" ? "absolute bottom-full left-0 w-full"
        : "absolute left-0 top-full w-full",
      )}
    >
      {currentContent}
    </div>
  );

  return (
    <div className="relative flex">
      {isReverse ?
        <>
          {tabList}
          {contentPanel}
        </>
      : <>
          {contentPanel}
          {tabList}
        </>
      }
    </div>
  );
};
