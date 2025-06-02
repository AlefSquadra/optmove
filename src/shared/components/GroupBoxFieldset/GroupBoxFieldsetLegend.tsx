import type { IGroupBoxFieldsetLegendProps } from "@shared/components/groupBoxFieldset/GroupBoxFieldset.type";

export const GroupBoxFieldsetLegend = (props: IGroupBoxFieldsetLegendProps) => {
  return (
    <>
      <legend className="fieldset-legend xl:text-xs">{props?.children}</legend>
    </>
  );
};
