import { GHTChart, GHTChartMock, Text } from "@optmoves/index";
import { FTLayout, useFTLayout } from "../../../../shared/layouts/FTLayout";
import {
  ControlFieldsetGroupBox,
  FilterFieldsetGroupBox,
  GraphicCoordinatesFieldsetGroupBox,
  OfficializationFieldsetGroupBox,
  SearchFieldsetGroupBox,
} from "../../components/ftFieldsetGroupBox";
import { TabBar } from "../../components/ftpTabBar/FTPTabBar";
import { HeaderContentGHTBox } from "../../components/headerContentGHTBox/HeaderContentGHTBox";

interface IFTPProps {}

const FTPLayout = (props: IFTPProps) => {
  const {} = props;
  const {} = useFTLayout();

  return (
    <>
      <FTLayout.Root>
        <FTLayout.TabPanelLeft>
          <TabBar
            direction="left"
            rtl
            items={[
              {
                tab: "Monitoramento de trens",
                content: (
                  <div className="p-4">
                    Conteúdo da OcupaçãoConteúdo da OcupaçãoConteúdo da OcupaçãoConteúdo da OcupaçãoConteúdo da
                    OcupaçãoConteúdo da Ocupação
                  </div>
                ),
              },
              {
                tab: "Estatísticas",
                content: <div className="p-4">Gráficos e Métricas</div>,
              },
            ]}
          />
        </FTLayout.TabPanelLeft>
        <FTLayout.Header className="z-20 grid grid-cols-[auto_auto_auto__1fr_auto_auto] grid-rows-1 items-center gap-4 px-2 pb-2">
          <FilterFieldsetGroupBox />
          <SearchFieldsetGroupBox />
          <ControlFieldsetGroupBox />
          <OfficializationFieldsetGroupBox />
          <GraphicCoordinatesFieldsetGroupBox />
        </FTLayout.Header>
        <FTLayout.Content>
          <HeaderContentGHTBox />
          <div className="h-full w-full overflow-hidden">
            <GHTChart
              data={GHTChartMock.data}
              database={GHTChartMock.database}
              restricoes={GHTChartMock.restricts}
              yLabels={GHTChartMock.yLabels}
              defaultHeight={760}
            />
          </div>
        </FTLayout.Content>
        <FTLayout.Footer className="row-auto flex items-center justify-center">
          <Text.Body variant="2" className="text-center text-red-700">
            CNY0159 (CARGA GERAL NAO PREFERENCIAL | Peso = 390 | Comprimento = 0,068) | Chegada: ISN-2-30/04/2025 10:00
            | Saída: ISN-230/04/2025 10:07 Destino: IPG
          </Text.Body>
        </FTLayout.Footer>
        <FTLayout.TabPanelDown>
          <TabBar
            direction="down"
            items={[
              {
                tab: "Ocupação de Pátios",
                content: (
                  <div className="bg-white p-4">
                    Conteúdo da OcupaçãoConteúdo da OcupaçãoConteúdo da OcupaçãoConteúdo da Ocupação Conteúdo da
                    Ocupação
                  </div>
                ),
              },
              {
                tab: "Estatísticas",
                content: <div className="p-4">Gráficos e Métricas</div>,
              },
            ]}
          />
        </FTLayout.TabPanelDown>
      </FTLayout.Root>
    </>
  );
};

const FTP = () => {
  return (
    <FTLayout.Provider>
      <FTPLayout />
    </FTLayout.Provider>
  );
};

export { FTP };
