import { OptButton, OptInput, OptMoveIcon, OptSelect } from "@optmoves/index";
import { Select } from "antd";
import { GroupBoxFieldset } from "../../../../shared/components/GroupBoxFieldset/GroupBoxFieldset";
import { SecurityComponent } from "../../../../shared/components/securityComponent/SecurityComponent";
import { ConditionChain } from "../../../../shared/utils/ConditionChain";
import { useApplicationContext } from "../../../../store/ApplicationProvider";

interface IFilterFieldsetGroupBoxProps {}

const FilterFieldsetGroupBox = (props: IFilterFieldsetGroupBoxProps) => {
  const {} = props;
  const { selectZoneParams } = useApplicationContext();

  return (
    <>
      <GroupBoxFieldset.Root className="flex min-h-20 items-center justify-start gap-2 p-2">
        <GroupBoxFieldset.Legend>Filtros</GroupBoxFieldset.Legend>
        <OptInput type="datetime-local" />
        <OptButton className="border-none bg-transparent" size="small">
          <OptMoveIcon name="FTPRefresh" height={24} width={24} />
        </OptButton>
        <SecurityComponent allowed={new ConditionChain([selectZoneParams.profileZone]).is("PlanejadorCCO").result}>
          <OptSelect>
            <Select.Option value="1">Mesa de programação</Select.Option>
          </OptSelect>
        </SecurityComponent>
      </GroupBoxFieldset.Root>
    </>
  );
};

export { FilterFieldsetGroupBox };
