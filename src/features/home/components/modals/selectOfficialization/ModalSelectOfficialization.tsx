import { DataGridSelectOfficialization } from "@features/home/components/modals/selectOfficialization/DataGridSelectOfficialization";
import { SelectOfficializationForm } from "@features/home/components/modals/selectOfficialization/SelectOfficializationForm";
import { SelectOfficializationService } from "@features/home/services/SelectOfficializationService";
import { Button, type OnSelectionChangeData } from "@fluentui/react-components";
import { WindowModal } from "@shared/components/windowModal/WindowModal";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface IModalSelectOfficializationProps {
  onSelectedPlans: (data: OnSelectionChangeData) => void;
  openSelectOfficialization: boolean;
  setOpenSelectOfficialization: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalSelectOfficialization = (props: IModalSelectOfficializationProps) => {
  const { onSelectedPlans } = props;
  const [openSelectOfficialization, setOpenSelectOfficialization] = useState<boolean>(true);
  const [selection, setSelection] = useState<OnSelectionChangeData>({} as OnSelectionChangeData);

  const officializationQuery = useQuery({
    queryKey: ["officialization"],
    queryFn: () => {
      return SelectOfficializationService.getPlans();
    },
    enabled: false,
  });

  const handleCloseModal = () => {
    if (!selection?.selectedItems?.size || selection?.selectedItems?.size === 0) {
      alert("Selecione uma oficialização");
      return;
    }

    onSelectedPlans(selection);
    setOpenSelectOfficialization(false);
  };

  return (
    <>
      <WindowModal
        title="Selecionar oficialização"
        initialWidth={"55%"}
        initialHeight={"70%"}
        open={openSelectOfficialization}
        onClose={() => setOpenSelectOfficialization(false)}
      >
        <WindowModal.Header>
          <SelectOfficializationForm
            onSearch={(data) => {
              console.log(data);
              officializationQuery.refetch();
            }}
          />
        </WindowModal.Header>

        <WindowModal.Body>
          <DataGridSelectOfficialization
            data={officializationQuery?.data ? officializationQuery?.data : []}
            handleSelectionChange={(_, data) => {
              setSelection(data);
            }}
          />
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

export { ModalSelectOfficialization };
