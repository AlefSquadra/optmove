import { Button, OptMoveIcon, Text } from "@optmove/design-system";
import { GroupBoxFieldset } from "../../../../shared/components/GroupBoxFieldset/GroupBoxFieldset";

interface IOfficializationFieldsetGroupBoxProps {}

const OfficializationFieldsetGroupBox = (props: IOfficializationFieldsetGroupBoxProps) => {
  const {} = props;

  return (
    <>
      <GroupBoxFieldset.Root className="col-start-10 min-h-20 items-center justify-start p-2">
        <GroupBoxFieldset.Legend>Oficialização</GroupBoxFieldset.Legend>
        <Text.Label variant="1">16/04/2025 17:39:23</Text.Label>
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <Text.Label variant="1">Mesa 4</Text.Label>
            <Text.Label variant="1">100%</Text.Label>
          </div>
          <Button variant="outlined" className="h-6 border-none p-0">
            <OptMoveIcon name="FTPSearchEyeIcon" height={24} width={24} />
          </Button>
        </div>
      </GroupBoxFieldset.Root>
    </>
  );
};

export { OfficializationFieldsetGroupBox };
