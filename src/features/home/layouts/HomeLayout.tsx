import { useFTLayout } from "@features/home/providers/HomeFTLayoutProvider/useFtLayout";
import clsx from "clsx";
import { forwardRef } from "react";

const FTLayoutRoot = (props: { children?: React.ReactNode }) => {
  const { isOpenPanelTabBarDown } = useFTLayout();
  return (
    <div
      className={clsx(
        "grid h-screen grid-cols-[auto_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr]",
        isOpenPanelTabBarDown ? "grid-rows-[auto_1fr_40px_40px]" : "grid-rows-[auto_1fr_40px]",
      )}
    >
      {props?.children}
    </div>
  );
};

const FTLayoutHeader = (props: { children?: React.ReactNode; className?: string }) => {
  return <div className={clsx("z-10 col-span-12 col-start-1 row-start-1", props?.className)}>{props?.children}</div>;
};

const FTLayoutContent = forwardRef<HTMLDivElement, { children?: React.ReactNode; className?: string }>(
  ({ children, className }, ref) => {
    const { selectedPanelTabBarLeft: isOpenPanelTabBarLeft } = useFTLayout();
    return (
      <div
        ref={ref}
        className={clsx(
          "z-10 col-span-12 col-start-1 row-start-2",
          isOpenPanelTabBarLeft ? "col-start-2" : "col-start-1",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

const FTLayoutFooter = (props: { children?: React.ReactNode; className?: string }) => {
  return <div className={clsx("z-10 col-span-12 col-start-1 row-start-3", props?.className)}>{props?.children}</div>;
};

const FTLayoutTabPanelLeft = (props: { children?: React.ReactNode; className?: string }) => {
  const { selectedPanelTabBarLeft: isPanelOpen } = useFTLayout();

  return (
    isPanelOpen && (
      <div
        className={clsx(
          "relative z-50 col-auto col-start-1 row-span-12 row-start-2 row-end-2 flex w-fit bg-transparent",
          props.className,
        )}
      >
        {props.children}
      </div>
    )
  );
};

const FTLayoutTabPanelDown = (props: { children?: React.ReactNode; className?: string }) => {
  const { isOpenPanelTabBarDown: isPanelOpen } = useFTLayout();
  return (
    isPanelOpen && (
      <div
        className={clsx(
          "relative z-50 col-span-12 col-start-1 row-span-3 row-start-4 flex w-full bg-transparent",
          props.className,
        )}
      >
        {props.children}
      </div>
    )
  );
};

export { FTLayoutContent, FTLayoutFooter, FTLayoutHeader, FTLayoutRoot, FTLayoutTabPanelDown, FTLayoutTabPanelLeft };
