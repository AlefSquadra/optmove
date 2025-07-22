import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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
import { OptSpinner, OptText } from "@shared/components/fluentui";
import type { IModalData } from "@shared/types/IModalData.type";

import { useApplicationContext } from "@app/providers/ApplicationProvider/useApplication";
import {
  GHTChartProvider,
  useGHTChartContext,
} from "@features/home/components/charts/GHTChart/provider/GHTChartProvider";
import type {
  IElementEventInPlotG,
  TrainMovementsElementEventDataType,
} from "@features/home/components/charts/GHTChart/provider/GhtChartProvider.types";
import { GHTChartD3 } from "@features/home/components/charts/GHTChartD3/GHTChartD3";
import {
  YardOccupancy,
  generateMockYardOccupancies,
  mockYardLines,
} from "@features/home/components/charts/YardOccupancy";
import { ChartRestrictionsMock, ChartTrainsMock, ChartYLabelMock } from "@features/home/components/FTV/json";
import { FTVOfficeMenu } from "@features/home/components/headerOfficeMenu/OfficeMenu";
import { ModalSearchTrainChartGhtForTable } from "@features/home/components/modals/modalSearchTrainChartGhtTable/ModalSearchTrainChartGhtTable";
import { OfficeMenuProvider } from "@features/home/providers/OfficeMenuProvider/OfficeMenuProvider";
import { GHTChartMainService } from "@features/home/services/GHTChartMainService";
import { Button, DrawerBody, DrawerHeader, DrawerHeaderTitle, OverlayDrawer } from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";
import { WindowModal } from "@shared/components/windowModal/WindowModal";
import { DateFormat } from "@shared/utils/DateFormat";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";

const FTVLayout = () => {
  const { setCursorPointer, mouseOverInElementData, setMouseOverInElementData } = useGHTChartContext();
  const FTContentRef = useRef<HTMLDivElement>(null);
  const [openTrainMovements, setOpenTrainMovements] = useState<IModalData<TrainMovementsElementEventDataType>>({
    isOpen: false,
  });
  const [highlightedPrefix, setHighlightedPrefix] = useState<string | null>(null);
  const {
    setOpenSelectOfficialization,
    openSelectOfficialization,
    setOpenSystemParams,
    openSystemParams,
    setGraphTimeAndCoordinates,
    showInfoTrainRef,
  } = useFTLayout();
  const { selectedOfficialization, setTrainsInGhtChart, trainsInGhtChart } = useApplicationContext();
  const { setSelectedPanelTabBarLeft } = useFTLayout();

  const parameters = useMemo(
    () => ({
      dateGhtTimeline: selectedOfficialization?.officializationForm.timelineDatetime as string,
      officializations:
        selectedOfficialization?.listOfficialization.map((o) =>
          DateFormat.isoToSpace(o.dateOfficialization).toString(),
        ) ?? [],
    }),
    [selectedOfficialization],
  );

  const isEnabled = Object.keys(selectedOfficialization || {}).length > 0;

  const sbsQuery = useQuery({
    queryKey: ["sbs", "ICZ-ISN Baixada Conceição-Santos"],
    queryFn: () => GHTChartMainService.getSbs("ICZ-ISN Baixada Conceição-Santos"),
    enabled: isEnabled,
    staleTime: 10 * 60 * 1000, // 10 minutes cache
    refetchOnWindowFocus: false,
  });

  const trainsQuery = useQuery({
    queryKey: [
      "trains",
      selectedOfficialization?.officializationForm.timelineDatetime,
      selectedOfficialization?.listOfficialization?.map((o) => o.dateOfficialization).join(","),
    ],
    queryFn: async () => await GHTChartMainService.getTrains(parameters),
    enabled: isEnabled,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const restrictionsQuery = useQuery({
    queryKey: [
      "restrictions",
      selectedOfficialization?.officializationForm.timelineDatetime,
      selectedOfficialization?.listOfficialization?.map((o) => o.dateOfficialization).join(","),
    ],
    queryFn: () => Promise.resolve(ChartRestrictionsMock),
    enabled: isEnabled,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const isLoading = sbsQuery.isLoading || trainsQuery.isLoading || restrictionsQuery.isLoading;
  const isError = sbsQuery.isError || trainsQuery.isError || restrictionsQuery.isError;

  useEffect(() => {
    if (trainsQuery.data) {
      setTrainsInGhtChart(trainsQuery.data);
    }
  }, [trainsQuery.data, setTrainsInGhtChart]);

  const [openModalSearchTrainChartGhtForTable, setOpenModalSearchTrainChartGhtForTable] = useState<IModalData<any>>({
    isOpen: false,
  });

  useEffect(() => {
    setCursorPointer("auto");
  }, [setCursorPointer]);

  const { initialDate, dateTimeLine, finalDate } = useMemo(() => {
    const isoString = selectedOfficialization?.officializationForm.timelineDatetime;
    if (!isoString)
      return {
        initialDate: new Date(),
        dateTimeLine: new Date(),
        finalDate: new Date(),
      };

    const baseDate = dayjs.utc(isoString); // garante que trabalha em UTC

    return {
      initialDate: baseDate.subtract(6, "hour").toDate(),
      dateTimeLine: baseDate.toDate(),
      finalDate: baseDate.add(2, "day").toDate(),
    };
  }, [selectedOfficialization]);

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
        if (elementEvent.element === "train" && showInfoTrainRef.current) {
          setSelectedPanelTabBarLeft(() => ({
            isOpen: true,
            openTabName: "editando o trem",
            data: elementEvent.data,
          }));
        }
      }
    },
    [setSelectedPanelTabBarLeft, showInfoTrainRef],
  );

  const handleOnClickMenuContext = useCallback((data: IElementEventInPlotG | null) => {
    if (data) {
      if (data.element === "trainMovements") {
        setOpenTrainMovements({
          isOpen: true,
          data,
        });
      }
    }
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
            <OptText className="text-blue-primary col-span-12 col-start-1 row-start-1 flex items-center justify-center text-center !font-bold">
              ICZ_ISN Baixada conceição santos
            </OptText>
          </div>
          <div className="h-full w-full overflow-hidden">
            {isLoading && (
              <WindowModal
                showButtonsHeader={false}
                open={true}
                initialWidth={300}
                initialHeight={120}
                title="Carregando..."
                onClose={() => {}}
              >
                <div className="flex flex-col items-center p-1">
                  <OptSpinner size="small" />
                  <div className="mt-1 text-lg text-gray-600">
                    {sbsQuery.isLoading && "Carregando lista de SBS, "}
                    {trainsQuery.isLoading && "Buscando trens, "}
                    {restrictionsQuery.isLoading && "Buscando restrições, "}
                    {!sbsQuery.isLoading && !trainsQuery.isLoading && !restrictionsQuery.isLoading && "Carregando..."}
                  </div>
                </div>
              </WindowModal>
            )}
            {!isLoading && (
              <GHTChartD3
                trains={trainsInGhtChart as any}
                yLabels={sbsQuery.data as any}
                restrictions={restrictionsQuery.data as any}
                height={FTContentRef?.current?.offsetHeight ? FTContentRef.current.offsetHeight - 47 : 0}
                hourWidth={42}
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

            {isError && (
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
          <OptText className="text-center text-red-700">
            {mouseOverInElementData?.element === "train" && (
              <>
                {`${mouseOverInElementData?.data?.train?.prefixo} (${mouseOverInElementData?.data?.train?.tipoTrem}) | Chegada: ${mouseOverInElementData?.data?.actualMovement?.chegada} | Saída: ${mouseOverInElementData?.data?.actualMovement?.linha} Destino: ${mouseOverInElementData?.data?.actualMovement?.destino}
                `}
              </>
            )}
            {mouseOverInElementData?.element === "restriction" && <> {JSON.stringify(mouseOverInElementData?.data)}</>}
          </OptText>
        </FTLayoutFooter>
        <FTLayoutTabPanelDown>
          <OverlayDrawer position={"bottom"} open={true} modalType="non-modal">
            <DrawerHeader>
              <DrawerHeaderTitle
                action={<Button appearance="subtle" aria-label="Close" icon={<Dismiss24Regular />} />}
              ></DrawerHeaderTitle>
            </DrawerHeader>

            <DrawerBody>
              <div className="relative">
                <div className="flex flex-row gap-0 bg-gray-100 p-2">
                  <h3 className="text-sm font-semibold">Ocupação de Pátios</h3>
                </div>
                <div className="w-full">
                  <YardOccupancy
                    hourWidth={42}
                    height={300}
                    yAxisWidth={120}
                    initialDate={initialDate}
                    dateTimeLine={dateTimeLine}
                    finalDate={finalDate}
                    lines={mockYardLines}
                    occupancies={generateMockYardOccupancies(dateTimeLine)}
                    onOccupancyClick={(occupancy) => {
                      console.log("Clicked on occupancy:", occupancy);
                    }}
                    onOccupancyHover={(occupancy) => {
                      console.log("Hovering occupancy:", occupancy);
                    }}
                  />
                </div>
              </div>
            </DrawerBody>
          </OverlayDrawer>
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
