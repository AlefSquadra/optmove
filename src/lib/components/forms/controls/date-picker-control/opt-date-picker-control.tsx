import { DatePickerProps } from "antd";
import { OptDatePicker } from "../../un-controls/date-pickers";
import { IOptFieldControlProps, OptFieldControl } from "../field-control";

interface IOptDatePickerControlProps extends IOptFieldControlProps {
  datePickerProps?: DatePickerProps;
}

const OptDatePickerControl = (props: IOptDatePickerControlProps) => {
  const { datePickerProps, ...fieldControlProps } = props;

  return (
    <>
      <OptFieldControl {...fieldControlProps}>
        <OptDatePicker {...datePickerProps} />
      </OptFieldControl>
    </>
  );
};

export { OptDatePickerControl };
