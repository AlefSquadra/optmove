import { Button, Dropdown, GHTChart, GHTChartMock, Input, OptMoveIcon, Select, Text } from "@optmove/design-system";
import { GroupBoxFieldset } from "../../../../shared/components/GroupBoxFieldset/GroupBoxFieldset";
import { FTLayout, useFTLayout } from "../../../../shared/layouts/FTLayout";

interface IFTPProps {}

const FTPLayout = (props: IFTPProps) => {
  const {} = props;
  const { setIsOpenPanelTabBarLeft } = useFTLayout();

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
            <div className="absolute left-full top-0 h-full w-80 bg-red-100 p-2">teste</div>
          </div>
        </FTLayout.TabPanelLeft>
        <FTLayout.Header className="z-20 grid grid-cols-[auto_auto_auto__1fr_auto_auto] grid-rows-1 items-center gap-4 px-2 pb-2">
          {/** Filtros */}
          <GroupBoxFieldset.Root className="flex min-h-20 items-center justify-start gap-2 p-2">
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
          {/** Fim Filtros */}
          {/** Busca */}
          <GroupBoxFieldset.Root className="flex min-h-20 items-center justify-start gap-2 p-2">
            <GroupBoxFieldset.Legend>Busca</GroupBoxFieldset.Legend>
            <Select label="Pátio destino">
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
          {/** Fim Busca */}
          {/** Controles */}
          <GroupBoxFieldset.Root className="flex min-h-20 items-center justify-start gap-4 p-2">
            <GroupBoxFieldset.Legend>Controles</GroupBoxFieldset.Legend>

            <Dropdown.Root placement="bottom">
              <Dropdown.Trigger>
                <OptMoveIcon name="FTPEoCircleGreenLetterP" height={24} width={24} />
              </Dropdown.Trigger>

              <Dropdown.Content>
                <Dropdown.Item onClick={() => setIsOpenPanelTabBarLeft((prev) => !prev)}>
                  Programar circulação (Ctrl + P)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setIsOpenPanelTabBarLeft((prev) => !prev)}>
                  Priorizar circulação
                </Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Root>
            <Button variant="outlined" className="h-6 border-none p-0">
              <OptMoveIcon name="FTPBarrierYellowIcon" height={24} width={24} />
            </Button>
            <Dropdown.Root placement="bottom">
              <Dropdown.Trigger>
                <OptMoveIcon name="FTPEoCircleMinus" height={24} width={24} />
              </Dropdown.Trigger>
              <Dropdown.Content>
                <Dropdown.Item onClick={() => setIsOpenPanelTabBarLeft((prev) => !prev)}>
                  Criar interdição
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setIsOpenPanelTabBarLeft((prev) => !prev)}>Criar retenção</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Root>
            <Button variant="outlined" className="h-6 border-none p-0">
              <OptMoveIcon name="FTPGraphProgress" height={24} width={24} />
            </Button>
            <Button variant="outlined" className="h-6 border-none p-0">
              <OptMoveIcon name="FTPSaveDisk" height={24} width={24} />
            </Button>
            <Button variant="outlined" className="h-6 border-none p-0">
              <OptMoveIcon name="FTPClosedLockIcon" height={24} width={24} color="red" />
            </Button>
            <Button variant="outlined" className="h-6 border-none p-0">
              <OptMoveIcon name="FTPHandGivingBeauty" height={24} width={24} />
            </Button>
            <Button variant="outlined" className="h-6 border-none p-0">
              <OptMoveIcon name="FTPExcel" height={24} width={24} />
            </Button>
            <Dropdown.Root placement="bottom">
              <Dropdown.Trigger>
                <img src={"/optmove-icons-svg/tile025.svg"} height={24} width={24} />
              </Dropdown.Trigger>

              <Dropdown.Content>
                <Dropdown.Item onClick={() => setIsOpenPanelTabBarLeft((prev) => !prev)}>
                  Monitoramento de planos
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setIsOpenPanelTabBarLeft((prev) => !prev)}>
                  Atividades alteradas
                </Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Root>
          </GroupBoxFieldset.Root>
          {/** Fim Controles */}
          {/** Oficialização */}
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
          {/** Fim Oficialização */}
          {/** Coordenadas gráfico */}
          <GroupBoxFieldset.Root className="col-start-11 col-end-12 h-full min-h-20 items-center justify-start">
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
            <div className="col-start-1 row-start-1 flex w-auto items-center justify-center">
              <Text.Label variant="1" className="flex cursor-pointer items-center gap-1 whitespace-nowrap">
                <input type="checkbox" className="w-[20px]" />
                Programar somente este painel
              </Text.Label>
            </div>
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
