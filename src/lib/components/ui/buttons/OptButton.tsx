import { Button as AntButton, ButtonProps } from "antd";

export interface IButtonProps extends ButtonProps {}

const OptButton = ({ children, ...props }: IButtonProps) => {
  return <AntButton {...props}>{children}</AntButton>;
};

export { OptButton };
