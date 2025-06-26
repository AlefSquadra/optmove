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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-4 p-4 md:flex-row md:gap-2 md:p-2 lg:flex-col lg:gap-4 lg:p-4"
    >
      <div className="flex flex-wrap items-end gap-4 md:flex-row md:flex-nowrap md:gap-2 lg:flex-wrap lg:gap-4">
        <DatePickerField
          name="dataInicial"
          control={control}
          placeholder="__/__/__"
          label="Data Início"
          errorMessage={errors.dataInicial?.message}
          className="w-[9.5rem] md:w-[7.5rem] lg:w-[9.5rem]"
        />

        <DatePickerField
          name="dataFinal"
          control={control}
          placeholder="__/__/__"
          label="Até"
          errorMessage={errors.dataFinal?.message}
          size="medium"
          className="w-[9.5rem] md:w-[7.5rem] lg:w-[9.5rem]"
        />

        <Controller
          name="prefix"
          control={control}
          render={({ field }) => (
            <Field label="Prefixo" validationMessage={errors.prefix?.message}>
              <Input {...field} placeholder="Digite o prefixo" className="w-[9.5rem] md:w-[7.5rem] lg:w-[9.5rem]" />
            </Field>
          )}
        />
      </div>

      <div className="flex flex-wrap items-end gap-4 md:flex-row md:flex-nowrap md:gap-2 lg:flex-wrap lg:gap-4">
        <Controller
          name="tipo"
          control={control}
          render={({ field }) => (
            <Field label="Tipo" validationMessage={errors.tipo?.message}>
              <Dropdown
                placeholder="Selecione"
                value={typeOptions.find((o) => o.key === field.value)?.text || ""}
                onOptionSelect={(_, data) => {
                  if (data.optionValue) field.onChange(data.optionValue);
                }}
                className="w-[9.5rem] !min-w-[9.5rem] md:w-[7.5rem] lg:w-[9.5rem] lg:!min-w-[9.5rem]"
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

        <Button
          type="submit"
          appearance="primary"
          icon={<Search20Regular />}
          className="w-9 min-w-9 p-0 lg:w-9 lg:min-w-9 lg:p-0"
        />

        <Controller
          name="timelineDatetime"
          control={control}
          render={({ field }) => (
            <Field label="Linha do tempo" validationMessage={errors.timelineDatetime?.message}>
              <Input {...field} type="datetime-local" className="w-[9.5rem] md:w-[11rem] lg:w-[9.5rem]" />
            </Field>
          )}
        />
      </div>
    </form>
  );
};

export { SelectOfficializationForm };
