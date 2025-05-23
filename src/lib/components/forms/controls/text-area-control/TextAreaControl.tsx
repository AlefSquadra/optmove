import { Form } from "antd";
import { Rule } from "antd/es/form";

import { ITextAreaProps, TextArea, TextAreaCounter } from "../../un-controls";
import { OptFieldControl } from "../field-control";

export interface ITextAreaControlProps {
  name: string;
  label?: string;
  className?: string;
  fullWidth?: boolean;
  showMessageError?: boolean;
  required?: boolean;
  rules?: Rule[];
  textAreaProps?: ITextAreaProps;
}

const TextAreaControl: React.FC<ITextAreaControlProps> = (props) => {
  const { name, label, className, fullWidth, showMessageError = false, required, rules = [], textAreaProps } = props;

  return (
    <OptFieldControl
      name={name}
      label={label}
      className={className}
      fullWidth={fullWidth}
      showMessageError={showMessageError}
      required={required}
      rules={rules}
    >
      <Form.Item noStyle shouldUpdate={(prevValues, currentValues) => prevValues[name] !== currentValues[name]}>
        {({ getFieldValue, getFieldError }) => {
          const value = getFieldValue(name);
          const errors = getFieldError(name);
          const hasError = errors && errors.length > 0;

          return (
            <>
              <TextArea
                hasError={hasError}
                value={value}
                onChange={(e) => {
                  // Usamos o setFieldsValue do Form para atualizar o valor
                  const fieldValue = e.target.value;
                  const fieldObj = {};
                  fieldObj[name] = fieldValue;
                  Form.useFormInstance().setFieldsValue(fieldObj);
                }}
                {...textAreaProps}
              />
              <TextAreaCounter
                value={value}
                hasError={hasError}
                maxLength={textAreaProps?.maxLength}
                message={hasError && showMessageError ? errors[0] : undefined}
              />
            </>
          );
        }}
      </Form.Item>
    </OptFieldControl>
  );
};

export { TextAreaControl };
