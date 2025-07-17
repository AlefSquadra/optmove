import { useState } from "react";
import { OfficeMenuContext } from "./OfficeMenuContext";

export const OfficeMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedTab, setSelectedTab] = useState("ftv");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [prefix, setPrefix] = useState("");

  return (
    <OfficeMenuContext.Provider
      value={{
        selectedTab,
        setSelectedTab,
        isOpen,
        setIsOpen,
        prefix,
        setPrefix,
      }}
    >
      {children}
    </OfficeMenuContext.Provider>
  );
};
