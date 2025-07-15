import { useApplicationContext } from "@app/providers/ApplicationProvider/useApplication";
import type { IOnGraphCoordinatesUpdateProps } from "@features/home/components/charts/GHTChartD3/GHTChartD3";
import { FtlContext } from "@features/home/providers/HomeFTLayoutProvider/HomeFtLayoutContext";
import type {
  IHomeFTLayoutProvider,
  IOpenPanelTabBarLeft,
} from "@features/home/providers/HomeFTLayoutProvider/HomeFTLayoutProvider.types";
import type { IModalData } from "@shared/types/IModalData.type";
import { useRef, useState } from "react";

export const HomeFTLayoutProvider = ({ children }: IHomeFTLayoutProvider) => {
  const { selectZoneParams } = useApplicationContext();
  const [selectedPanelTabBarLeft, setSelectedPanelTabBarLeft] = useState<IOpenPanelTabBarLeft>({
    isOpen: false,
    openTabName: "",
  });

  const [isOpenPanelTabBarDown, setIsPanelOpenDown] = useState<boolean>(false);
  const [showAccomplished, setShowAccomplished] = useState<boolean>(false);
  const [showTimelineView, setShowTimelineView] = useState<boolean>(true);
  const showInfoTrainRef = useRef<boolean>(false);

  const setShowInfoTrain = (value: boolean) => {
    showInfoTrainRef.current = value;
    console.log("HomeFTLayoutProvider: showInfoTrain ref changed to:", value);
  };

  const [openSelectOfficialization, setOpenSelectOfficialization] = useState<boolean>(
    selectZoneParams.profileZone == "2" ? true : false,
  );
  const [openSystemParams, setOpenSystemParams] = useState<IModalData<any>>({ isOpen: false });
  const [graphTimeAndCoordinates, setGraphTimeAndCoordinates] = useState<IOnGraphCoordinatesUpdateProps>({
    date: "",
    sbs: "",
  });

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
        graphTimeAndCoordinates,
        setGraphTimeAndCoordinates,
        showInfoTrainRef,
        setShowInfoTrain,
      }}
    >
      {children}
    </FtlContext.Provider>
  );
};
