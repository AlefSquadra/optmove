import { Button, GHTChart, GHTChartMock, OptMoveIcon, Select, Text } from "@optmove/design-system";
import { GroupBoxFieldset } from "../../../../shared/components/GroupBoxFieldset/GroupBoxFieldset";
import { FTLayout } from "../../../../shared/layouts/FTLayout";
import { ControlFieldsetGroupBox } from "../../components/ftpFieldsetGroupbox/ControlFieldsetGroupBox";
import { FilterFieldsetGroupBox } from "../../components/ftpFieldsetGroupbox/FilterFieldsetGroupBox";
import { SearchFieldsetGroupBox } from "../../components/ftpFieldsetGroupbox/SearchFieldsetGroupBox";

interface IFTVProps {}

const FTVLayout = (props: IFTVProps) => {
  const {} = props;

  return (
    <>
      <FTLayout.Root>
        <FTLayout.TabPanelLeft>
          <div className="relative">
            {/* Lista de labels */}
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

            {/* "teste" ao lado */}
            <div className="absolute left-full top-0 h-full w-full bg-red-100 p-2">teste</div>
          </div>
        </FTLayout.TabPanelLeft>
        <FTLayout.Header className="z-20 grid grid-cols-[auto_auto_auto_auto_1fr_auto_auto] grid-rows-1 items-center gap-4 px-2 pb-2">
          <FilterFieldsetGroupBox />
          <SearchFieldsetGroupBox />
          <ControlFieldsetGroupBox />
          {/** Plano */}
          <GroupBoxFieldset.Root className="flex min-h-20 items-center justify-start gap-4 p-2">
            <GroupBoxFieldset.Legend>Planos</GroupBoxFieldset.Legend>
            <Select label="Pátio destino">
              <option selected value={null}>
                30/04/2025 10:00
              </option>
            </Select>
          </GroupBoxFieldset.Root>
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
          <GroupBoxFieldset.Root className="col-start-7 h-full min-h-20 items-center justify-start">
            <GroupBoxFieldset.Legend>Coordenadas gráfico</GroupBoxFieldset.Legend>
            SB: Fora do painel
          </GroupBoxFieldset.Root>
          {/** Fim gráfico */}
        </FTLayout.Header>
        <FTLayout.Content>
          <div className="grid w-full grid-cols-12 grid-rows-[32px] bg-yellow-50">
            <Text.Label
              variant="1"
              className="col-span-12 col-start-1 row-start-1 flex items-center justify-center !font-bold text-blue-primary"
            >
              ICZ_ISN Baixada conceição santos
            </Text.Label>
          </div>
          <div className="h-full w-full overflow-hidden">
            <GHTChart
              data={GHTChartMock.data}
              database={GHTChartMock.database}
              restricoes={GHTChartMock.restricts}
              yLabels={GHTChartMock.yLabels}
              defaultHeight={800}
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
          <div className="relative">
            {/* Lista de labels */}
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

            {/* "teste" abaixo */}
            <div className="absolute left-0 top-full w-full bg-red-100 p-2">teste</div>
          </div>
        </FTLayout.TabPanelDown>
      </FTLayout.Root>
    </>
  );
};

const FTV = () => {
  return (
    <FTLayout.Provider>
      <FTVLayout />
    </FTLayout.Provider>
  );
};

export { FTV };
