import type { TrainData } from "@features/home/components/charts/GHTChartD3/GHTChartD3";
import { GridEquipage } from "@features/home/components/modals/trainMovements/GridEquipage";
import { MantineProvider } from "@mantine/core";
import { OptDivider, OptText } from "@shared/components/fluentui";
import { OptTabList } from "@shared/components/optTabList";
import { TransferList } from "@shared/components/transferList/TransferList";

interface TrainSheetProps {
  tremInfo?: Exclude<TrainData, "movimentos">;
}

const TrainSheet = (props: TrainSheetProps) => {
  const { tremInfo } = props;

  return (
    <>
      <OptTabList
        items={[
          { id: "1", value: "trainSheet", label: "Ficha" },
          { id: "2", value: "trainSheetEquipageComposition", label: "Ficha - Equipagens/Composições" },
        ]}
        className="h-full"
      >
        <OptTabList.Element value="trainSheet" className="grid h-full grid-cols-1 grid-rows-[auto_auto_1fr] px-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="flex gap-2">
              <OptText>Prefixo: </OptText>
              <OptText weight="bold">{tremInfo?.prefixo} </OptText>
            </div>
            <div className="flex gap-2">
              <OptText>Origem: </OptText>
              <OptText weight="bold">{tremInfo?.origem} </OptText>
            </div>
            <div className="flex gap-2">
              <OptText>Previsão Saida: </OptText>
              <OptText weight="bold">{tremInfo?.previsaoSaida} </OptText>
            </div>
            <div className="flex gap-2">
              <OptText>Carga geral: </OptText>
              <OptText weight="bold">Não definida </OptText>
            </div>
            <div className="flex gap-2">
              <OptText>Destino Plano: </OptText>
              <OptText weight="bold">{tremInfo?.destino} </OptText>
            </div>
            <div className="flex gap-2">
              <OptText>Destino trem: </OptText>
              <OptText weight="bold">{tremInfo?.destino} </OptText>
            </div>
            <div className="flex gap-2">
              <OptText>Comprimento: </OptText>
              <OptText weight="bold">{tremInfo?.comprimentoKm} </OptText>
            </div>
            <div className="flex gap-2">
              <OptText>Peso: </OptText>
              <OptText weight="bold">-</OptText>
            </div>
            <div className="flex gap-2">
              <OptText>VMA: </OptText>
              <OptText weight="bold">-</OptText>
            </div>
            <div className="flex gap-2">
              <OptText>LXA: </OptText>
              <OptText weight="bold">- </OptText>
            </div>
            <div className="flex gap-2">
              <OptText>Necessidade porto: </OptText>
              <OptText weight="bold">- </OptText>
            </div>
          </div>

          <OptDivider className="mt-4" />

          <OptTabList
            items={[
              { id: "1", value: "equipage", label: "Equipagem" },
              { id: "2", value: "productsTerminals", label: "Produtos/terminais" },
            ]}
            className="h-full"
          >
            <OptTabList.Element value="equipage" className="px-4">
              <MantineProvider>
                <GridEquipage />
              </MantineProvider>
            </OptTabList.Element>
            <OptTabList.Element value="productsTerminals" className="h-full overflow-auto">
              <TransferList
                className="h-[270px]"
                rightItems={[{ id: "1", label: "SOJA", value: "A1" }]}
                leftItems={[
                  { id: "1", label: "CLI", value: "A1" },
                  { id: "2", label: "TES (TERM, EXP, SANTO...", value: "A2" },
                ]}
                onChange={(left, right) => {
                  console.log("Disponíveis:", left);
                  console.log("Selecionados:", right);
                }}
                disabled={true}
                showCounts={false}
                leftTitle=""
                showFilters={false}
                showSearch={false}
                showHeader={false}
                showButtonsControl={false}
              />

              {/* <ExampleUsage /> */}
            </OptTabList.Element>
          </OptTabList>
        </OptTabList.Element>
      </OptTabList>
    </>
  );
};

export { TrainSheet };
