import { useApplicationContext } from "@app/providers/ApplicationProvider/useApplication";
import {
  binoculars,
  graphBlockSearch,
  growingGraph,
  logo,
  refresh,
  searchEye,
  windowFolder,
  windowList,
  windowPage,
  windowPlot,
} from "@assets/images";
import { useFTLayout } from "@features/home/providers/HomeFTLayoutProvider/useFtLayout";
import {
  Checkbox,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Option,
  Select,
  Text,
  ToolbarButton,
  ToolbarDivider,
  Tooltip,
} from "@fluentui/react-components";
import { SecurityComponent } from "@shared/components/securityComponent/SecurityComponent";
import { ConditionChain } from "@shared/utils/ConditionChain";
import { useState } from "react";

const FTVOfficeMenu = () => {
  const [selectedTab] = useState("ftv");
  const {
    selectedPanelTabBarLeft,
    setSelectedPanelTabBarLeft,
    showAccomplished,
    setShowAccomplished,
    showTimelineView,
    setShowTimelineView,
    setIsPanelOpenDown,
  } = useFTLayout();
  const { selectZoneParams } = useApplicationContext();
  const [, setIsOpen] = useState(false);

  //   const onTabSelect = (_: SelectTabEvent, data: SelectTabData) => {
  //     setSelectedTab(data.value as string);
  //   };

  const TabsMenu = () => (
    <span className="ml-2 rounded-t-lg border-x border-t border-[#e1e5e9] bg-[#f8f9fa] p-1 px-3 text-xs text-gray-600">
      ICZ-ISN Baixada conceição - santos
    </span>
  );

  const FTVRibbon = () => (
    <div className="border-bottom flex flex-wrap gap-4 bg-[#f8f9fa] px-4 py-2">
      {/* Grupo Filtros */}

      <div className="relative flex flex-col-reverse items-start justify-between gap-1">
        <div className="relative flex items-start gap-1">
          <Input type="datetime-local" style={{ width: "180px", height: "28px" }} />
          <ToolbarButton icon={<img src={refresh} width={24} alt="Icon" />}></ToolbarButton>
          <SecurityComponent allowed={new ConditionChain([selectZoneParams.profileZone]).is("PlanejadorCCO").result}>
            <Select style={{ width: "150px" }}>
              <Option value="1">Mesa de programação</Option>
            </Select>
          </SecurityComponent>
        </div>
        <span className="text-xs text-gray-500">Ações</span>
      </div>

      <ToolbarDivider />

      {/* Grupo Busca */}
      <div className="relative flex flex-col-reverse items-start justify-between gap-1">
        <div className="relative flex items-start gap-1">
          <Input placeholder="Prefixo / Tabela" />
          <Tooltip withArrow content="Pesquisar por prefixo ou tabela" relationship="label">
            <ToolbarButton icon={<img src={searchEye} width={24} alt="Icon" />}></ToolbarButton>
          </Tooltip>

          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <MenuButton
                style={{ padding: "4px", maxWidth: "32px", minWidth: "56px" }}
                icon={<img src={windowPage} width={24} alt="Icon" />}
              >
                {" "}
              </MenuButton>
            </MenuTrigger>

            <MenuPopover>
              <MenuList>
                <MenuItem onClick={() => setSelectedPanelTabBarLeft({ isOpen: true, openTabName: "trens" })}>
                  Trens
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setSelectedPanelTabBarLeft({ isOpen: true, openTabName: "atividades alteradas" });
                  }}
                >
                  Atividades alteradas
                </MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
          <ToolbarButton icon={<img src={binoculars} width={24} alt="Icon" />}></ToolbarButton>
        </div>
        <span className="text-xs text-gray-500">Busca</span>
      </div>

      <ToolbarDivider />

      {/* Grupo Controle */}
      <div className="relative flex flex-col-reverse items-start justify-between gap-1">
        <SecurityComponent allowed={new ConditionChain([selectZoneParams.profileZone]).is("1").result}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
              <Menu>
                <MenuTrigger disableButtonEnhancement>
                  <ToolbarButton>Programar</ToolbarButton>
                </MenuTrigger>
                <MenuPopover>
                  <MenuList>
                    <MenuItem onClick={() => setIsPanelOpenDown(true)}>Programar circulação (Ctrl + P)</MenuItem>
                    <MenuItem onClick={() => setIsPanelOpenDown(true)}>Priorizar circulação</MenuItem>
                  </MenuList>
                </MenuPopover>
              </Menu>

              <ToolbarButton onClick={() => setIsOpen(true)}>
                <img src="/optmove-icons-svg/tile020.svg" width={20} alt="Icon" />
              </ToolbarButton>

              <Menu>
                <MenuTrigger disableButtonEnhancement>
                  <ToolbarButton>Interdições</ToolbarButton>
                </MenuTrigger>
                <MenuPopover>
                  <MenuList>
                    <MenuItem onClick={() => setIsPanelOpenDown(true)}>Criar interdição</MenuItem>
                    <MenuItem onClick={() => setIsPanelOpenDown(true)}>Criar retenção</MenuItem>
                  </MenuList>
                </MenuPopover>
              </Menu>
            </div>
            <div style={{ display: "flex", gap: "4px" }}>
              <ToolbarButton>
                <img src="/optmove-icons-svg/tile015.svg" width={20} alt="Icon" />
              </ToolbarButton>
              <ToolbarButton>
                <img src="/optmove-icons-svg/tile035.svg" width={20} alt="Icon" />
              </ToolbarButton>
              <ToolbarButton>
                <img src="/optmove-icons-svg/tile008.svg" width={20} alt="Icon" />
              </ToolbarButton>
              <ToolbarButton onClick={() => setIsPanelOpenDown((prev) => !prev)}>
                <img src="/optmove-icons-svg/tile031.svg" width={20} alt="Ocupação" />
              </ToolbarButton>
            </div>
          </div>
        </SecurityComponent>
        <SecurityComponent allowed={new ConditionChain([selectZoneParams.profileZone]).is("2").result}>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "start",
              gap: "6px",
            }}
          >
            {/* Botões de ícones */}
            <ToolbarButton icon={<img src={growingGraph} width={20} />} />
            <ToolbarButton icon={<img src={graphBlockSearch} width={20} />} />
            <ToolbarButton icon={<img src={windowPlot} width={20} />} />
            <ToolbarButton icon={<img src={windowFolder} width={20} />} />

            {/* Checkboxes */}
            <Checkbox
              checked={selectedPanelTabBarLeft.isOpen}
              onChange={(_, data) => {
                setSelectedPanelTabBarLeft(() => ({
                  isOpen: data.checked as boolean,
                  openTabName: null,
                }));
              }}
              label={"Info's do trem"}
            />

            <Checkbox
              label="Exibir realizados"
              checked={showAccomplished}
              onClick={() => setShowAccomplished((prev) => !prev)}
            />
            <Checkbox
              label="Até linha do tempo"
              checked={showTimelineView}
              onClick={() => setShowTimelineView((prev) => !prev)}
            />
          </div>
        </SecurityComponent>
        <span className="text-xs text-gray-500">Controles</span>
      </div>

      <div className="hidden flex-1 xl:flex">
        <ToolbarDivider />
      </div>
      <ToolbarDivider />

      {/* Grupo Oficialização */}
      <div className="relative flex flex-col-reverse items-start justify-between gap-1">
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Text style={{ fontSize: "12px" }}>16/04/2025 17:39:23</Text>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <div>
                <Text style={{ fontSize: "11px" }}>Mesa 4</Text>
                <Text style={{ fontSize: "11px" }}>100%</Text>
              </div>
              <ToolbarButton icon={<img src={windowList} width={20} alt="Icon" />}></ToolbarButton>
            </div>
          </div>
        </div>
        <span className="text-xs text-gray-500">Oficialização</span>
      </div>

      <ToolbarDivider />

      {/* Grupo Coordenadas */}
      <div className="relative flex flex-col-reverse items-start justify-between gap-1">
        <div style={{ padding: "8px" }}>
          <Text style={{ fontSize: "12px" }}>SB: Fora do painel</Text>
        </div>
        <span className="text-xs text-gray-500">Coordenadas Gráfico</span>
      </div>

      <ToolbarDivider />

      {/* Grupo Monitoramento */}
      <SecurityComponent allowed={new ConditionChain([selectZoneParams.profileZone]).is("1").result}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <ToolbarButton>Monitoramento</ToolbarButton>
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem onClick={() => setIsPanelOpenDown(true)}>Monitoramento de planos</MenuItem>
                <MenuItem onClick={() => setIsPanelOpenDown(true)}>Atividades alteradas</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
          <span style={{ fontSize: "11px", color: "#666" }}>Planos</span>
        </div>
      </SecurityComponent>
    </div>
  );

  const renderRibbonContent = () => {
    switch (selectedTab) {
      case "ftv":
        return <FTVRibbon />;
      default:
        return <div style={{ padding: "20px", textAlign: "center", color: "#666" }}>Conteúdo da aba {selectedTab}</div>;
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="flex items-center border-b border-[#e1e5e9] bg-[#f3f2f1] px-2 py-1">
        <img src={logo} alt="OptMove" width={24} />
        <span className="text-sm">
          OptMove - Baixada Santista - Versão 0.0.1 - Usuário: Alef Santos Soares (CT008311) - AMBIENTE: ORAFH15
          (ADM_THP1)
        </span>
      </div>

      {/* Menu Superior */}
      <div className="flex items-center border-b border-[#e1e5e9] bg-[#f3f2f1]">
        <TabsMenu />

        {/* <TabList selectedValue={selectedTab} onTabSelect={onTabSelect} style={{ marginLeft: "8px" }}>
          <Tab value="ftv">FTV</Tab>
          <Tab value="reports">Relatórios</Tab>
          <Tab value="config">Configurações</Tab>
        </TabList> */}
      </div>

      {/* Ribbon/Faixa de Opções */}
      {renderRibbonContent()}
    </div>
  );
};

export { FTVOfficeMenu };
