import { GridEquipage } from "@features/home/components/modals/trainMovements/GridEquipage";
import { OptDivider, OptText } from "@shared/components/fluentui";
import { MantineProvider } from "@mantine/core";
import { OptTabList } from "@shared/components/optTabList";
import { TransferList } from "@shared/components/transferList/TransferList";

const TrainSheet = () => {
  const data = {
    prefix: "WYU5608",
    origin: "IPG-2",
    previsionOut: "08:00",
    type: "Escoteira",
    destinePlan: "IBA",
    destineTrain: "IBA",
    length: 0.1,
    weight: 100,
    VMA: 65,
    LXA: "Não encontrado",
    port: "04/06/2025",
  };
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
              <OptText weight="bold">{data.prefix} </OptText>
            </div>
            <div className="flex gap-2">
              <OptText>Origem: </OptText>
              <OptText weight="bold">{data.origin} </OptText>
            </div>
            <div className="flex gap-2">
              <OptText>Previsão Saida: </OptText>
              <OptText weight="bold">{data.previsionOut} </OptText>
            </div>
            <div className="flex gap-2">
              <OptText>Carga geral: </OptText>
              <OptText weight="bold">Não definida </OptText>
            </div>

            <div className="flex gap-2">
              <OptText>Destino Plano: </OptText>
              <OptText weight="bold">{data.destinePlan} </OptText>
            </div>
            <div className="flex gap-2">
              <OptText>Destino trem: </OptText>
              <OptText weight="bold">{data.destineTrain} </OptText>
            </div>

            <div className="flex gap-2">
              <OptText>Comprimento: </OptText>
              <OptText weight="bold">{data.length} </OptText>
            </div>

            <div className="flex gap-2">
              <OptText>Peso: </OptText>
              <OptText weight="bold">{data.weight} </OptText>
            </div>

            <div className="flex gap-2">
              <OptText>VMA: </OptText>
              <OptText weight="bold">{data.VMA} </OptText>
            </div>

            <div className="flex gap-2">
              <OptText>LXA: </OptText>
              <OptText weight="bold">{data.LXA} </OptText>
            </div>

            <div className="flex gap-2">
              <OptText>Necessidade porto: </OptText>
              <OptText weight="bold">{data.port} </OptText>
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
