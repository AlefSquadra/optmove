import { Form, Space } from "antd";
import { Rule } from "antd/es/form";
import { useEffect, useState } from "react";
import { IOptSelectProps, OptSelect } from "../../un-controls";
import { IOptFieldControlProps } from "../field-control";

interface IOptInputSelectControlProps extends Omit<IOptFieldControlProps, "value" | "onChange"> {
  name: string;
  labelKey?: string;
  valueKey?: string;
  label?: string;
  className?: string;
  fullWidth?: boolean;
  required?: boolean;
  rules?: Rule[];
  showMessageError?: boolean;
  selectProps?: IOptSelectProps;
}

const OptInputSelectControl = ({
  name,
  label,
  className,
  fullWidth = true,
  labelKey = "label",
  valueKey = "value",
  required,
  rules = [],
  showMessageError = true,
  ...props
}: IOptInputSelectControlProps) => {
  const { selectProps, ...restProps } = props;
  const options = selectProps?.options || [];

  // Estado local para forçar re-render quando necessário
  const [renderKey, setRenderKey] = useState(0);

  const isOptionObject = options.length > 0 && typeof options[0] === "object";

  // Forçar re-render quando isOptionObject muda
  useEffect(() => {
    setRenderKey((prev) => prev + 1);
  }, [isOptionObject, options.length]);

  const formItemStyle = fullWidth ? { width: "100%" } : {};

  const fieldRules =
    required ? [{ required: true, message: `${label || "Este campo"} é obrigatório` }, ...rules] : rules;

  return (
    <div key={renderKey}>
      {" "}
      {/* Wrapper com key dinâmica */}
      <Form.Item
        name={name}
        label={label}
        required={required}
        rules={fieldRules}
        className={className}
        style={formItemStyle}
        help={showMessageError ? undefined : ""}
        validateStatus={showMessageError ? undefined : ""}
        getValueProps={(value) => {
          if (!value) return { value: undefined };

          const isMultiple = selectProps?.mode === "multiple" || selectProps?.mode === "tags";

          if (isOptionObject) {
            if (isMultiple) {
              return {
                value: (Array.isArray(value) ? value : []).map((item) => ({
                  label: item[labelKey],
                  value: item[valueKey],
                })),
              };
            } else {
              return {
                value: {
                  label: value[labelKey],
                  value: value[valueKey],
                },
              };
            }
          }

          return { value };
        }}
        getValueFromEvent={(selected) => {
          const isMultiple = selectProps?.mode === "multiple" || selectProps?.mode === "tags";

          if (!selected) return isMultiple ? [] : null;

          if (isOptionObject) {
            if (isMultiple) {
              return selected.map((item) => options.find((opt) => opt[valueKey] === item.value) || item);
            } else {
              return options.find((opt) => opt[valueKey] === selected.value) || selected;
            }
          }

          return selected;
        }}
      >
        <OptSelect
          allowClear
          labelInValue={isOptionObject}
          {...selectProps}
          optionRender={(option, info) => (
            <Space key={option.value || info.index}>
              {isOptionObject ? option.data[labelKey] : option.label || option}
            </Space>
          )}
          options={(selectProps?.options || []).map((opt) => ({
            label: opt[labelKey],
            value: opt[valueKey],
            ...opt,
          }))}
        />
      </Form.Item>
    </div>
  );
};

export { OptInputSelectControl };
export type { IOptInputSelectControlProps };
