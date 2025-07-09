import { useApplicationContext } from "@app/providers/ApplicationProvider/useApplication";
import {
  binoculars,
  graphBlockSearch,
  growingGraph,
  refresh,
  searchEye,
  windowFolder,
  windowList,
  windowPage,
  windowPlot,
} from "@assets/images";
import { useFTLayout } from "@features/home/providers/HomeFTLayoutProvider/useFtLayout";
import { useOfficeMenuContext } from "@features/home/providers/OfficeMenuProvider/useOfficeMenu";
import {
  Checkbox,
  Dropdown,
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
import { DateFormat } from "@shared/utils/DateFormat";
import { useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";

export interface IFTVRibbonProps {
  handlePrefixSearchChange?: (prefix: string) => void;
}

export const FTVRibbon = (props: IFTVRibbonProps) => {
  const { handlePrefixSearchChange } = props;
  const { setIsOpen, setIsPanelOpenDown, prefix, setPrefix } = useOfficeMenuContext();
  const {
    selectedPanelTabBarLeft,
    setSelectedPanelTabBarLeft,
    showAccomplished,
    setShowAccomplished,
    showTimelineView,
    setShowTimelineView,
    setOpenSelectOfficialization,
    setOpenSystemParams,
    graphTimeAndCoordinates,
  } = useFTLayout();
  const { selectZoneParams, selectedOfficialization } = useApplicationContext();

  const methods = useForm({
    defaultValues: {
      inputTimelineDatetime: "",
      mesa: "1",
      prefix: "",
      plan: "",
      infoTrem: "",
      exibirRealizados: "",
      ateLinhaDoTempo: "",
    },
  });

  const { control, setValue, watch } = methods;
  const prefixValue = watch("prefix");

  useEffect(() => {
    if (selectedOfficialization?.officializationForm.timelineDatetime) {
      setValue("inputTimelineDatetime", selectedOfficialization?.officializationForm.timelineDatetime);
    }
    if (selectedOfficialization?.listOfficialization && selectedOfficialization?.listOfficialization.length > 0) {
      setValue(
        "plan",
        DateFormat.dayjs(selectedOfficialization?.listOfficialization[0].dateOfficialization, "YYYY-MM-DDTHH:mm")
          .toDate()
          .toLocaleString(),
      );
    }
  }, [selectedOfficialization, setValue]);

  useEffect(() => {
    setPrefix(prefixValue);
  }, [prefixValue, setPrefix]);

  return (
    <FormProvider {...methods}>
      <form className="border-bottom flex flex-wrap gap-4 bg-[#f8f9fa] px-4 py-2 md:gap-0">
        {/* Grupo Filtros */}
        <div className="relative flex flex-col-reverse items-start justify-between gap-1 md:gap-0">
          <div className="relative flex items-start gap-1">
            <Controller
              name="inputTimelineDatetime"
              control={control}
              render={({ field }) => (
                <Input {...field} type="datetime-local" className="w-[9.5rem] md:w-[11rem] lg:w-[11.5rem]" />
              )}
            />
            <ToolbarButton
              icon={<img src={refresh} width={24} alt="Icon" />}
              onClick={() => {
                setOpenSelectOfficialization(true);
              }}
            ></ToolbarButton>
            <SecurityComponent allowed={new ConditionChain([selectZoneParams.profileZone]).is("PlanejadorCCO").result}>
              <Controller
                name="mesa"
                control={control}
                render={({ field }) => (
                  <Select {...field} style={{ width: "150px" }}>
                    <Option value="1">Mesa de programação</Option>
                  </Select>
                )}
              />
            </SecurityComponent>
          </div>
          <span className="text-sm text-gray-500 md:text-xs">Ações</span>
        </div>

        <ToolbarDivider />

        {/* Grupo Busca */}
        <div className="relative flex flex-col-reverse items-start justify-between gap-1 md:gap-0">
          <div className="relative flex items-start gap-1">
            <Controller
              name="prefix"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="Prefixo / Tabela" className="h-[1.750rem] w-[11rem] md:w-[8rem]" />
              )}
            />
            <Tooltip withArrow content="Pesquisar por prefixo ou tabela" relationship="label">
              <ToolbarButton
                icon={<img src={searchEye} width={24} alt="Icon" />}
                onClick={() => {
                  if (handlePrefixSearchChange) handlePrefixSearchChange(prefix);
                }}
              />
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
          <span className="text-sm text-gray-500 md:text-xs">Busca</span>
        </div>

        <ToolbarDivider />

        {/* Grupo Controle */}
        <div className="relative flex flex-col-reverse items-start justify-between gap-1 md:gap-0">
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
              <ToolbarButton
                icon={<img src={windowFolder} width={20} />}
                onClick={() => setOpenSystemParams({ isOpen: true })}
              />

              {/* Checkboxes */}
              <Controller
                name="infoTrem"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    checked={selectedPanelTabBarLeft.isOpen}
                    onChange={(_, data) => {
                      field.onChange(data.checked);
                      setSelectedPanelTabBarLeft(() => ({
                        isOpen: data.checked as boolean,
                        openTabName: "",
                      }));
                    }}
                    label={<Text className="text-sm md:!text-[.7rem]">Info's do trem</Text>}
                  />
                )}
              />

              <Controller
                name="exibirRealizados"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    label={<Text className="text-sm md:!text-[.7rem]">Exibir realizados</Text>}
                    size="medium"
                    className="text-xs"
                    checked={showAccomplished}
                    onChange={(_, data) => {
                      field.onChange(data.checked);
                      setShowAccomplished(data.checked as boolean);
                    }}
                  />
                )}
              />
              <Controller
                name="ateLinhaDoTempo"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    label={<Text className="text-sm md:!text-[.7rem]">Até linha do tempo</Text>}
                    checked={showTimelineView}
                    onChange={(_, data) => {
                      field.onChange(data.checked);
                      setShowTimelineView(data.checked as boolean);
                    }}
                  />
                )}
              />
            </div>
          </SecurityComponent>
          <span className="text-sm text-gray-500 md:text-xs">Controles</span>
        </div>

        <ToolbarDivider />

        <SecurityComponent allowed={new ConditionChain([selectZoneParams.profileZone]).is("2").result}>
          <div className="relative flex flex-col-reverse items-start justify-between gap-1 md:gap-0">
            <div className="relative flex items-start gap-1">
              <Controller
                name="plan"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    {...field}
                    className="w-[180px] !min-w-0"
                    id={"dropdown-plan"}
                    placeholder="Plano"
                    onOptionSelect={(_, data) => field.onChange(data.optionText ?? "")}
                  >
                    {selectedOfficialization?.listOfficialization.map((option) => (
                      <Option className="text-left" key={option.dateOfficialization} value={option.dateOfficialization}>
                        {DateFormat.dayjs(option.dateOfficialization, "YYYY-MM-DDTHH:mm").toDate().toLocaleString()}
                      </Option>
                    ))}
                  </Dropdown>
                )}
              />
            </div>
            <span className="text-sm text-gray-500 md:text-xs">Planos</span>
          </div>
        </SecurityComponent>

        <div className="hidden flex-1 lg:flex">
          <ToolbarDivider />
        </div>

        <ToolbarDivider />

        {/* Grupo Oficialização */}
        <div className="relative flex flex-col-reverse items-start justify-between gap-1 md:gap-0">
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text className="text-sm md:!text-[.7rem]">16/04/2025 17:39:23</Text>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <div className="flex items-center justify-between gap-1 md:gap-0">
                  <Text className="text-sm md:!text-[.7rem]">Mesa4</Text>
                  <Text className="text-sm md:!text-[.7rem]">100%</Text>
                </div>
                <ToolbarButton icon={<img src={windowList} width={20} alt="Icon" />}></ToolbarButton>
              </div>
            </div>
          </div>
          <span className="text-sm text-gray-500 md:text-xs">Oficialização</span>
        </div>

        <ToolbarDivider />

        {/* Grupo Coordenadas */}
        <div className="relative flex flex-col-reverse items-start justify-between gap-1">
          <div className="flex flex-col items-start gap-1">
            <Text className="text-sm md:!text-[.7rem]">SB: {graphTimeAndCoordinates.sbs || "Fora do painel"}</Text>
            <Text className="text-sm md:!text-[.7rem]">
              SB: {DateFormat.dayjs(graphTimeAndCoordinates.date, "YYYY-MM-DDTHH:mm").toDate().toLocaleString()}
            </Text>
          </div>
          <span className="text-sm text-gray-500 md:text-xs">Coordenadas Gráfico</span>
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
      </form>
    </FormProvider>
  );
};
