import { useApplicationContext } from "@app/providers/ApplicationProvider/useApplication";
import {
  DataGridSelectOfficialization,
  type ISelectOfficializationDataGrid,
} from "@features/home/components/modals/selectOfficialization/DataGridSelectOfficialization";
import { SelectOfficializationForm } from "@features/home/components/modals/selectOfficialization/SelectOfficializationForm";
import { SelectOfficializationService } from "@features/home/services/SelectOfficializationService";
import { Button } from "@fluentui/react-components";
import { WindowModal } from "@shared/components/windowModal/WindowModal";
import type { IOfficializationDataFilter, IOfficializationFormData } from "@shared/types/Officialization.type";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface IModalSelectOfficializationProps {
  onSelectedPlans: (data: ISelectOfficializationDataGrid[]) => void;
  openSelectOfficialization: boolean;
  setOpenSelectOfficialization: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalSelectOfficialization = (props: IModalSelectOfficializationProps) => {
  const { onSelectedPlans, openSelectOfficialization, setOpenSelectOfficialization } = props;
  const [selection, setSelection] = useState<ISelectOfficializationDataGrid[]>([] as ISelectOfficializationDataGrid[]);
  const [filters, setFilters] = useState<IOfficializationDataFilter | undefined>(undefined);
  const [timeLine, setTimeLine] = useState<string | undefined>(undefined);
  const { setSelectedOfficialization } = useApplicationContext();

  const methods = useForm<IOfficializationFormData>({
    defaultValues: {
      dataInicial: new Date(),
      dataFinal: new Date(),
      tipo: "TODOS",
      timelineDatetime: "",
      prefix: "",
    },
  });

  const officializationQuery = useQuery({
    queryKey: ["officialization", filters],
    queryFn: () => SelectOfficializationService.getPlans(filters!),
    enabled: !!filters,
  });

  const handleCloseModal = () => {
    console.log(selection);
    if (selection?.length === 0) {
      alert("Selecione uma oficialização");
      return;
    }
    onSelectedPlans(selection);
    setSelectedOfficialization({
      listOfficialization: selection,
      officializationForm: {
        ...filters,
        timelineDatetime: methods.getValues("timelineDatetime"),
      } as IOfficializationDataFilter,
    });

    setOpenSelectOfficialization(false);
  };

  return (
    <>
      <FormProvider {...methods}>
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
              timeLine={timeLine}
            />
          </WindowModal.Header>

          <WindowModal.Body>
            <DataGridSelectOfficialization
              data={officializationQuery?.data ? officializationQuery?.data : []}
              handleSelectionChange={(data) => {
                setSelection(data);
              }}
              isLoading={officializationQuery.isLoading}
              handleTimelineClick={(text: string) => setTimeLine(text)}
            />
          </WindowModal.Body>

          <WindowModal.Footer>
            <div className="flex justify-end gap-2">
              <Button>Cancelar</Button>
              <Button appearance="primary" onClick={handleCloseModal}>
                Ok
              </Button>
            </div>
          </WindowModal.Footer>
        </WindowModal>
      </FormProvider>
    </>
  );
};

export { ModalSelectOfficialization };
