import { useFTLayout } from "@features/home/providers/HomeFTLayoutProvider/useFtLayout";
import { Dropdown, Field, Input, Option, Radio, RadioGroup } from "@fluentui/react-components";
import { TabWindowHeader } from "@shared/components/tabWindowHeader/tabWindowHeader";
import { Controller, useForm } from "react-hook-form";

interface TrainEditFormData {
  prefix: string;
  tipo: string;
  table: string;
  length: string;
  groupVPM: string;
  lotation: string;
  vma: string;
  segmentCut: string;
  segmentEnd: string;
}

const typeOptions = [
  { key: "OFICIALIZADO", text: "OFICIALIZADO" },
  { key: "PUBLICADO", text: "PUBLICADO" },
  { key: "TODOS", text: "TODOS" },
];

const TrainEditForm = () => {
  const { setSelectedPanelTabBarLeft } = useFTLayout();
  const {
    control,
    formState: { errors },
  } = useForm<TrainEditFormData>({});

  return (
    <div className="flex h-full w-[300px] flex-col">
      <TabWindowHeader
        title={"Editando o trem"}
        onClose={() => {
          setSelectedPanelTabBarLeft((prev) => ({ ...prev, openTabName: "" }));
        }}
      />
      <div className="flex h-full w-auto flex-col gap-4 p-4">
        <form>
          <Controller
            name="prefix"
            control={control}
            render={({ field }) => (
              <Field label="Prefixo" validationMessage={errors.prefix?.message}>
                <Input {...field} placeholder="Digite o prefixo" />
              </Field>
            )}
          />
          <Controller
            name="table"
            control={control}
            render={({ field }) => (
              <Field label="Tabela" validationMessage={errors.tipo?.message} className="min-w-38">
                <Dropdown
                  placeholder="Selecione"
                  value={typeOptions.find((option) => option.key === field.value)?.text || ""}
                  onOptionSelect={(_, data) => {
                    if (data.optionValue) {
                      field.onChange(data.optionValue);
                    }
                  }}
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
              <Field label="Prefixo" validationMessage={errors.prefix?.message}>
                <Input {...field} placeholder="Digite o prefixo" />
              </Field>
            )}
          />

          <Controller
            name="groupVPM"
            control={control}
            render={({ field }) => (
              <Field label="Prefixo" validationMessage={errors.prefix?.message}>
                <Input {...field} placeholder="Digite o prefixo" />
              </Field>
            )}
          />

          <Controller
            name="lotation"
            control={control}
            rules={{ required: "Selecione uma opção" }}
            render={({ field }) => (
              <RadioGroup {...field} value={field.value} onChange={(_, data) => field.onChange(data.value)}>
                {[
                  { label: "Carregado", value: "loaded" },
                  { label: "Vazio", value: "empty" },
                ].map((opt) => (
                  <Radio key={opt.value} value={opt.value} label={opt.label} />
                ))}
              </RadioGroup>
            )}
          />

          <Controller
            name="length"
            control={control}
            render={({ field }) => (
              <Field label="Comprimento" validationMessage={errors.prefix?.message}>
                <Input {...field} placeholder="," disabled />
              </Field>
            )}
          />

          <Controller
            name="vma"
            control={control}
            render={({ field }) => (
              <Field label="Prefixo" validationMessage={errors.prefix?.message}>
                <Input {...field} placeholder="__" disabled />
              </Field>
            )}
          />

          <Controller
            name="segmentCut"
            control={control}
            render={({ field }) => (
              <Field label="Seg. Corte" validationMessage={errors.prefix?.message}>
                <Input {...field} placeholder="ICZ" disabled />
              </Field>
            )}
          />

          <Controller
            name="segmentEnd"
            control={control}
            render={({ field }) => (
              <Field label="Seg. Fim" validationMessage={errors.prefix?.message}>
                <Input {...field} placeholder="ZPG" disabled />
              </Field>
            )}
          />
        </form>
      </div>
    </div>
  );
};

export { TrainEditForm };
