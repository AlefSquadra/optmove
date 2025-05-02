import { clsx } from "clsx/lite";
import { createContext, useContext, useState } from "react";

interface FTLayoutContext {
  isOpenPanelTabBarLeft: boolean;
  setIsOpenPanelTabBarLeft: React.Dispatch<React.SetStateAction<boolean>>;
}

const FtlContext = createContext<FTLayoutContext>(undefined);

const FTLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenPanelTabBarLeft, setIsPanelOpen] = useState(false);
  return (
    <FtlContext.Provider value={{ isOpenPanelTabBarLeft, setIsOpenPanelTabBarLeft: setIsPanelOpen }}>
      {children}
    </FtlContext.Provider>
  );
};
export const useFTLayout = () => {
  const context = useContext(FtlContext);
  if (!context) {
    throw new Error("useFTLayout must be used within a FTLayoutProvider");
  }
  return context;
};

const FTLayoutRoot = (props: { children?: React.ReactNode }) => {
  return (
    <div className="grid h-screen grid-cols-[auto_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto_1fr_40px]">
      {props?.children}
    </div>
  );
};

const FTLayoutHeader = (props: { children?: React.ReactNode; className?: string }) => {
  return <div className={clsx("z-10 col-span-12 col-start-1 row-start-1", props?.className)}>{props?.children}</div>;
};

const FTLayoutContent = (props: { children?: React.ReactNode }) => {
  const { isOpenPanelTabBarLeft } = useFTLayout();
  return (
    <div
      className={clsx(
        "z-10 col-span-12 col-start-1 row-start-2",
        isOpenPanelTabBarLeft ? "col-start-2" : "col-start-1",
      )}
    >
      {props?.children}
    </div>
  );
};

const FTLayoutFooter = (props: { children?: React.ReactNode; className?: string }) => {
  return <div className={clsx("z-10 col-span-12 col-start-1 row-start-3", props?.className)}>{props?.children}</div>;
};

const FTLayoutTabPanelLeft = (props: { children?: React.ReactNode; className?: string }) => {
  const { isOpenPanelTabBarLeft: isPanelOpen } = useFTLayout();
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

export const FTLayout = {
  Provider: FTLayoutProvider,
  Root: FTLayoutRoot,
  Header: FTLayoutHeader,
  Content: FTLayoutContent,
  Footer: FTLayoutFooter,
  TabPanelLeft: FTLayoutTabPanelLeft,
};
