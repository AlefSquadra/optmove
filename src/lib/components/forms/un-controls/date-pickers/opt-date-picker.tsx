import { DatePicker, DatePickerProps } from "antd";

interface IOptDatePickerProps extends DatePickerProps {}

const OptDatePicker = (props: IOptDatePickerProps) => {
  const { ...datePickerProps } = props;

  return (
    <>
      <DatePicker style={{ width: "100%" }} format="DD/MM/YYYY" {...datePickerProps} />
    </>
  );
};

export { OptDatePicker };
