import { Button, OptMoveIcon, Select } from "@optmove/design-system";
import { GroupBoxFieldset } from "../../../../shared/components/GroupBoxFieldset/GroupBoxFieldset";

interface ISearchFieldsetGroupBoxProps {}

const SearchFieldsetGroupBox = (props: ISearchFieldsetGroupBoxProps) => {
  const {} = props;

  return (
    <>
      <GroupBoxFieldset.Root className="flex min-h-20 items-center justify-start gap-2 p-2">
        <GroupBoxFieldset.Legend>Busca</GroupBoxFieldset.Legend>
        <Select label="Pátio destino">
          <option selected value={null}>
            Prefixo / Tabela
          </option>
        </Select>
        <Button variant="outlined" className="h-6 border-none p-0">
          <OptMoveIcon name="FTPSearchEyeIcon" height={24} width={24} />
        </Button>
        <Button variant="outlined" className="h-6 border-none p-0">
          <OptMoveIcon name="FTPBinocularsIcon" height={24} width={24} />
        </Button>
        <Button variant="outlined" className="h-6 border-none p-0">
          <OptMoveIcon name="FTPFormPageTerminalIcon" height={24} width={24} />
        </Button>
      </GroupBoxFieldset.Root>
    </>
  );
};

export { SearchFieldsetGroupBox };
