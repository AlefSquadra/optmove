import { clsx } from "clsx/lite";

const FTLayoutRoot = (props: { children?: React.ReactNode }) => {
  return <div className="grid h-screen grid-cols-12 grid-rows-[auto_1fr_40px]">{props?.children}</div>;
};

const FTLayoutHeader = (props: { children?: React.ReactNode; className?: string }) => {
  return <div className={clsx("z-10 col-span-12 col-start-1 row-start-1", props?.className)}>{props?.children}</div>;
};

const FTLayoutContent = (props: { children?: React.ReactNode }) => {
  return <div className="z-10 col-span-12 col-start-1 row-start-2">{props?.children}</div>;
};

const FTLayoutFooter = (props: { children?: React.ReactNode; className?: string }) => {
  return <div className="z-10 col-span-12 col-start-1 row-start-3">{props?.children}</div>;
};

export const FTLayout = {
  Root: FTLayoutRoot,
  Header: FTLayoutHeader,
  Content: FTLayoutContent,
  Footer: FTLayoutFooter,
};
