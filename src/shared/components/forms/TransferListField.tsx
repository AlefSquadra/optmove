import { Field } from "@fluentui/react-components";
import { TransferList } from "@shared/components/transferList/TransferList";
import type { TransferListItem, TransferListProps } from "@shared/components/transferList/TransferList.type";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface TransferListFieldProps extends Omit<TransferListProps, "onChange" | "leftItems" | "rightItems"> {
  name: string;
  label?: string;
  leftItems: TransferListItem[];
  rightItems: TransferListItem[];
}

export const TransferListField: React.FC<TransferListFieldProps> = ({
  name,
  label,
  leftItems,
  rightItems,
  ...rest
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name]?.message as string | undefined;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={rightItems}
      render={({ field }) => {
        // cria Set pra separar os itens corretamente
        const selectedIds = new Set(field.value.map((i) => i.id));
        const currentLeft = leftItems.filter((i) => !selectedIds.has(i.id));
        const currentRight = field.value;

        return (
          <Field label={label} validationMessage={fieldError} validationState={fieldError ? "error" : "none"}>
            <TransferList
              {...rest}
              leftItems={currentLeft}
              rightItems={currentRight}
              onChange={(_, updatedRight) => {
                field.onChange(updatedRight);
              }}
            />
          </Field>
        );
      }}
    />
  );
};
