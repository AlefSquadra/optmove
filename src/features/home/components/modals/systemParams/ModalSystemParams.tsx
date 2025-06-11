import {
  FormSystemParamsZodSchema,
  type IFormParamsSystemZod,
} from "@features/home/components/modals/systemParams/SystemParamsZod";
import { TabQueueManagement } from "@features/home/components/modals/systemParams/TabQueueManagement";
import { TabSimulation } from "@features/home/components/modals/systemParams/TabSimulation";
import { Button } from "@fluentui/react-components";
import { zodResolver } from "@hookform/resolvers/zod";
import { OptTabList } from "@shared/components/optTabList/OptTabList";
import { WindowModal } from "@shared/components/windowModal/WindowModal";
import type { IModalData } from "@shared/types/IModalData.type";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

interface IModalSystemParamsProps {
  openSystemParams: IModalData<boolean>;
  setOpenSystemParams: React.Dispatch<React.SetStateAction<IModalData<boolean>>>;
}

const ModalSystemParams = (props: IModalSystemParamsProps) => {
  const { openSystemParams, setOpenSystemParams } = props;

  const methods = useForm<IFormParamsSystemZod>({
    resolver: zodResolver(FormSystemParamsZodSchema),
    defaultValues: {
      simulation: {
        enableOptmoveSpeedCalculation: false,
        basePlan: "",
        comparisonPlan: "",
        enableAutomaticOfficialization: false,
        enablePartialPlans: false,
        intervalBetweenAutomaticPlansInMinutes: 0,
        maximumRetryTimeInMinutes: 0,
        minimumResolutionForPartialPlanInMinutes: 0,
      },
    },
  });

  const handleCloseModal = () => setOpenSystemParams({ isOpen: true });

  return (
    <FormProvider {...methods}>
      <form action="submit" onSubmit={methods.handleSubmit(handleCloseModal)}>
        <WindowModal
          title="Optmove GHP - Parâmetros do Sistema"
          initialWidth={"35%"}
          initialHeight={"70%"}
          open={openSystemParams.isOpen}
          onClose={() => setOpenSystemParams({ isOpen: false })}
        >
          {/* <WindowModal.Header>
          <></>
        </WindowModal.Header> */}

          <WindowModal.Body>
            <OptTabList
              items={[
                { id: "1", value: "simulation", label: "Simulação" },
                { id: "2", value: "queueManagement", label: "Gestão de fila" },
              ]}
              defaultValue={"simulation"}
              className="h-full"
            >
              <OptTabList.Element value="simulation">
                <TabSimulation />
              </OptTabList.Element>
              <OptTabList.Element value="queueManagement">
                <TabQueueManagement />
              </OptTabList.Element>
            </OptTabList>
          </WindowModal.Body>

          <WindowModal.Footer>
            <div className="flex justify-end gap-2">
              <Button onClick={handleCloseModal}>Cancelar</Button>
              <Button appearance="primary" type="submit">
                Ok
              </Button>
            </div>
          </WindowModal.Footer>
        </WindowModal>
      </form>
    </FormProvider>
  );
};

export { ModalSystemParams };
