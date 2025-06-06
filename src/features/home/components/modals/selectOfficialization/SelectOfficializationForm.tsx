import { useApplicationContext } from "@app/providers/ApplicationProvider/useApplication";
import { Button, Dropdown, Field, Input, Option } from "@fluentui/react-components";
import { Search20Regular } from "@fluentui/react-icons";
import { DatePickerField } from "@shared/components/forms/DatePickerField";
import type { IOfficializationFormData } from "@shared/types/Officialization.type";
import React, { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface IOfficializationFormProps {
  onSearch: (data: IOfficializationFormData) => void;
  timeLine?: string;
}

const SelectOfficializationForm: React.FC<IOfficializationFormProps> = ({ onSearch }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormContext<IOfficializationFormData>();

  const { selectedOfficialization } = useApplicationContext();

  useEffect(() => {
    reset({
      dataInicial: new Date(),
      dataFinal: new Date(),
      tipo: "TODOS",
      timelineDatetime: "",
      prefix: "",
      ...selectedOfficialization?.officializationForm,
    });
  }, [reset, selectedOfficialization]);

  const onSubmit = (data: IOfficializationFormData) => {
    onSearch(data);
  };

  const typeOptions = [
    { key: "OFICIALIZADO", text: "OFICIALIZADO" },
    { key: "PUBLICADO", text: "PUBLICADO" },
    { key: "TODOS", text: "TODOS" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4">
      <div className="flex flex-wrap items-end gap-4">
        <DatePickerField
          name="dataInicial"
          control={control}
          placeholder="__/__/__"
          label="Data Início"
          errorMessage={errors.dataInicial?.message}
          className="min-w-38"
        />

        <DatePickerField
          name="dataFinal"
          control={control}
          placeholder="__/__/__"
          label="Até"
          errorMessage={errors.dataFinal?.message}
          className="min-w-38"
        />

        <Controller
          name="prefix"
          control={control}
          render={({ field }) => (
            <Field label="Prefixo" validationMessage={errors.prefix?.message}>
              <Input {...field} placeholder="Digite o prefixo" />
            </Field>
          )}
        />
      </div>

      <div className="flex flex-wrap items-end gap-4">
        <Controller
          name="tipo"
          control={control}
          render={({ field }) => (
            <Field label="Tipo" validationMessage={errors.tipo?.message} className="min-w-38">
              <Dropdown
                placeholder="Selecione"
                value={typeOptions.find((option) => option.key === field.value)?.text || ""}
                onOptionSelect={(_, data) => {
                  if (data.optionValue) {
                    field.onChange(data.optionValue);
                  }
                }}
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

        <Button type="submit" appearance="primary" icon={<Search20Regular />} className="w-9 min-w-9 p-0" />

        <Controller
          name="timelineDatetime"
          control={control}
          render={({ field }) => (
            <Field label="Linha do tempo" validationMessage={errors.prefix?.message}>
              <Input {...field} placeholder="timeline" type="datetime-local" />
            </Field>
          )}
        />
      </div>
    </form>
  );
};

export { SelectOfficializationForm };
