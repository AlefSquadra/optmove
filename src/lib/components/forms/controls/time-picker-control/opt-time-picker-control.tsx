import { TimePickerProps } from "antd";
import { OptTimePicker } from "../../un-controls/time-picker";
import { IOptFieldControlProps, OptFieldControl } from "../field-control";

interface IOptTimePickerControlProps extends IOptFieldControlProps {
  timePickerProps?: TimePickerProps;
}

const OptTimePickerControl = (props: IOptTimePickerControlProps) => {
  const { timePickerProps, ...fieldControlProps } = props;

  return (
    <>
      <OptFieldControl {...fieldControlProps}>
        <OptTimePicker {...timePickerProps} />
      </OptFieldControl>
    </>
  );
};

export { OptTimePickerControl };
