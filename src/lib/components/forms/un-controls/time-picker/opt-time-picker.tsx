import { DatePickerProps, TimePicker } from "antd";

interface IOptTimePickerProps extends DatePickerProps {}

const OptTimePicker = (props: IOptTimePickerProps) => {
  const { ...datePickerProps } = props;

  return (
    <>
      <TimePicker style={{ width: "100%" }} {...datePickerProps} />
    </>
  );
};

export { OptTimePicker };
