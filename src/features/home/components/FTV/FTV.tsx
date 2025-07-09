import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import type { IDataContextMenu } from "@features/home/components/charts/GHTChart/elements/GHTChartContextMenu/contextMenu.types";
import { ModalSearchTrainChartGhtForTable } from "@features/home/components/modals/ModalSearchTrainChartGhtForTable/ModalSearchTrainChartGhtForTable";
import { ModalSelectOfficialization } from "@features/home/components/modals/selectOfficialization/ModalSelectOfficialization";
import { ModalSystemParams } from "@features/home/components/modals/systemParams/ModalSystemParams";
import { ModalTrainMovements } from "@features/home/components/modals/trainMovements/ModalTrainMovements";
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
import type { IModalData } from "@shared/types/IModalData.type";

import { useApplicationContext } from "@app/providers/ApplicationProvider/useApplication";
import {
  GHTChartProvider,
  useGHTChartContext,
} from "@features/home/components/charts/GHTChart/provider/GHTChartProvider";
import type { IElementEventInPlotG } from "@features/home/components/charts/GHTChart/provider/GhtChartProvider.types";
import { GHTChartD3 } from "@features/home/components/charts/GHTChartD3/GHTChartD3";
import { ChartRestrictionsMock, ChartTrainsMock, ChartYLabelMock } from "@features/home/components/FTV/json";
import { FTVOfficeMenu } from "@features/home/components/officeMenu/OfficeMenu";
import { OfficeMenuProvider } from "@features/home/providers/OfficeMenuProvider/OfficeMenuProvider";
import { GHTChartMainService } from "@features/home/services/GHTChartMainService";
import { WindowModal } from "@shared/components/windowModal/WindowModal";
import { DateFormat } from "@shared/utils/DateFormat";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";

const FTVLayout = () => {
  const { setCursorPointer, mouseOverInElementData, setMouseOverInElementData } = useGHTChartContext();
  const FTContentRef = useRef<HTMLDivElement>(null);
  const [openTrainMovements, setOpenTrainMovements] = useState<IModalData<IDataContextMenu>>({
    isOpen: false,
  });
  const [highlightedPrefix, setHighlightedPrefix] = useState<string | null>(null);
  const {
    setOpenSelectOfficialization,
    openSelectOfficialization,
    setOpenSystemParams,
    openSystemParams,
    setGraphTimeAndCoordinates,
  } = useFTLayout();
  const [loadingStage, setLoadingStage] = useState<string>("");
  const { selectedOfficialization, setTrainsInGhtChart, trainsInGhtChart } = useApplicationContext();
  const { setSelectedPanelTabBarLeft } = useFTLayout();
  const fetchDataGHT = useQuery({
    queryKey: ["ghtData", selectedOfficialization],
    queryFn: async () => {
      const parameters = {
        dateGhtTimeline: selectedOfficialization?.officializationForm.timelineDatetime as string,
        officializations:
          selectedOfficialization?.listOfficialization.map((o) =>
            DateFormat.isoToSpace(o.dateOfficialization).toString(),
          ) ?? [],
      };

      setLoadingStage("Carregando lista de SBS...");

      const sbs = await GHTChartMainService.getSbs("ICZ-ISN Baixada Conceição-Santos");

      setLoadingStage("Buscando trens...");

      const trains = await GHTChartMainService.getTrains(parameters);

      setLoadingStage("Buscando restrições");

      const rectangles = await GHTChartMainService.getRectangles(parameters);

      setTrainsInGhtChart(trains);
      setLoadingStage("");
      return {
        trains,
        rectangles,
        sbs,
      };
    },
    enabled: Object.keys(selectedOfficialization || {}).length > 0,
  });
  const [openModalSearchTrainChartGhtForTable, setOpenModalSearchTrainChartGhtForTable] = useState<IModalData<any>>({
    isOpen: false,
  });

  useEffect(() => {
    setCursorPointer("auto");
  }, [setCursorPointer]);

  const { initialDate, dateTimeLine, finalDate } = useMemo(() => {
    const baseDate = new Date("2025-06-30T16:12:32+00:00");
    return {
      initialDate: dayjs(baseDate).subtract(6, "hour").toDate(),
      dateTimeLine: baseDate,
      finalDate: new Date("2025-07-01T23:12:32+00:00"),
    };
  }, []);

  const handleMouseMoveInRestriction = useCallback(
    (data) => {
      setMouseOverInElementData(data);
    },
    [setMouseOverInElementData],
  );

  const handleGraphTimeChange = useCallback((props) => {
    setGraphTimeAndCoordinates(props);
  }, []);

  const handleOnClickInElement = useCallback(
    (elementEvent: IElementEventInPlotG | null) => {
      if (elementEvent !== null) {
        if (elementEvent.element === "train") {
          setSelectedPanelTabBarLeft(() => ({
            isOpen: true,
            openTabName: "editando o trem",
            data: elementEvent.data,
          }));
        }
      }
    },
    [setSelectedPanelTabBarLeft],
  );

  const handleOnClickMenuContext = useCallback((data) => {
    setOpenTrainMovements({
      isOpen: true,
      data,
    });
  }, []);

  const handlePrefixSearchChange = useCallback(
    (prefix: string) => {
      const searchPrefix = prefix.trim().toUpperCase();

      if (searchPrefix) {
        const tableExists = trainsInGhtChart.some((train) => train.tabela.toUpperCase().startsWith(searchPrefix));

        if (tableExists) {
          const groupedTrains = Object.groupBy(trainsInGhtChart, ({ tabela }) => tabela);
          const trainsData = groupedTrains[searchPrefix]!.map((train) => ({
            prefixo: train.prefixo,
            local: train.patioExterno,
            dataChegada: train.dataOficializacao,
          }));

          setOpenModalSearchTrainChartGhtForTable({
            isOpen: true,
            data: trainsData,
          });
        } else {
          const matchExists = trainsInGhtChart.some((train) => train.prefixo.toUpperCase().startsWith(searchPrefix));

          if (matchExists) {
            setHighlightedPrefix(searchPrefix);
          } else {
            setHighlightedPrefix(null); // Clear highlights if no match is found
          }
        }
      }
    },
    [trainsInGhtChart],
  );

  return (
    <>
      <FTLayoutRoot>
        <FTLayoutTabPanelLeft>
          <FTVTabLeft />
        </FTLayoutTabPanelLeft>
        <FTLayoutHeader>
          <FTVOfficeMenu handlePrefixSearchChange={handlePrefixSearchChange} />
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
              fetchDataGHT.data &&
              fetchDataGHT.data?.sbs.length > 0 &&
              fetchDataGHT.data?.rectangles.length > 0 && (
                <GHTChartD3
                  trains={trainsInGhtChart as any}
                  yLabels={fetchDataGHT.data?.sbs as any}
                  restrictions={fetchDataGHT.data?.rectangles as any}
                  height={FTContentRef?.current?.offsetHeight ? FTContentRef.current.offsetHeight - 47 : 0}
                  hourWidth={80}
                  yAxisWidth={80}
                  initialDate={initialDate}
                  dateTimeLine={dateTimeLine}
                  finalDate={finalDate}
                  onGraphTimeAndCoordenatesChange={handleGraphTimeChange}
                  onMouseMoveInElement={handleMouseMoveInRestriction}
                  onClickInElement={handleOnClickInElement}
                  onClickMenuContext={handleOnClickMenuContext}
                  highlightedPrefix={highlightedPrefix}
                />
              )}

            {fetchDataGHT.isError && (
              <>
                <GHTChartD3
                  trains={ChartTrainsMock as any}
                  yLabels={ChartYLabelMock}
                  restrictions={ChartRestrictionsMock as any}
                  height={FTContentRef?.current?.offsetHeight ? FTContentRef.current.offsetHeight - 47 : 0}
                  hourWidth={80}
                  yAxisWidth={80}
                  initialDate={initialDate}
                  dateTimeLine={dateTimeLine}
                  finalDate={finalDate}
                  onGraphTimeAndCoordenatesChange={handleGraphTimeChange}
                  onMouseMoveInElement={handleMouseMoveInRestriction}
                  onClickInElement={handleOnClickInElement}
                  onClickMenuContext={handleOnClickMenuContext}
                  highlightedPrefix={highlightedPrefix}
                />
              </>
            )}
          </div>
        </FTLayoutContent>

        <FTLayoutFooter className="row-auto flex items-center justify-center">
          <Text className="text-center text-red-700">
            {mouseOverInElementData?.element === "train" && (
              <>
                {/* {`${lineTrainSelected.name} (${lineTrainSelected.data.type}) | Chegada: ${lineTrainSelected.data?.xi} | Saída: ${lineTrainSelected?.data?.xf} Destino: ${
                lineTrainSelected.data?.info.find((x: { label: string; value: string }) => x?.label === "Destino")
                  ?.value
              }`} */}
                {JSON.stringify(mouseOverInElementData?.data)}
              </>
            )}
            {mouseOverInElementData?.element === "restriction" && <> {JSON.stringify(mouseOverInElementData?.data)}</>}
          </Text>
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
        onSelectedPlans={() => {}}
        openSelectOfficialization={openSelectOfficialization}
        setOpenSelectOfficialization={setOpenSelectOfficialization}
      />
      <ModalTrainMovements openTrainMovements={openTrainMovements} setOpenTrainMovements={setOpenTrainMovements} />
      <ModalSystemParams openSystemParams={openSystemParams} setOpenSystemParams={setOpenSystemParams} />
      <ModalSearchTrainChartGhtForTable
        open={openModalSearchTrainChartGhtForTable.isOpen}
        onClose={() => setOpenModalSearchTrainChartGhtForTable({ isOpen: false })}
        HandleOkChange={(selected) => {
          console.log(selected);
          if (selected?.prefixo) {
            setHighlightedPrefix(selected.prefixo);
          }
        }}
        data={openModalSearchTrainChartGhtForTable.data || []}
      />
      {/* <PriorizarDestinoModal onClose={() => {}} open={false} /> */}
    </>
  );
};

const FTV = () => {
  return (
    <HomeFTLayoutProvider>
      <GHTChartProvider>
        <OfficeMenuProvider>
          <FTVLayout />
        </OfficeMenuProvider>
      </GHTChartProvider>
    </HomeFTLayoutProvider>
  );
};

export { FTV };
