import { FtlContext } from "@features/home/providers/HomeFTLayoutProvider/HomeFtLayoutContext";
import { useContext } from "react";

export const useFTLayout = () => {
  const context = useContext(FtlContext);
  if (!context) {
    throw new Error("useFTLayout must be used within a FTLayoutProvider");
  }
  return context;
};
