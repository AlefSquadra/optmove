import { useApplicationContext } from "@app/providers/ApplicationProvider/useApplication";
import {
  binoculars,
  circleMinusRed,
  cursor,
  excel,
  graphBlockSearch,
  growingGraph,
  lightGray,
  likeYellow,
  lockedRed,
  pGreen,
  refresh,
  saveDiskBlue,
  searchEye,
  velocity,
  warningConstruction,
  windowFolder,
  windowList,
  windowPage,
  windowPlot,
} from "@assets/images";
import { useFTLayout } from "@features/home/providers/HomeFTLayoutProvider/useFtLayout";
import { useOfficeMenuContext } from "@features/home/providers/OfficeMenuProvider/useOfficeMenu";
import {
  OptButton,
  OptCheckbox,
  OptDropdown,
  OptInput,
  OptMenu,
  OptMenuItem,
  OptMenuList,
  OptMenuPopover,
  OptMenuTrigger,
  OptOption,
  OptText,
  OptToolbarButton,
  OptToolbarDivider,
  OptTooltip,
} from "@shared/components/fluentui";
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
  const { setIsOpen, prefix, setPrefix } = useOfficeMenuContext();
  const {
    setSelectedPanelTabBarLeft,
    setShowAccomplished,
    showTimelineView,
    setShowTimelineView,
    setOpenSelectOfficialization,
    setOpenSystemParams,
    graphTimeAndCoordinates,
    setIsPanelOpenDown,
    showInfoTrainRef,
  } = useFTLayout();
  const { selectZoneParams, selectedOfficialization } = useApplicationContext();

  const methods = useForm({
    defaultValues: {
      inputTimelineDatetime: "",
      mesa: "7",
      prefix: "",
      plan: "",
      infoTrem: false,
      exibirRealizados: "",
      ateLinhaDoTempo: "",
    },
  });

  const { control, setValue, watch } = methods;
  const prefixValue = watch("prefix");
  const hasInfoTrem = watch("infoTrem");

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
  }, [selectedOfficialization, setValue, selectZoneParams.mesaZone]);

  useEffect(() => {
    setPrefix(prefixValue);
    showInfoTrainRef.current = !!hasInfoTrem;
  }, [prefixValue, setPrefix, hasInfoTrem]);

  return (
    <FormProvider {...methods}>
      <form className="border-bottom flex flex-wrap gap-4 bg-[#f8f9fa] px-4 py-2 md:gap-0 md:px-2 md:py-1">
        {/* Grupo Filtros */}
        <div className="relative flex flex-col-reverse items-start justify-between gap-1 md:gap-0">
          <div className="relative flex items-start gap-1">
            <Controller
              name="inputTimelineDatetime"
              control={control}
              render={({ field }) => (
                <OptInput {...field} type="datetime-local" className="w-[9.5rem] md:w-[9rem] lg:w-[11.5rem]" />
              )}
            />
            <OptToolbarButton
              icon={<img src={refresh} width={24} alt="Icon" />}
              onClick={() => {
                setOpenSelectOfficialization(true);
              }}
            ></OptToolbarButton>
            <SecurityComponent allowed={new ConditionChain([selectZoneParams.profileZone]).is("1").result}>
              <Controller
                name="mesa"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <OptDropdown
                    selectedOptions={value ? [value] : []}
                    onOptionSelect={(_, data) => onChange(data.optionValue)}
                    className="w-[11rem] !min-w-0 md:w-[16rem] lg:w-[13rem]"
                    id="dropdown-mesa"
                    placeholder="Mesa"
                  >
                    {/* use keys diferentes para evitar warn de React */}
                    <OptOption key="MP" value="7">
                      Mesa de programação
                    </OptOption>
                    <OptOption key="AU" value="A">
                      Automático
                    </OptOption>
                  </OptDropdown>
                )}
              />
            </SecurityComponent>
          </div>
          <span className="text-sm text-gray-500 md:text-xs">Ações</span>
        </div>

        <OptToolbarDivider />

        {/* Grupo Busca */}
        <div className="relative flex flex-col-reverse items-start justify-between gap-1 md:gap-0">
          <div className="relative flex items-start gap-1">
            <Controller
              name="prefix"
              control={control}
              render={({ field }) => (
                <OptInput
                  {...field}
                  placeholder="Prefixo / Tabela"
                  className="h-[1.750rem] w-[11rem] md:w-[7rem] lg:w-[8rem]"
                />
              )}
            />
            <OptTooltip withArrow content="Pesquisar por prefixo ou tabela" relationship="label">
              <OptToolbarButton
                icon={<img src={searchEye} width={24} alt="Icon" />}
                onClick={() => {
                  if (handlePrefixSearchChange) handlePrefixSearchChange(prefix);
                }}
              />
            </OptTooltip>

            <OptToolbarButton icon={<img src={binoculars} width={24} alt="Icon" />}></OptToolbarButton>

            <OptMenu>
              <OptMenuTrigger disableButtonEnhancement>
                <OptButton
                  style={{ padding: "4px", maxWidth: "32px", minWidth: "56px" }}
                  icon={<img src={windowPage} width={24} alt="Icon" />}
                >
                  {"  "}
                </OptButton>
              </OptMenuTrigger>

              <OptMenuPopover>
                <OptMenuList>
                  <OptMenuItem onClick={() => setSelectedPanelTabBarLeft({ isOpen: true, openTabName: "trens" })}>
                    Trens
                  </OptMenuItem>
                  <OptMenuItem
                    onClick={() => {
                      setSelectedPanelTabBarLeft({ isOpen: true, openTabName: "atividades alteradas" });
                    }}
                  >
                    Atividades alteradas
                  </OptMenuItem>
                </OptMenuList>
              </OptMenuPopover>
            </OptMenu>
          </div>
          <span className="text-sm text-gray-500 md:text-xs">Busca</span>
        </div>

        <OptToolbarDivider />

        {/* Grupo Controle */}
        <div className="relative flex flex-col-reverse items-start justify-between gap-1 md:gap-0">
          <SecurityComponent allowed={new ConditionChain([selectZoneParams.profileZone]).is("1").result}>
            <div className="flex items-center gap-1">
              <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                <OptMenu>
                  <OptMenuTrigger disableButtonEnhancement>
                    <OptToolbarButton icon={<img src={pGreen} width={20} alt="Icon" />}></OptToolbarButton>
                  </OptMenuTrigger>
                  <OptMenuPopover>
                    <OptMenuList>
                      <OptMenuItem onClick={() => setIsPanelOpenDown(true)}>
                        Programar circulação (Ctrl + P)
                      </OptMenuItem>
                      <OptMenuItem onClick={() => setIsPanelOpenDown(true)}>Priorizar circulação</OptMenuItem>
                    </OptMenuList>
                  </OptMenuPopover>
                </OptMenu>

                <OptToolbarButton
                  onClick={() => setIsOpen(true)}
                  icon={<img src={cursor} width={20} alt="Icon" />}
                ></OptToolbarButton>

                <OptMenu>
                  <OptMenuTrigger disableButtonEnhancement>
                    <OptToolbarButton icon={<img src={warningConstruction} width={20} alt="Icon" />}></OptToolbarButton>
                  </OptMenuTrigger>
                  <OptMenuPopover>
                    <OptMenuList>
                      <OptMenuItem onClick={() => setIsPanelOpenDown(true)}>Criar interdição</OptMenuItem>
                      <OptMenuItem onClick={() => setIsPanelOpenDown(true)}>Criar retenção</OptMenuItem>
                    </OptMenuList>
                  </OptMenuPopover>
                </OptMenu>
              </div>
              <div style={{ display: "flex", gap: "4px" }}>
                <OptToolbarButton icon={<img src={circleMinusRed} width={20} alt="Icon" />}></OptToolbarButton>
                <OptToolbarButton icon={<img src={velocity} width={20} alt="Icon" />}></OptToolbarButton>
                <OptToolbarButton icon={<img src={growingGraph} width={20} alt="Icon" />}></OptToolbarButton>
                <OptToolbarButton icon={<img src={windowPage} width={20} alt="Icon" />}></OptToolbarButton>
                <OptToolbarButton icon={<img src={windowPlot} width={20} alt="Icon" />}></OptToolbarButton>
                <OptToolbarButton icon={<img src={saveDiskBlue} width={20} alt="Icon" />}></OptToolbarButton>
                <OptToolbarButton icon={<img src={lockedRed} width={20} alt="Icon" />}></OptToolbarButton>
                <OptToolbarButton icon={<img src={likeYellow} width={20} alt="Icon" />}></OptToolbarButton>
                <OptToolbarButton icon={<img src={excel} width={20} alt="Icon" />}></OptToolbarButton>
                <OptToolbarButton icon={<img src={lightGray} width={20} alt="Icon" />}></OptToolbarButton>
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
              <OptToolbarButton icon={<img src={growingGraph} width={20} />} />
              <OptToolbarButton icon={<img src={graphBlockSearch} width={20} />} />
              <OptToolbarButton icon={<img src={windowPlot} width={20} />} onClick={() => setIsPanelOpenDown(true)} />
              <OptToolbarButton
                icon={<img src={windowFolder} width={20} />}
                onClick={() => setOpenSystemParams({ isOpen: true })}
              />

              {/* OptCheckboxes */}
              <Controller
                name="infoTrem"
                control={control}
                render={({ field }) => (
                  <OptCheckbox
                    checked={field.value}
                    onChange={(_, data) => {
                      field.onChange(data.checked);
                    }}
                    label={<OptText className="text-sm md:!text-[.7rem]">Info's do trem</OptText>}
                  />
                )}
              />

              <Controller
                name="exibirRealizados"
                control={control}
                render={({ field }) => (
                  <OptCheckbox
                    {...field}
                    label={<OptText className="text-sm md:!text-[.7rem]">Exibir realizados</OptText>}
                    size="medium"
                    className="text-xs"
                    checked={field.value as any}
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
                  <OptCheckbox
                    {...field}
                    label={<OptText className="text-sm md:!text-[.7rem]">Até linha do tempo</OptText>}
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

        <OptToolbarDivider />

        <SecurityComponent allowed={new ConditionChain([selectZoneParams.profileZone]).is("2").result}>
          <div className="relative flex flex-col-reverse items-start justify-between gap-1 md:gap-0">
            <div className="relative flex items-start gap-1">
              <Controller
                name="plan"
                control={control}
                render={({ field }) => (
                  <OptDropdown
                    {...field}
                    className="w-[11rem] !min-w-0 md:w-[15rem] lg:w-[12rem]"
                    id={"dropdown-plan"}
                    placeholder="Plano"
                    onOptionSelect={(_, data) => field.onChange(data.optionText ?? "")}
                  >
                    {selectedOfficialization?.listOfficialization.map((option) => (
                      <OptOption
                        className="text-left"
                        key={option.dateOfficialization}
                        value={option.dateOfficialization}
                      >
                        {DateFormat.dayjs(option.dateOfficialization, "YYYY-MM-DDTHH:mm").toDate().toLocaleString()}
                      </OptOption>
                    ))}
                  </OptDropdown>
                )}
              />
            </div>
            <span className="text-sm text-gray-500 md:text-xs">Planos</span>
          </div>
        </SecurityComponent>

        <OptToolbarDivider />
        <div className="flex-1">{/* <OptToolbarDivider /> */}</div>
        <OptToolbarDivider />

        {/* Grupo Oficialização */}
        <div className="relative flex flex-col-reverse items-start justify-between gap-1 md:gap-0">
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <OptText className="text-sm md:!text-[.7rem]">-</OptText>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <div className="flex items-center justify-between gap-1 md:gap-0">
                  <OptText className="text-sm md:min-w-[4rem] md:!text-[.7rem] lg:min-w-[4.5rem]">-</OptText>
                </div>
                <OptToolbarButton icon={<img src={windowList} width={20} alt="Icon" />}></OptToolbarButton>
              </div>
            </div>
          </div>
          <span className="text-sm text-gray-500 md:text-xs">Oficialização</span>
        </div>

        <OptToolbarDivider />

        {/* Grupo Coordenadas */}
        <div className="relative flex flex-col-reverse items-start justify-between gap-1">
          <div className="flex flex-col items-start gap-1">
            <OptText className="text-sm md:!text-[.7rem]">
              SB: {graphTimeAndCoordinates.sbs || "Fora do painel"}
            </OptText>
            <OptText className="text-sm md:!text-[.7rem]">
              SB: {DateFormat.dayjs(graphTimeAndCoordinates.date, "YYYY-MM-DDTHH:mm").toDate().toLocaleString()}
            </OptText>
          </div>
          <span className="text-sm text-gray-500 md:text-xs">Coordenadas Gráfico</span>
        </div>

        <OptToolbarDivider className="!m-0 !pr-0" />

        {/* Grupo Monitoramento */}
        {/* <SecurityComponent allowed={new ConditionChain([selectZoneParams.profileZone]).is("1").result}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <OptMenu>
              <OptMenuTrigger disableButtonEnhancement>
                <OptToolbarButton>Monitoramento</OptToolbarButton>
              </OptMenuTrigger>
              <OptMenuPopover>
                <OptMenuList>
                  <OptMenuItem onClick={() => setIsPanelOpenDown(true)}>Monitoramento de planos</OptMenuItem>
                  <OptMenuItem onClick={() => setIsPanelOpenDown(true)}>Atividades alteradas</OptMenuItem>
                </OptMenuList>
              </OptMenuPopover>
            </OptMenu>
            <span style={{ fontSize: "11px", color: "#666" }}>Planos</span>
          </div>
        </SecurityComponent> */}
      </form>
    </FormProvider>
  );
};
