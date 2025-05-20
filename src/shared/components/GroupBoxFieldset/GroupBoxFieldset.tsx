import clsx from "clsx";

interface IGroupBoxFieldsetRootProps {
  children?: React.ReactNode;
  className?: string;
}

interface IGroupBoxFieldsetLegendProps {
  children?: React.ReactNode;
  className?: string;
}

const GroupBoxFieldsetRoot = (props: IGroupBoxFieldsetRootProps) => {
  const {} = props;
  return (
    <>
      <fieldset className={clsx("bg-base-200 border-base-300 rounded-box border", props.className)}>
        {props.children}
      </fieldset>
    </>
  );
};

const GroupBoxFieldsetLegend = (props: IGroupBoxFieldsetLegendProps) => {
  const {} = props;
  return (
    <>
      <legend className="fieldset-legend xl:text-xs">{props?.children}</legend>
    </>
  );
};

export const GroupBoxFieldset = { Root: GroupBoxFieldsetRoot, Legend: GroupBoxFieldsetLegend };
