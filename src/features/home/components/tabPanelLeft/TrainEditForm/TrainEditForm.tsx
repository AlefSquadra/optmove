import { useFTLayout } from "@features/home/providers/HomeFTLayoutProvider/useFtLayout";
import { OptDropdown, OptField, OptInput, OptOption, OptRadio, OptRadioGroup } from "@shared/components/fluentui";
import { TabWindowHeader } from "@shared/components/tabWindowHeader/tabWindowHeader";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

export interface TrainEditFormData {
  prefix: string;
  tipo: string;
  table: string;
  length: string;
  groupVPM: string;
  lotation: "loaded" | "empty" | "";
  vma: string;
  segmentCut: string;
  segmentEnd: string;
}

const typeOptOptions = [
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
              <OptField label="Prefixo" validationMessage={errors.prefix?.message}>
                <OptInput readOnly {...field} placeholder="Digite o prefixo" />
              </OptField>
            )}
          />

          <Controller
            name="table"
            control={control}
            render={({ field }) => (
              <OptField label="Tabela" validationMessage={errors.table?.message} className="min-w-38">
                <OptDropdown
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
                  {typeOptOptions.map((option) => (
                    <OptOption key={option.key} value={option.key}>
                      {option.text}
                    </OptOption>
                  ))}
                </OptDropdown>
              </OptField>
            )}
          />

          <Controller
            name="tipo"
            control={control}
            render={({ field }) => (
              <OptField label="Tipo" validationMessage={errors.tipo?.message}>
                <OptInput readOnly {...field} placeholder="Tipo do trem" />
              </OptField>
            )}
          />

          <Controller
            name="groupVPM"
            control={control}
            render={({ field }) => (
              <OptField label="Grupo VPM" validationMessage={errors.groupVPM?.message}>
                <OptInput readOnly {...field} placeholder="Grupo VPM" />
              </OptField>
            )}
          />

          <Controller
            name="lotation"
            control={control}
            rules={{ required: "Selecione uma opção" }}
            render={({ field }) => (
              <OptField label="Lotação" validationMessage={errors.lotation?.message}>
                <OptRadioGroup {...field} value={field.value} onChange={(_, data) => field.onChange(data.value)}>
                  <OptRadio value="loaded" label="Carregado" />
                  <OptRadio value="empty" label="Vazio" />
                </OptRadioGroup>
              </OptField>
            )}
          />

          <Controller
            name="length"
            control={control}
            render={({ field }) => (
              <OptField label="Comprimento" validationMessage={errors.length?.message}>
                <OptInput readOnly {...field} placeholder="Comprimento" />
              </OptField>
            )}
          />

          <Controller
            name="vma"
            control={control}
            render={({ field }) => (
              <OptField label="VMA" validationMessage={errors.vma?.message}>
                <OptInput readOnly {...field} placeholder="VMA" />
              </OptField>
            )}
          />

          <Controller
            name="segmentCut"
            control={control}
            render={({ field }) => (
              <OptField label="Seg. Corte" validationMessage={errors.segmentCut?.message}>
                <OptInput readOnly {...field} placeholder="ICZ" />
              </OptField>
            )}
          />

          <Controller
            name="segmentEnd"
            control={control}
            render={({ field }) => (
              <OptField label="Seg. Fim" validationMessage={errors.segmentEnd?.message}>
                <OptInput readOnly {...field} placeholder="ZPG" />
              </OptField>
            )}
          />
        </form>
      </div>
    </div>
  );
};

export { TrainEditForm };
