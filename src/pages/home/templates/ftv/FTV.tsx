import { LoadingOutlined } from "@ant-design/icons";
import { OptMoveIcon, Text } from "@optmoves/index";
import { useQuery } from "@tanstack/react-query";
import { Button, Modal, Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import { SelectZoneService } from "../../../../services/selectZones/SelectZoneService";
import { GroupBoxFieldset } from "../../../../shared/components/GroupBoxFieldset/GroupBoxFieldset";
import { FTLayout } from "../../../../shared/layouts/FTLayout";
import { GHTChart } from "../../components/charts";
import { dataOfficialization, GHTChartMock } from "../../components/charts/GHTChartMock";
import { GHTChartProvider, useGHTChartContext } from "../../components/charts/provider/GHTChartProvider";
import {
  ControlFieldsetGroupBox,
  FilterFieldsetGroupBox,
  SearchFieldsetGroupBox,
} from "../../components/ftFieldsetGroupBox";
import { SelectOfficialization } from "../../components/modals/officialization/select-officialization";

interface IFTVProps {}

const FTVLayout = (props: IFTVProps) => {
  const {} = props;
  const { setCursorPointer, selectedElementClickable: lineTrainSelected } = useGHTChartContext();
  const FTContentRef = useRef<HTMLDivElement>(null);
  const [planParams, setPlanParams] = useState<any[]>([]);
  const [loadingStage, setLoadingStage] = useState("");

  const fetchDataGHT = useQuery({
    queryKey: ["ghtData", planParams?.length],
    queryFn: async () => {
      setLoadingStage("Carregando trens da malha...");
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setLoadingStage("Processando dados...");
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setLoadingStage("Plotando gráfico...");
      const result = await SelectZoneService.getZonePlanner();

      setLoadingStage("");
      return result;
    },
    enabled: !!(planParams?.length && FTContentRef.current?.offsetHeight),
  });

  useEffect(() => {
    setCursorPointer("auto");
  }, [setCursorPointer]);

  const renderContent = () => {
    if (fetchDataGHT.isLoading) {
      return (
        <Modal
          open={true}
          footer={null}
          closable={false}
          classNames={{
            content: "p-0",
          }}
          width={300}
          centered
          maskClosable={false}
          mask={false}
        >
          <div className="flex flex-col items-center p-1">
            <Spin size="small" indicator={<LoadingOutlined style={{ fontSize: 32 }} spin />} />
            <div className="mt-1 text-lg text-gray-600">{loadingStage || "Carregando..."}</div>
          </div>
        </Modal>
      );
    }

    return (
      <GHTChart
        data={GHTChartMock.data}
        database={GHTChartMock.database}
        restrictions={GHTChartMock.restricts}
        yLabels={GHTChartMock.yLabels}
        dataOfficialization={dataOfficialization}
        defaultHeight={FTContentRef.current?.offsetHeight - 47}
      />
    );
  };

  return (
    <>
      <FTLayout.Root>
        <FTLayout.TabPanelLeft>
          <div className="relative">
            <div className="flex flex-col gap-0">
              {["Monitoramento de planos", "Atividades alteradas"].map((label, index) => (
                <div
                  key={index}
                  className="group relative flex cursor-pointer items-center justify-center rounded-e-2xl border-2 border-gray-200 bg-white p-3"
                >
                  <div className="text-black text-sm [text-orientation:sideways] [writing-mode:sideways-lr]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute left-full top-0 h-full w-full bg-red-100 p-2">teste</div>
          </div>
        </FTLayout.TabPanelLeft>
        <FTLayout.Header className="z-20 grid grid-cols-[auto_auto_auto_auto_1fr_auto_auto] grid-rows-1 items-center gap-4 px-2 pb-2">
          <FilterFieldsetGroupBox />
          <SearchFieldsetGroupBox />
          <ControlFieldsetGroupBox />
          {/** Plano */}
          {/* <GroupBoxFieldset.Root className="flex min-h-20 items-center justify-start gap-4 p-2">
            <GroupBoxFieldset.Legend>Planos</GroupBoxFieldset.Legend>
            <Select label="Pátio destino">
              <option selected value={null}>
                30/04/2025 10:00
              </option>
            </Select>
          </GroupBoxFieldset.Root> */}
          {/** Fim Plano */}
          {/** Oficialização */}
          <GroupBoxFieldset.Root className="col-start-6 min-h-20 items-center justify-start p-2">
            <GroupBoxFieldset.Legend>Oficialização</GroupBoxFieldset.Legend>
            <Text.Label variant="1">16/04/2025 17:39:23</Text.Label>
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col">
                <Text.Label variant="1">Mesa 4</Text.Label>
                <Text.Label variant="1">100%</Text.Label>
              </div>
              <Button variant="outlined" className="h-6 border-none p-0">
                <OptMoveIcon name="FTPSearchEyeIcon" height={24} width={24} />
              </Button>
            </div>
          </GroupBoxFieldset.Root>
          {/** Fim Oficialização */}
          {/** Coordenadas gráfico */}
          <GroupBoxFieldset.Root className="col-start-7 flex min-h-20 items-center justify-start gap-2 p-2">
            <GroupBoxFieldset.Legend>Coordenadas gráfico</GroupBoxFieldset.Legend>
            <p>SB: Fora do painel</p>
          </GroupBoxFieldset.Root>
          {/** Fim gráfico */}
        </FTLayout.Header>
        <FTLayout.Content ref={FTContentRef} className="flex flex-col">
          <div className="grid w-full grid-cols-12 grid-rows-[32px] bg-yellow-50">
            <Text.Label
              variant="1"
              className="col-span-12 col-start-1 row-start-1 flex items-center justify-center !font-bold text-blue-primary"
            >
              ICZ_ISN Baixada conceição santos {FTContentRef.current?.offsetHeight}
            </Text.Label>
          </div>
          <div className="h-full w-full overflow-hidden">
            {planParams?.length && FTContentRef.current?.offsetHeight ? renderContent() : <></>}
          </div>
        </FTLayout.Content>

        <FTLayout.Footer className="row-auto flex items-center justify-center">
          {lineTrainSelected.name && (
            <Text.Body variant="2" className="text-center text-red-700">
              {`${lineTrainSelected.name} (${lineTrainSelected.data.type}) | Chegada: ${lineTrainSelected.data?.xi} | Saída: ${lineTrainSelected?.data?.xf} Destino: ${lineTrainSelected.data?.info.find((x) => x?.label === "Destino")?.value}`}
            </Text.Body>
          )}
        </FTLayout.Footer>
        <FTLayout.TabPanelDown>
          <div className="relative">
            <div className="flex flex-row gap-0">
              {["Monitoramento de planos", "Atividades alteradas"].map((label, index) => (
                <div
                  key={index}
                  className="group relative flex cursor-pointer items-center justify-center rounded-t-2xl border-2 border-gray-200 bg-white p-3"
                >
                  <div className="text-black text-sm">{label}</div>
                </div>
              ))}
            </div>
            <div className="absolute left-0 top-full w-full bg-red-100 p-2">teste</div>
          </div>
        </FTLayout.TabPanelDown>
      </FTLayout.Root>
      <SelectOfficialization setPlanParams={setPlanParams} planParams={planParams} />
    </>
  );
};

const FTV = () => {
  return (
    <FTLayout.Provider>
      <GHTChartProvider>
        <FTVLayout />
      </GHTChartProvider>
    </FTLayout.Provider>
  );
};

export { FTV };
