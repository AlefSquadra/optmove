import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

import type {
  ContextMenuItemAction,
  IDataContextMenu,
} from "@features/home/components/charts/elements/GHTChartContextMenu/contextMenu.types";
import { PriorizarDestinoModal } from "@features/home/components/modals/PriorizarDestinoModal";
import type { ISelectOfficializationDataGrid } from "@features/home/components/modals/selectOfficialization/DataGridSelectOfficialization";
import { ModalSelectOfficialization } from "@features/home/components/modals/selectOfficialization/ModalSelectOfficialization";
import { ModalSystemParams } from "@features/home/components/modals/systemParams/ModalSystemParams";
import { ModalTrainMovements } from "@features/home/components/modals/trainMovements/ModalTrainMovements";
import { FTVOfficeMenu } from "@features/home/components/officeMenu/officeMenu";
import { FTVTabLeft } from "@features/home/components/tabPanelLeft/FTVTabLeft";
import {
  FTLayoutContent,
  FTLayoutFooter,
  FTLayoutHeader,
  FTLayoutRoot,
  FTLayoutTabPanelDown,
  FTLayoutTabPanelLeft,
} from "@features/home/layouts/HomeLayout";
import { HomeFTLayoutProvider } from "@features/home/providers/HomeFTLayoutProvider/HomeFTLayoutProvider";
import { useFTLayout } from "@features/home/providers/HomeFTLayoutProvider/useFtLayout";
import { Spinner, Text } from "@fluentui/react-components";
import { WindowModal } from "@shared/components/windowModal/WindowModal";
import type { IModalData } from "@shared/types/IModalData.type";
import { GHTChart } from "../../components/charts";
import { dataOfficialization, GHTChartMock } from "../../components/charts/GHTChartMock";
import { GHTChartProvider, useGHTChartContext } from "../../components/charts/provider/GHTChartProvider";

const FTVLayout = () => {
  const { setCursorPointer, selectedElementClickable: lineTrainSelected } = useGHTChartContext();
  const FTContentRef = useRef<HTMLDivElement>(null);
  const [planParams, setPlanParams] = useState<ISelectOfficializationDataGrid[]>(
    [] as ISelectOfficializationDataGrid[],
  );
  const [loadingStage, setLoadingStage] = useState("");
  const [openTrainMovements, setOpenTrainMovements] = useState<IModalData<IDataContextMenu>>({
    isOpen: false,
  });
  const {
    showAccomplished,
    showTimelineView,
    setOpenSelectOfficialization,
    openSelectOfficialization,
    setOpenSystemParams,
    openSystemParams,
  } = useFTLayout();

  const fetchDataGHT = useQuery({
    queryKey: ["ghtData", planParams],
    queryFn: async () => {
      setLoadingStage("Carregando trens da malha...");
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setLoadingStage("Processando dados...");
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setLoadingStage("Plotando gráfico...");
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setLoadingStage("");
      return {
        data: GHTChartMock.data,
        database: GHTChartMock.database,
        restricts: GHTChartMock.restricts,
        yLabels: GHTChartMock.yLabels,
      };
    },
    enabled: planParams?.length > 0,
  });

  const handleContextMenu = (action: ContextMenuItemAction, menuItem: IDataContextMenu) => {
    switch (action) {
      case "train_movements":
        console.log(menuItem);
        setOpenTrainMovements({ isOpen: true, data: menuItem });
    }
  };

  useEffect(() => {
    setCursorPointer("auto");
  }, [setCursorPointer]);

  // useEffect(() => {
  //   const handleWindowClick = (event: MouseEvent) => {
  //     // Verifica se é clique esquerdo
  //     if (event.button !== 0) return;

  //     if (lineTrainSelected?.id && lineTrainSelected?.elementType === "train") {
  //       setSelectedPanelTabBarLeft({
  //         isOpen: true,
  //         openTabName: "editando o trem",
  //       });
  //     }
  //   };

  //   window.addEventListener("click", handleWindowClick);

  //   return () => {
  //     window.removeEventListener("click", handleWindowClick);
  //   };
  // }, [lineTrainSelected?.id, lineTrainSelected?.elementType]);

  return (
    <>
      <FTLayoutRoot>
        <FTLayoutTabPanelLeft>
          <FTVTabLeft />
        </FTLayoutTabPanelLeft>
        <FTLayoutHeader>
          <FTVOfficeMenu />
        </FTLayoutHeader>
        <FTLayoutContent ref={FTContentRef} className="flex flex-col">
          <div className="grid w-full grid-cols-12 grid-rows-[32px] place-items-center bg-yellow-50">
            <Text className="text-blue-primary col-span-12 col-start-1 row-start-1 flex items-center justify-center text-center !font-bold">
              ICZ_ISN Baixada conceição santos
            </Text>
          </div>
          <div className="h-full w-full overflow-hidden">
            {fetchDataGHT.isLoading && (
              <WindowModal
                showButtonsHeader={false}
                open={true}
                initialWidth={300}
                initialHeight={120}
                title="Carregando..."
                onClose={() => {}}
              >
                <div className="flex flex-col items-center p-1">
                  <Spinner size="small" />
                  <div className="mt-1 text-lg text-gray-600">{loadingStage || "Carregando..."}</div>
                </div>
              </WindowModal>
            )}

            {!fetchDataGHT.isLoading &&
              fetchDataGHT?.data?.data?.length &&
              fetchDataGHT?.data?.data?.length > 0 &&
              FTContentRef.current?.offsetHeight && (
                <GHTChart
                  data={GHTChartMock.data}
                  database={GHTChartMock.database}
                  restrictions={GHTChartMock.restricts}
                  yLabels={GHTChartMock.yLabels}
                  dataOfficialization={dataOfficialization}
                  defaultHeight={FTContentRef?.current?.offsetHeight ? FTContentRef?.current?.offsetHeight - 47 : 0}
                  onContextMenuAction={handleContextMenu}
                  showAccomplished={showAccomplished}
                  showTimelineView={showTimelineView}
                />
              )}
          </div>
        </FTLayoutContent>

        <FTLayoutFooter className="row-auto flex items-center justify-center">
          {lineTrainSelected.name && (
            <Text className="text-center text-red-700">
              {`${lineTrainSelected.name} (${lineTrainSelected.data.type}) | Chegada: ${lineTrainSelected.data?.xi} | Saída: ${lineTrainSelected?.data?.xf} Destino: ${
                lineTrainSelected.data?.info.find((x: { label: string; value: string }) => x?.label === "Destino")
                  ?.value
              }`}
            </Text>
          )}
        </FTLayoutFooter>
        <FTLayoutTabPanelDown>
          <div className="relative">
            <div className="flex flex-row gap-0">
              {["Monitoramento de planos", "Atividades alteradas"].map((label, index) => (
                <div
                  key={index}
                  className="group relative flex cursor-pointer items-center justify-center rounded-t-2xl border-2 border-gray-200 bg-white p-3"
                >
                  <div className="text-sm text-black">{label}</div>
                </div>
              ))}
            </div>
            <div className="absolute top-full left-0 w-full bg-red-100 p-2">teste</div>
          </div>
        </FTLayoutTabPanelDown>
      </FTLayoutRoot>
      <ModalSelectOfficialization
        onSelectedPlans={(plans) => {
          setPlanParams(plans);
        }}
        openSelectOfficialization={openSelectOfficialization}
        setOpenSelectOfficialization={setOpenSelectOfficialization}
      />
      <ModalTrainMovements openTrainMovements={openTrainMovements} setOpenTrainMovements={setOpenTrainMovements} />
      <ModalSystemParams openSystemParams={openSystemParams} setOpenSystemParams={setOpenSystemParams} />
      <PriorizarDestinoModal onClose={() => {}} open={false} />
    </>
  );
};

const FTV = () => {
  return (
    <HomeFTLayoutProvider>
      <GHTChartProvider>
        <FTVLayout />
      </GHTChartProvider>
    </HomeFTLayoutProvider>
  );
};

export { FTV };
