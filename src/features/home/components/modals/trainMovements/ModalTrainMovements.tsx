import { Button, type OnSelectionChangeData } from "@fluentui/react-components";
import { WindowModal } from "@shared/components/windowModal/WindowModal";
import { useState } from "react";

interface IModalTrainMovementsProps {
  onSelectedPlans?: (data: OnSelectionChangeData) => void;
  openTrainMovements: boolean;
  setOpenTrainMovements: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalTrainMovements = (props: IModalTrainMovementsProps) => {
  const { onSelectedPlans, openTrainMovements, setOpenTrainMovements } = props;
  const [selection] = useState<OnSelectionChangeData>({} as OnSelectionChangeData);

  const handleCloseModal = () => {
    if (!selection?.selectedItems?.size || selection?.selectedItems?.size === 0) {
      alert("Selecione uma oficialização");
      return;
    }

    onSelectedPlans?.(selection);
    setOpenTrainMovements(false);
  };

  return (
    <>
      <WindowModal
        title="Movimentos do trem: Trem 1"
        initialWidth={"55%"}
        initialHeight={"70%"}
        open={openTrainMovements}
        onClose={() => setOpenTrainMovements(false)}
      >
        <WindowModal.Header>
          <></>
          {/* <TrainMovementsForm
            onSearch={(data) => {
              console.log(data);
              officializationQuery.refetch();
            }}
          /> */}
        </WindowModal.Header>

        <WindowModal.Body>
          <></>
          {/* <DataGridTrainMovements
            data={officializationQuery?.data ? officializationQuery?.data : []}
            handleSelectionChange={(_, data) => {
              setSelection(data);
            }}
          /> */}
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
