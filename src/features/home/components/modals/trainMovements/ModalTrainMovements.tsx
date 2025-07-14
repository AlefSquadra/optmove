import type { TrainMovementsElementEventDataType } from "@features/home/components/charts/GHTChart/provider/GhtChartProvider.types";
import { GridEquipage } from "@features/home/components/modals/trainMovements/GridEquipage";
import GridTrainMovements from "@features/home/components/modals/trainMovements/GridTrainMovements";
import { TrainSheet } from "@features/home/components/modals/trainMovements/trainSheet/TrainSheet";
import { OptButton, type OnSelectionChangeData } from "@shared/components/fluentui";
import { OptTabList } from "@shared/components/optTabList";
import { WindowModal } from "@shared/components/windowModal/WindowModal";
import type { IModalData } from "@shared/types/IModalData.type";
import { useState } from "react";

interface IModalTrainMovementsProps {
  onSelectedPlans?: (data: OnSelectionChangeData) => void;
  openTrainMovements: IModalData<TrainMovementsElementEventDataType>;
  setOpenTrainMovements: React.Dispatch<React.SetStateAction<IModalData<TrainMovementsElementEventDataType>>>;
}

const ModalTrainMovements = (props: IModalTrainMovementsProps) => {
  const { onSelectedPlans, openTrainMovements, setOpenTrainMovements } = props;
  const [selection] = useState<OnSelectionChangeData>({} as OnSelectionChangeData);

  const handleCloseModal = () => {
    onSelectedPlans?.(selection);
    setOpenTrainMovements({ isOpen: false });
  };

  return (
    <>
      <WindowModal
        title={`Movimentos do trem: ${openTrainMovements?.data?.data.prefixo}`}
        initialWidth={"55%"}
        initialHeight={"80%"}
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
              <GridTrainMovements trainMovements={openTrainMovements.data?.data.movimentos} />
            </OptTabList.Element>
            <OptTabList.Element value="equipment">
              <GridEquipage />
            </OptTabList.Element>
            <OptTabList.Element value="record" className="px-4">
              <TrainSheet tremInfo={openTrainMovements.data?.data} />
            </OptTabList.Element>
          </OptTabList>
        </WindowModal.Body>

        <WindowModal.Footer>
          <div className="flex justify-end gap-2">
            <OptButton>Cancelar</OptButton>
            <OptButton appearance="primary" onClick={handleCloseModal}>
              Salvar
            </OptButton>
          </div>
        </WindowModal.Footer>
      </WindowModal>
    </>
  );
};

export { ModalTrainMovements };
