import { GridEquipage } from "@features/home/components/modals/trainMovements/GridEquipage";
import { Divider, Text } from "@fluentui/react-components";
import { MantineProvider } from "@mantine/core";
import { OptTabList } from "@shared/components/optTabList/OptTabList";
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
              <Text>Prefixo: </Text>
              <Text weight="bold">{data.prefix} </Text>
            </div>
            <div className="flex gap-2">
              <Text>Origem: </Text>
              <Text weight="bold">{data.origin} </Text>
            </div>
            <div className="flex gap-2">
              <Text>Previsão Saida: </Text>
              <Text weight="bold">{data.previsionOut} </Text>
            </div>
            <div className="flex gap-2">
              <Text>Carga geral: </Text>
              <Text weight="bold">Não definida </Text>
            </div>

            <div className="flex gap-2">
              <Text>Destino Plano: </Text>
              <Text weight="bold">{data.destinePlan} </Text>
            </div>
            <div className="flex gap-2">
              <Text>Destino trem: </Text>
              <Text weight="bold">{data.destineTrain} </Text>
            </div>

            <div className="flex gap-2">
              <Text>Comprimento: </Text>
              <Text weight="bold">{data.length} </Text>
            </div>

            <div className="flex gap-2">
              <Text>Peso: </Text>
              <Text weight="bold">{data.weight} </Text>
            </div>

            <div className="flex gap-2">
              <Text>VMA: </Text>
              <Text weight="bold">{data.VMA} </Text>
            </div>

            <div className="flex gap-2">
              <Text>LXA: </Text>
              <Text weight="bold">{data.LXA} </Text>
            </div>

            <div className="flex gap-2">
              <Text>Necessidade porto: </Text>
              <Text weight="bold">{data.port} </Text>
            </div>
          </div>

          <Divider className="mt-4" />

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
