import { FtlContext } from "@features/home/providers/HomeFTLayoutProvider/HomeFtLayoutContext";
import type {
  IHomeFTLayoutProvider,
  IOpenPanelTabBarLeft,
} from "@features/home/providers/HomeFTLayoutProvider/HomeFTLayoutProvider.types";
import type { IModalData } from "@shared/types/IModalData.type";
import { useState } from "react";

export const HomeFTLayoutProvider = ({ children }: IHomeFTLayoutProvider) => {
  const [selectedPanelTabBarLeft, setSelectedPanelTabBarLeft] = useState<IOpenPanelTabBarLeft>({
    isOpen: false,
    openTabName: "",
  });

  const [isOpenPanelTabBarDown, setIsPanelOpenDown] = useState<boolean>(false);
  const [showAccomplished, setShowAccomplished] = useState<boolean>(true);
  const [showTimelineView, setShowTimelineView] = useState<boolean>(true);
  const [openSelectOfficialization, setOpenSelectOfficialization] = useState<boolean>(false);
  const [openSystemParams, setOpenSystemParams] = useState<IModalData<any>>({ isOpen: false });

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
        openSelectOfficialization,
        setOpenSelectOfficialization,
        openSystemParams,
        setOpenSystemParams,
      }}
    >
      {children}
    </FtlContext.Provider>
  );
};
