import { Button, Input, OptMoveIcon, Select } from "@optmove/design-system";
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
        <Input type="datetime-local" />
        <Button variant="outlined" className="h-6 border-none p-0">
          <OptMoveIcon name="FTPRefresh" height={24} width={24} />
        </Button>
        <SecurityComponent allowed={new ConditionChain([selectZoneParams.profileZone]).is("PlanejadorCCO").result}>
          <Select label="Pátio destino">
            <option selected value={null}>
              Mesa de programação
            </option>
          </Select>
        </SecurityComponent>
      </GroupBoxFieldset.Root>
    </>
  );
};

export { FilterFieldsetGroupBox };
