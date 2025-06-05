import { FtlContext } from "@features/home/providers/HomeFTLayoutProvider/HomeFtLayoutContext";
import type {
  IHomeFTLayoutProvider,
  IOpenPanelTabBarLeft,
} from "@features/home/providers/HomeFTLayoutProvider/HomeFTLayoutProvider.types";
import { useState } from "react";

export const HomeFTLayoutProvider = ({ children }: IHomeFTLayoutProvider) => {
  const [selectedPanelTabBarLeft, setSelectedPanelTabBarLeft] = useState<IOpenPanelTabBarLeft>({
    isOpen: false,
    openTabName: "",
  });

  const [isOpenPanelTabBarDown, setIsPanelOpenDown] = useState<boolean>(false);
  const [showAccomplished, setShowAccomplished] = useState<boolean>(true);
  const [showTimelineView, setShowTimelineView] = useState<boolean>(false);

  return (
    <FtlContext.Provider
      value={{
        selectedPanelTabBarLeft,
        setSelectedPanelTabBarLeft,
        isOpenPanelTabBarDown,
        setIsPanelOpenDown,
        showAccomplished,
        setShowAccomplished,
        showTimelineView,
        setShowTimelineView,
      }}
    >
      {children}
    </FtlContext.Provider>
  );
};
