import type { IDataContextMenu } from "@features/home/components/charts/elements/GHTChartContextMenu/contextMenu.types";
import Example from "@features/home/components/modals/trainMovements/GridTrainMovements";
import { Button, type OnSelectionChangeData } from "@fluentui/react-components";
import { MantineProvider } from "@mantine/core";
import { WindowModal } from "@shared/components/windowModal/WindowModal";
import type { IModalData } from "@shared/types/IModalData.type";
import { useState } from "react";

interface IModalTrainMovementsProps {
  onSelectedPlans?: (data: OnSelectionChangeData) => void;
  openTrainMovements: IModalData<IDataContextMenu>;
  setOpenTrainMovements: React.Dispatch<React.SetStateAction<IModalData<IDataContextMenu>>>;
}

import { GridEquipage } from "@features/home/components/modals/trainMovements/GridEquipage";
import { TrainSheet } from "@features/home/components/modals/trainMovements/trainSheet/TrainSheet";
import { createTheme } from "@mantine/core";
import { OptTabList } from "@shared/components/optTabList/OptTabList";

const theme = createTheme({
  fontFamily:
    "'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
  fontFamilyMonospace: "Courier New, monospace",
});

const ModalTrainMovements = (props: IModalTrainMovementsProps) => {
  const { onSelectedPlans, openTrainMovements, setOpenTrainMovements } = props;
  const [selection] = useState<OnSelectionChangeData>({} as OnSelectionChangeData);

  const handleCloseModal = () => {
    if (!selection?.selectedItems?.size || selection?.selectedItems?.size === 0) {
      alert("Selecione uma oficialização");
      return;
    }

    onSelectedPlans?.(selection);
    setOpenTrainMovements({ isOpen: false });
  };

  return (
    <>
      <WindowModal
        title={`Movimentos do trem: ${openTrainMovements?.data?.name}`}
        initialWidth={"55%"}
        open={openTrainMovements.isOpen}
        onClose={() => setOpenTrainMovements({ isOpen: false })}
      >
        <WindowModal.Body>
          <OptTabList
            items={[
              { id: "1", value: "movements", label: "Movimentos" },
              { id: "2", value: "equipment", label: "Equipagem" },
              { id: "3", value: "record", label: "Ficha" },
            ]}
            className="h-full"
          >
            <OptTabList.Element value="movements">
              <MantineProvider theme={theme}>
                <Example />
              </MantineProvider>
            </OptTabList.Element>
            <OptTabList.Element value="equipment">
              <MantineProvider theme={theme}>
                <GridEquipage />
              </MantineProvider>
            </OptTabList.Element>
            <OptTabList.Element value="record" className="px-4">
              <TrainSheet />
            </OptTabList.Element>
          </OptTabList>
        </WindowModal.Body>

        <WindowModal.Footer>
          <div className="flex justify-end gap-2">
            <Button>Cancelar</Button>
            <Button appearance="primary" onClick={handleCloseModal}>
              Salvar
            </Button>
          </div>
        </WindowModal.Footer>
      </WindowModal>
    </>
  );
};

export { ModalTrainMovements };
