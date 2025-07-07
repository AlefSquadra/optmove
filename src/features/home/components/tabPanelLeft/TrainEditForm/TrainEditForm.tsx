import { useFTLayout } from "@features/home/providers/HomeFTLayoutProvider/useFtLayout";
import { Dropdown, Field, Input, Option, Radio, RadioGroup } from "@fluentui/react-components";
import { TabWindowHeader } from "@shared/components/tabWindowHeader/tabWindowHeader";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

export interface TrainEditFormData {
  prefix: string;
  tipo: string;
  table: string;
  length: string;
  groupVPM: string;
  lotation: "loaded" | "empty" | ""; // Melhor assim!
  vma: string;
  segmentCut: string;
  segmentEnd: string;
}

const typeOptions = [
  { key: "OFICIALIZADO", text: "OFICIALIZADO" },
  { key: "PUBLICADO", text: "PUBLICADO" },
  { key: "TODOS", text: "TODOS" },
];

// Exemplo de dados iniciais para demonstração, retire e use os dados do seu contexto/provider
const initialTrainData: TrainEditFormData = {
  prefix: "",
  tipo: "",
  table: "",
  length: "",
  groupVPM: "",
  lotation: "",
  vma: "",
  segmentCut: "",
  segmentEnd: "",
};

const TrainEditForm = () => {
  const { selectedPanelTabBarLeft, setSelectedPanelTabBarLeft } = useFTLayout();

  const {
    control,
    reset,
    formState: { errors },
  } = useForm<TrainEditFormData>({
    defaultValues: initialTrainData,
  });

  useEffect(() => {
    if (selectedPanelTabBarLeft.data && selectedPanelTabBarLeft.isOpen) {
      reset(selectedPanelTabBarLeft.data);
    }
  }, [selectedPanelTabBarLeft?.isOpen, reset]);

  return (
    <div className="flex h-full w-[300px] flex-col">
      <TabWindowHeader
        title="Editando o trem"
        onClose={() =>
          setSelectedPanelTabBarLeft((prev) => ({
            ...prev,
            openTabName: "",
          }))
        }
      />
      <div className="flex h-full w-auto flex-col gap-4 p-4">
        <form
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            // Adicione aqui lógica futura se for necessário
          }}
        >
          <Controller
            name="prefix"
            control={control}
            render={({ field }) => (
              <Field label="Prefixo" validationMessage={errors.prefix?.message}>
                <Input readOnly {...field} placeholder="Digite o prefixo" />
              </Field>
            )}
          />

          <Controller
            name="table"
            control={control}
            render={({ field }) => (
              <Field label="Tabela" validationMessage={errors.table?.message} className="min-w-38">
                <Dropdown
                  placeholder="Selecione"
                  value={field.value}
                  // selectedKey={field.value}
                  onOptionSelect={(_, data) => {
                    if (data.optionValue) {
                      field.onChange(data.optionValue);
                    }
                  }}
                  // Remova disabled se quiser deixar editável
                  disabled
                >
                  {typeOptions.map((option) => (
                    <Option key={option.key} value={option.key}>
                      {option.text}
                    </Option>
                  ))}
                </Dropdown>
              </Field>
            )}
          />

          <Controller
            name="tipo"
            control={control}
            render={({ field }) => (
              <Field label="Tipo" validationMessage={errors.tipo?.message}>
                <Input readOnly {...field} placeholder="Tipo do trem" />
              </Field>
            )}
          />

          <Controller
            name="groupVPM"
            control={control}
            render={({ field }) => (
              <Field label="Grupo VPM" validationMessage={errors.groupVPM?.message}>
                <Input readOnly {...field} placeholder="Grupo VPM" />
              </Field>
            )}
          />

          <Controller
            name="lotation"
            control={control}
            rules={{ required: "Selecione uma opção" }}
            render={({ field }) => (
              <Field label="Lotação" validationMessage={errors.lotation?.message}>
                <RadioGroup {...field} value={field.value} onChange={(_, data) => field.onChange(data.value)}>
                  <Radio value="loaded" label="Carregado" />
                  <Radio value="empty" label="Vazio" />
                </RadioGroup>
              </Field>
            )}
          />

          <Controller
            name="length"
            control={control}
            render={({ field }) => (
              <Field label="Comprimento" validationMessage={errors.length?.message}>
                <Input readOnly {...field} placeholder="Comprimento" />
              </Field>
            )}
          />

          <Controller
            name="vma"
            control={control}
            render={({ field }) => (
              <Field label="VMA" validationMessage={errors.vma?.message}>
                <Input readOnly {...field} placeholder="VMA" />
              </Field>
            )}
          />

          <Controller
            name="segmentCut"
            control={control}
            render={({ field }) => (
              <Field label="Seg. Corte" validationMessage={errors.segmentCut?.message}>
                <Input readOnly {...field} placeholder="ICZ" />
              </Field>
            )}
          />

          <Controller
            name="segmentEnd"
            control={control}
            render={({ field }) => (
              <Field label="Seg. Fim" validationMessage={errors.segmentEnd?.message}>
                <Input readOnly {...field} placeholder="ZPG" />
              </Field>
            )}
          />
        </form>
      </div>
    </div>
  );
};

export { TrainEditForm };
