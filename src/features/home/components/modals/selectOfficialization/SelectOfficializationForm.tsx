import { Button, Dropdown, Field, Input, Option } from "@fluentui/react-components";
import { Search20Regular } from "@fluentui/react-icons";
import { TimePicker } from "@fluentui/react-timepicker-compat";
import { DatePickerField } from "@shared/components/forms/DatePickerField";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

interface IOfficializationFormProps {
  onSearch: (data: FormData) => void;
}

interface FormData {
  startDatePicker: Date | null;
  endDatePicker: Date | null;
  prefix: string;
  line: string;
  timelineDate: Date | null;
  timeLineHours: Date | null;
}

const SelectOfficializationForm: React.FC<IOfficializationFormProps> = ({ onSearch }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      startDatePicker: new Date(2025, 0, 1),
      endDatePicker: new Date(2025, 0, 10),
      prefix: "",
      line: "1",
      timelineDate: new Date(2025, 0, 5),
      timeLineHours: new Date(2025, 0, 5, 8, 0),
    },
  });

  useEffect(() => {
    reset({
      startDatePicker: new Date(2025, 0, 1),
      endDatePicker: new Date(2025, 0, 10),
      prefix: "",
      line: "1",
      timelineDate: new Date(2025, 0, 5),
      timeLineHours: new Date(2025, 0, 5, 8, 0),
    });
  }, [reset]);

  const onSubmit = (data: FormData) => {
    onSearch(data);
  };

  const typeOptions = [
    { key: "1", text: "OFICIALIZADO" },
    { key: "2", text: "PUBLICADO" },
    { key: "3", text: "TODOS" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4">
      <div className="flex flex-wrap items-end gap-4">
        <DatePickerField
          name="startDatePicker"
          control={control}
          placeholder="__/__/__"
          label="Data Início"
          errorMessage={errors.startDatePicker?.message}
          className="min-w-38"
        />

        <DatePickerField
          name="endDatePicker"
          control={control}
          placeholder="__/__/__"
          label="Até"
          errorMessage={errors.endDatePicker?.message}
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
          name="line"
          control={control}
          render={({ field }) => (
            <Field label="Tipo" validationMessage={errors.line?.message} className="min-w-38">
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

        <DatePickerField
          name="timelineDate"
          control={control}
          placeholder="__/__/__"
          label="Linha do tempo"
          errorMessage={errors.timelineDate?.message}
          className="min-w-38"
        />

        <Controller
          name="timeLineHours"
          control={control}
          render={({ field }) => (
            <Field label="Horário" validationMessage={errors.timeLineHours?.message}>
              <TimePicker
                placeholder="__:__"
                value={field.value?.toLocaleTimeString()}
                onTimeChange={(_, data) => {
                  if (data.selectedTime) {
                    field.onChange(data.selectedTime);
                  }
                }}
              />
            </Field>
          )}
        />
      </div>
    </form>
  );
};

export { SelectOfficializationForm };
