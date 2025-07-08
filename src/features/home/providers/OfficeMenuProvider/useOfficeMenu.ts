import { useContext } from "react";
import { OfficeMenuContext } from "./OfficeMenuContext";

export const useOfficeMenuContext = () => {
  const context = useContext(OfficeMenuContext);
  if (!context) {
    throw new Error("useOfficeMenu must be used within a OfficeMenuProvider");
  }
  return context;
};
