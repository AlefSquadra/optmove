import { Button, GHTChart, GHTChartMock, Input, OptMoveIcon, Select, Text } from "@optmove/design-system";
import { useState } from "react";
import { GroupBoxFieldset } from "../../components/GroupBoxFieldset/GroupBoxFieldset";
import { FTLayout } from "../../shared/layouts/FTLayout";

interface IFTPProps {}

const TabPanel = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="z-50 col-start-1 row-span-12 row-start-1 border-r border-gray-200 bg-white shadow-xl">
      <div className="flex items-center justify-between border-b p-4">
        <h2 className="text-lg font-semibold">Painel</h2>
        <button onClick={onClose}>Fechar</button>
      </div>
      <div className="p-4">
        <p>Conteúdo do tab panel aqui</p>
      </div>
    </div>
  );
};
const FTP = (props: IFTPProps) => {
  const {} = props;
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  return (
    <>
      <FTLayout.Root>
        {isPanelOpen && <TabPanel onClose={() => setIsPanelOpen(false)} />}
        <FTLayout.Header className="grid grid-cols-[auto_auto_auto__1fr_auto_auto] grid-rows-1 items-center gap-4 px-2 pb-2">
          <GroupBoxFieldset.Root className="flex min-h-20 items-start justify-start gap-2 p-2">
            <GroupBoxFieldset.Legend>Filtros</GroupBoxFieldset.Legend>
            <Input type="datetime-local" />
            <Button variant="outlined" className="h-6 border-none p-0">
              <OptMoveIcon name="FTPRefresh" height={24} width={24} />
            </Button>
            <Select label="Pátio destino">
              <option selected value={null}>
                Mesa de programação
              </option>
            </Select>
          </GroupBoxFieldset.Root>
          <GroupBoxFieldset.Root className="flex min-h-20 items-start justify-start gap-2 p-2">
            <GroupBoxFieldset.Legend>Busca</GroupBoxFieldset.Legend>
            <Select label="Pátio destino" className="w-[100px]">
              <option selected value={null}>
                Prefixo / Tabela
              </option>
            </Select>
            <Button variant="outlined" className="h-6 border-none p-0">
              <OptMoveIcon name="FTPSearchEyeIcon" height={24} width={24} />
            </Button>
            <Button variant="outlined" className="h-6 border-none p-0">
              <OptMoveIcon name="FTPBinocularsIcon" height={24} width={24} />
            </Button>
            <Button variant="outlined" className="h-6 border-none p-0">
              <OptMoveIcon name="FTPFormPageTerminalIcon" height={24} width={24} />
            </Button>
          </GroupBoxFieldset.Root>
          <GroupBoxFieldset.Root className="flex min-h-20 items-start justify-start gap-2 p-2">
            <GroupBoxFieldset.Legend>Controles</GroupBoxFieldset.Legend>
            <Button variant="outlined" className="h-6 border-none p-0">
              <OptMoveIcon name="FTPBarrierYellowIcon" height={24} width={24} />
            </Button>
            <Button variant="outlined" className="h-6 border-none p-0">
              <OptMoveIcon name="FTPEoCircleGreenLetterP" height={24} width={24} />
            </Button>
            <Button variant="outlined" className="h-6 border-none p-0">
              <OptMoveIcon name="FTPExcel" height={24} width={24} />
            </Button>
            <Button variant="outlined" className="h-6 border-none p-0">
              <OptMoveIcon name="FTPEoCircleMinus" height={24} width={24} />
            </Button>
            <Button variant="outlined" className="h-6 border-none p-0">
              <OptMoveIcon name="FTPRefresh" height={24} width={24} />
            </Button>
            <Button variant="outlined" className="h-6 border-none p-0">
              <OptMoveIcon name="FTPSaveDisk" height={24} width={24} />
            </Button>
            <Button variant="outlined" className="h-6 border-none p-0">
              <OptMoveIcon name="FTPHandGivingBeauty" height={24} width={24} />
            </Button>
            <Button variant="outlined" className="h-6 border-none p-0">
              <OptMoveIcon name="FTPGraphProgress" height={24} width={24} />
            </Button>
            <Button variant="outlined" className="h-6 border-none p-0">
              <OptMoveIcon name="FTPClosedLockIcon" height={24} width={24} color="red" />
            </Button>
          </GroupBoxFieldset.Root>
          <GroupBoxFieldset.Root className="col-start-10 min-h-20 items-center justify-start p-2">
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
          <GroupBoxFieldset.Root className="col-start-11 col-end-12 h-full min-h-20 items-center justify-start">
            <GroupBoxFieldset.Legend>Coordenadas gráfico</GroupBoxFieldset.Legend>
            SB: Fora do painel
          </GroupBoxFieldset.Root>
        </FTLayout.Header>
        <FTLayout.Content>
          <div className="grid w-full grid-cols-12 grid-rows-[32px] bg-yellow-200">
            <div className="z-10 col-span-12 col-start-1 row-start-1 flex items-center justify-center">
              <input type="checkbox" className="w-[20px]" />
              <Text.Label variant="1"> Programar somente este painel</Text.Label>
            </div>
            <Text.Label
              variant="1"
              className="z-20 col-span-12 col-start-1 row-start-1 flex items-center justify-center font-bold text-blue-primary"
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
        <FTLayout.Footer className="flex items-center justify-center">Footer</FTLayout.Footer>
      </FTLayout.Root>
    </>
  );
};

export { FTP };
