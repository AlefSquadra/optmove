import { Field } from "@fluentui/react-components";
import type { CalendarStrings, DatePickerProps } from "@fluentui/react-datepicker-compat";
import { DatePicker, defaultDatePickerStrings } from "@fluentui/react-datepicker-compat";
import { type Control, Controller, type FieldValues, type Path } from "react-hook-form";

type DatePickerBRProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder?: string;
  errorMessage?: string;
  className?: string;
} & Omit<DatePickerProps, "strings" | "value" | "onSelectDate">;

const datePickerStrings: CalendarStrings = {
  ...defaultDatePickerStrings,
  months: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  shortMonths: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
  days: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
  shortDays: ["D", "S", "T", "Q", "Q", "S", "S"],
  goToToday: "Hoje",
  prevMonthAriaLabel: "Mês anterior",
  nextMonthAriaLabel: "Próximo mês",
  prevYearAriaLabel: "Ano anterior",
  nextYearAriaLabel: "Próximo ano",
  closeButtonAriaLabel: "Fechar",
};

export function DatePickerField<T extends FieldValues>({
  name,
  control,
  label,
  placeholder = "dd/mm/aaaa",
  errorMessage,
  className,
  ...rest
}: DatePickerBRProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Field label={label} size={rest.size} validationMessage={errorMessage} className={className}>
          <DatePicker
            placeholder={placeholder}
            value={field.value}
            onSelectDate={(date) => field.onChange(date)}
            strings={datePickerStrings}
            className={className}
            formatDate={(date) => (date ? date.toLocaleDateString("pt-BR") : "")}
            parseDateFromString={(value) => {
              const [day, month, year] = value.split("/");
              const parsed = new Date(Number(year), Number(month) - 1, Number(day));
              return isNaN(parsed.getTime()) ? null : parsed;
            }}
            {...rest}
          />
        </Field>
      )}
    />
  );
}
