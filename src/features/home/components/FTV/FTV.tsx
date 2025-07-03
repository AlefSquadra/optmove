import { useEffect, useRef, useState } from "react";

import type { IDataContextMenu } from "@features/home/components/charts/GHTChart/elements/GHTChartContextMenu/contextMenu.types";
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
import { Text } from "@fluentui/react-components";
import type { IModalData } from "@shared/types/IModalData.type";

import {
  GHTChartProvider,
  useGHTChartContext,
} from "@features/home/components/charts/GHTChart/provider/GHTChartProvider";
import { GHTChartD3 } from "@features/home/components/charts/GHTChartD3/GHTChartD3";
import { ChartTrainsMock, ChartYLabelMock } from "@features/home/components/FTV/json";

const FTVLayout = () => {
  const { setCursorPointer, selectedElementClickable: lineTrainSelected } = useGHTChartContext();
  const FTContentRef = useRef<HTMLDivElement>(null);
  const [openTrainMovements, setOpenTrainMovements] = useState<IModalData<IDataContextMenu>>({
    isOpen: false,
  });
  const { setOpenSelectOfficialization, openSelectOfficialization, setOpenSystemParams, openSystemParams } =
    useFTLayout();

  useEffect(() => {
    setCursorPointer("auto");
  }, [setCursorPointer]);

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
            {/* {fetchDataGHT.isLoading && (
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
            )} */}

            <GHTChartD3
              trains={ChartTrainsMock}
              yLabels={ChartYLabelMock}
              height={FTContentRef?.current?.offsetHeight ? FTContentRef?.current?.offsetHeight - 47 : 0}
              hourWidth={80}
              yAxisWidth={80}
              initialDate={new Date("2025-06-30T10:12:32")}
              finalDate={new Date("2025-07-01T16:12:32")}
            />
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
        onSelectedPlans={() => {
          // setPlanParams(plans);
        }}
        openSelectOfficialization={openSelectOfficialization}
        setOpenSelectOfficialization={setOpenSelectOfficialization}
      />
      <ModalTrainMovements openTrainMovements={openTrainMovements} setOpenTrainMovements={setOpenTrainMovements} />
      <ModalSystemParams openSystemParams={openSystemParams} setOpenSystemParams={setOpenSystemParams} />
      {/* <PriorizarDestinoModal onClose={() => {}} open={false} /> */}
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
