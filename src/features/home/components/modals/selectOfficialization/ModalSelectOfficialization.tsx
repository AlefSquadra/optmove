import {
  DataGridSelectOfficialization,
  type ISelectOfficializationDataGrid,
} from "@features/home/components/modals/selectOfficialization/DataGridSelectOfficialization";
import { SelectOfficializationForm } from "@features/home/components/modals/selectOfficialization/SelectOfficializationForm";
import { SelectOfficializationService } from "@features/home/services/SelectOfficializationService";
import { Button } from "@fluentui/react-components";
import { WindowModal } from "@shared/components/windowModal/WindowModal";
import type { IOfficializationDataFilter } from "@shared/types/Officialization.type";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface IModalSelectOfficializationProps {
  onSelectedPlans: (data: ISelectOfficializationDataGrid[]) => void;
  openSelectOfficialization: boolean;
  setOpenSelectOfficialization: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalSelectOfficialization = (props: IModalSelectOfficializationProps) => {
  const { onSelectedPlans } = props;
  const [openSelectOfficialization, setOpenSelectOfficialization] = useState<boolean>(true);
  const [selection, setSelection] = useState<ISelectOfficializationDataGrid[]>([] as ISelectOfficializationDataGrid[]);
  const [filters, setFilters] = useState<IOfficializationDataFilter | undefined>(undefined);

  const officializationQuery = useQuery({
    queryKey: ["officialization", filters], // <- chave dinâmica baseada nos filtros
    queryFn: () => SelectOfficializationService.getPlans(filters!),
    enabled: !!filters, // só busca se houver filtros definidos
  });

  const handleCloseModal = () => {
    if (selection?.length === 0) {
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
              setFilters(data);
            }}
          />
        </WindowModal.Header>

        <WindowModal.Body>
          <DataGridSelectOfficialization
            data={officializationQuery?.data ? officializationQuery?.data : []}
            handleSelectionChange={(data) => {
              setSelection(data);
            }}
            isLoading={officializationQuery.isLoading}
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
