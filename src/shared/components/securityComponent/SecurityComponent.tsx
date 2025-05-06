export interface ISecurityComponentProps {
  allowed: boolean;
  children: React.ReactNode | React.JSX.Element;
}

export const SecurityComponent = ({ allowed = false, children }: ISecurityComponentProps) => {
  return <>{allowed && children}</>;
};
