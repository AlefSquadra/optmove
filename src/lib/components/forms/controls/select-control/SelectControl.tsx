import { Form, Select } from "antd";
import { Rule } from "antd/es/form";
import { IOptSelectProps, OptSelect } from "../../un-controls";

interface IOptInputSelectControlProps extends Omit<IOptSelectProps, "value" | "onChange"> {
  name: string;
  options: { id: string; name: string }[];
  labelKey?: string;
  valueKey?: string;
  label?: string;
  className?: string;
  fullWidth?: boolean;
  required?: boolean;
  rules?: Rule[];
  showMessageError?: boolean;
  storeCompleteObject?: boolean; // Nova prop para controlar se armazena objeto completo ou só o valor
}

const OptInputSelectControl = ({
  name,
  label,
  className,
  options = [],
  fullWidth = true,
  labelKey = "name",
  valueKey = "id",
  placeholder = "Escolha uma opção",
  required,
  rules = [],
  showMessageError = true,
  storeCompleteObject = false,
  ...props
}: IOptInputSelectControlProps) => {
  const fieldRules =
    required ? [{ required: true, message: `${label || "Este campo"} é obrigatório` }, ...rules] : rules;

  const formItemStyle = fullWidth ? { width: "100%" } : {};

  return (
    <Form.Item
      name={name}
      label={label}
      required={required}
      rules={fieldRules}
      className={className}
      style={formItemStyle}
      help={showMessageError ? undefined : ""}
      validateStatus={showMessageError ? undefined : ""}
      getValueFromEvent={(value) => {
        if (!storeCompleteObject) {
          return value; // Retorna apenas o valor (ID)
        }

        // Se precisar armazenar o objeto completo
        if (value === undefined || value === null) {
          return null;
        }

        const selectedObj = options.find((item) => item[valueKey] === value);
        return selectedObj || null;
      }}
      getValueProps={(value) => {
        if (!storeCompleteObject) {
          return { value }; // Usa o valor diretamente
        }

        // Se estiver armazenando objeto completo, extrai o ID para o Select
        return {
          value: value?.[valueKey] || undefined,
        };
      }}
    >
      <OptSelect placeholder={placeholder} allowClear {...props}>
        {options.map((item) => (
          <Select.Option key={`${name}-${item[valueKey]}`} value={item[valueKey] ?? ""}>
            {item[labelKey]}
          </Select.Option>
        ))}
      </OptSelect>
    </Form.Item>
  );
};

export { OptInputSelectControl };
export type { IOptInputSelectControlProps };
