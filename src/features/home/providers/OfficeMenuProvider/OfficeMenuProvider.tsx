import { useState } from "react";
import { OfficeMenuContext } from "./OfficeMenuContext";

export const OfficeMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedTab, setSelectedTab] = useState("ftv");
  const [isPanelOpenDown, setIsPanelOpenDown] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [prefix, setPrefix] = useState("");

  return (
    <OfficeMenuContext.Provider
      value={{
        selectedTab,
        setSelectedTab,
        isPanelOpenDown,
        setIsPanelOpenDown,
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
