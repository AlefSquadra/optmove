import { useApplicationContext } from "@app/providers/ApplicationProvider/useApplication";
import { Search20Regular } from "@fluentui/react-icons";
import { OptButton, OptDropdown, OptField, OptInput, OptOption } from "@shared/components/fluentui";
import { DatePickerOptField } from "@shared/components/forms/DatePickerField";
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
      tipo: "PUBLICADO",
      timelineDatetime: "",
      prefix: "",
      ...selectedOfficialization?.officializationForm,
    });
  }, [reset, selectedOfficialization]);

  const onSubmit = (data: IOfficializationFormData) => {
    onSearch(data);
  };

  const typeOptOptions = [
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
        <DatePickerOptField
          name="dataInicial"
          control={control}
          placeholder="__/__/__"
          label="Data Início"
          errorMessage={errors.dataInicial?.message}
          className="w-[9.5rem] md:w-[10rem] lg:w-[9.5rem]"
        />

        <DatePickerOptField
          name="dataFinal"
          control={control}
          placeholder="__/__/__"
          label="Até"
          errorMessage={errors.dataFinal?.message}
          size="medium"
          className="w-[9.5rem] md:w-[10rem] lg:w-[9.5rem]"
        />

        <Controller
          name="prefix"
          control={control}
          render={({ field }) => (
            <OptField label="Prefixo" validationMessage={errors.prefix?.message}>
              <OptInput {...field} placeholder="Digite o prefixo" className="w-[9.5rem] md:w-[10rem] lg:w-[9.5rem]" />
            </OptField>
          )}
        />
      </div>

      <div className="flex flex-wrap items-end gap-4 md:flex-row md:flex-nowrap md:gap-2 lg:flex-wrap lg:gap-4">
        <Controller
          name="tipo"
          control={control}
          render={({ field }) => (
            <OptField label="Tipo" validationMessage={errors.tipo?.message}>
              <OptDropdown
                placeholder="Selecione"
                value={typeOptOptions.find((o) => o.key === field.value)?.text || ""}
                onOptionSelect={(_, data) => {
                  if (data.optionValue) field.onChange(data.optionValue);
                }}
                className="w-[9.5rem] !min-w-[9.5rem] md:w-[10rem] lg:w-[9.5rem] lg:!min-w-[9.5rem]"
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

        <OptButton
          type="submit"
          appearance="primary"
          icon={<Search20Regular />}
          className="w-9 min-w-9 p-0 lg:w-9 lg:min-w-9 lg:p-0"
        />

        <Controller
          name="timelineDatetime"
          control={control}
          render={({ field }) => (
            <OptField label="Linha do tempo" validationMessage={errors.timelineDatetime?.message}>
              <OptInput {...field} type="datetime-local" className="w-[9.5rem] md:w-[14rem] lg:w-[12.5rem]" />
            </OptField>
          )}
        />
      </div>
    </form>
  );
};

export { SelectOfficializationForm };
