import { Select as AntSelect, SelectProps } from "antd";

export interface IOptSelectProps extends SelectProps {}

const OptSelect = ({ children, ...props }: IOptSelectProps) => {
  return <AntSelect {...props}>{children}</AntSelect>;
};

export { OptSelect };
