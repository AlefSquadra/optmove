import type { IFormParamsSystemZod } from "@features/home/components/modals/systemParams/SystemParamsZod";
import { Checkbox, Field, Input } from "@fluentui/react-components";
import { TransferListField } from "@shared/components/forms/TransferListField";
import type { TransferListItem } from "@shared/components/transferList/TransferList.type";
import { Controller, useFormContext } from "react-hook-form";

const leftItemsMock: TransferListItem[] = [
  { id: 1, label: "Item 1", value: 1 },
  { id: 2, label: "Item 2", value: 2 },
  { id: 3, label: "Item 3", value: 3 },
];

const rightItemsMock: TransferListItem[] = [{ id: 4, label: "Item 4", value: 4 }];

const TabQueueManagement = () => {
  const { control } = useFormContext<IFormParamsSystemZod>();
  return (
    <>
      <Controller
        name="simulation.enableOptmoveSpeedCalculation"
        control={control}
        render={({ field }) => (
          <Checkbox
            checked={field.value}
            onChange={(_, data) => field.onChange(data.checked)}
            label="Desativar a gestão de fila: Exportação"
          />
        )}
      />

      <TransferListField
        name="selectedItems"
        label="Selecione os itens"
        leftItems={leftItemsMock}
        rightItems={rightItemsMock}
        showButtonsControl={false}
        showSearch={false}
        showHeader
        disabled
      />

      <Controller
        name="simulation.enableOptmoveSpeedCalculation"
        control={control}
        render={({ field }) => (
          <Checkbox
            checked={field.value}
            onChange={(_, data) => field.onChange(data.checked)}
            label="Desativar a gestão de fila: Importação"
          />
        )}
      />
      <TransferListField
        name="selectedItems"
        label="Selecione os itens"
        leftItems={leftItemsMock}
        rightItems={rightItemsMock}
        showButtonsControl={false}
        showSearch={false}
        showHeader
        disabled
      />

      <Field>
        <div className="flex items-center gap-2">
          <span className="min-w-[240px]">Cadenciamento de chegada de trens ZPG</span>
          <Input type="number" placeholder="0" className="my-2 w-[80px]" aria-label="inline" />
          <span>minutos</span>
        </div>
      </Field>
    </>
  );
};

export { TabQueueManagement };
