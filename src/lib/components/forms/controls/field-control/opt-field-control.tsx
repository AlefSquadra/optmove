import { Form } from "antd";
import type { Rule } from "antd/es/form";
import { ReactNode } from "react";

export interface IOptFieldControlProps
  extends Omit<typeof Form.Item, "name" | "label" | "rules" | "children" | "useStatus"> {
  name: string;
  label?: string;
  className?: string;
  fullWidth?: boolean;
  showMessageError?: boolean;
  required?: boolean;
  rules?: Rule[];
  children?: ReactNode;
}

const OptFieldControl = ({
  name,
  label,
  className,
  fullWidth = true,
  showMessageError = true,
  required,
  rules = [],
  children,
}: IOptFieldControlProps) => {
  // Se required for true, adiciona a regra de required aos rules
  const fieldRules =
    required ? [{ required: true, message: `${label || "Este campo"} é obrigatório` }, ...rules] : rules;

  // Configuração de estilo baseada na prop fullWidth
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
    >
      {children}
    </Form.Item>
  );
};

export { OptFieldControl };
