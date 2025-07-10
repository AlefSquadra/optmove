import { logo } from "@assets/images";
import { FTVRibbon, type IFTVRibbonProps } from "@features/home/components/headerOfficeMenu/FTVRibbon";
import { useOfficeMenuContext } from "@features/home/providers/OfficeMenuProvider/useOfficeMenu";

interface IOfficeMenuProps extends Partial<IFTVRibbonProps> {
  id?: string;
}

const FTVOfficeMenu = (props: IOfficeMenuProps) => {
  const { handlePrefixSearchChange } = props;
  const { selectedTab } = useOfficeMenuContext();

  return (
    <div className="w-full bg-white">
      <div className="flex items-center border-b border-[#e1e5e9] bg-[#f3f2f1] px-2 py-1">
        <img src={logo} alt="OptMove" style={{ width: "1.5rem", height: "1.5rem" }} />
        <span style={{ fontSize: "0.875rem" }}>
          OptMove - Baixada Santista - Versão 0.0.1 - Usuário: Alef Santos Soares (CT008311) - AMBIENTE: ORAFH15
          (ADM_THP1)
        </span>
      </div>

      {/* Menu Superior */}
      <div className="flex items-center border-b border-[#e1e5e9] bg-[#f3f2f1]">
        <span
          className="ml-2 rounded-t-lg border-x border-t border-[#e1e5e9] bg-[#f8f9fa] p-1 px-3 text-gray-600"
          style={{ fontSize: "0.75rem" }}
        >
          ICZ-ISN Baixada conceição - santos
        </span>

        {/* <TabList selectedValue={selectedTab} onTabSelect={onTabSelect} style={{ marginLeft: "8px" }}>
          <Tab value="ftv">FTV</Tab>
          <Tab value="reports">Relatórios</Tab>
          <Tab value="config">Configurações</Tab>
        </TabList> */}
      </div>

      {/* Ribbon/Faixa de Opções */}
      {selectedTab === "ftv" ?
        <FTVRibbon handlePrefixSearchChange={handlePrefixSearchChange} />
      : <div style={{ padding: "20px", textAlign: "center", color: "#666" }}>Conteúdo da aba {selectedTab}</div>}
    </div>
  );
};

export { FTVOfficeMenu };
