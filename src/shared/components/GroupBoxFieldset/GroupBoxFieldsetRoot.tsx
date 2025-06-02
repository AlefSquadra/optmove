import type { IGroupBoxFieldsetRootProps } from "@shared/components/groupBoxFieldset/GroupBoxFieldset.type";
import clsx from "clsx";

export const GroupBoxFieldsetRoot = (props: IGroupBoxFieldsetRootProps) => {
  return (
    <>
      <fieldset className={clsx("bg-base-200 border-base-300 rounded-box border", props.className)}>
        {props.children}
      </fieldset>
    </>
  );
};
