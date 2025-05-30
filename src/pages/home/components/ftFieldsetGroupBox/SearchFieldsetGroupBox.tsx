import { OptButton, OptMoveIcon, OptSelect } from "@optmoves/index";
import { Select } from "antd";
import { GroupBoxFieldset } from "../../../../shared/components/GroupBoxFieldset/GroupBoxFieldset";
import { useFTLayout } from "../../../../shared/layouts/FTLayout";

interface ISearchFieldsetGroupBoxProps {}

const SearchFieldsetGroupBox = (props: ISearchFieldsetGroupBoxProps) => {
  const {} = props;
  const { setSelectedPanelTabBarLeft } = useFTLayout();
  return (
    <>
      <GroupBoxFieldset.Root className="flex min-h-20 items-center justify-start gap-2 p-2">
        <GroupBoxFieldset.Legend>Busca</GroupBoxFieldset.Legend>
        <OptSelect>
          <Select.Option value="1">Prefixo / Tabela</Select.Option>
        </OptSelect>
        <OptButton variant="outlined" className="h-6 border-none p-0">
          <OptMoveIcon name="FTPSearchEyeIcon" height={24} width={24} />
        </OptButton>
        <OptButton variant="outlined" className="h-6 border-none p-0">
          <OptMoveIcon
            name="FTPFormPageTerminalIcon"
            height={24}
            width={24}
            onClick={() => setSelectedPanelTabBarLeft((prev) => ({ isOpen: true, openTabName: "trens" }))}
          />
        </OptButton>
        <OptButton variant="outlined" className="h-6 border-none p-0">
          <OptMoveIcon name="FTPBinocularsIcon" height={24} width={24} />
        </OptButton>
      </GroupBoxFieldset.Root>
    </>
  );
};

export { SearchFieldsetGroupBox };
