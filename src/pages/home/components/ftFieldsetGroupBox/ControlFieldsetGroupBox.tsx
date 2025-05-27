import { Dropdown, OptButton, OptMoveIcon, Text } from "@optmoves/index";
import { useState } from "react";
import { GroupBoxFieldset } from "../../../../shared/components/GroupBoxFieldset/GroupBoxFieldset";
import { SecurityComponent } from "../../../../shared/components/securityComponent/SecurityComponent";
import { useFTLayout } from "../../../../shared/layouts/FTLayout";
import { ConditionChain } from "../../../../shared/utils/ConditionChain";
import { useApplicationContext } from "../../../../store/ApplicationProvider";
import { TesteModal } from "../modals/TesteModal";

interface IControlFieldsetGroupBoxProps {}

const ControlFieldsetGroupBox = (props: IControlFieldsetGroupBoxProps) => {
  const {} = props;
  const { setIsOpenPanelTabBarLeft, setIsPanelOpenDown } = useFTLayout();
  const { selectZoneParams } = useApplicationContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GroupBoxFieldset.Root className="flex min-h-20 items-center justify-start gap-4 p-2">
        <GroupBoxFieldset.Legend>Controles</GroupBoxFieldset.Legend>

        <SecurityComponent allowed={new ConditionChain([selectZoneParams.profileZone]).is("1").result}>
          <Dropdown.Root placement="bottom">
            <Dropdown.Trigger>
              <OptMoveIcon name="FTPEoCircleGreenLetterP" height={24} width={24} />
            </Dropdown.Trigger>

            <Dropdown.Content>
              <Dropdown.Item onClick={() => setIsOpenPanelTabBarLeft((prev) => !prev)}>
                Programar circulação (Ctrl + P)
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setIsOpenPanelTabBarLeft((prev) => !prev)}>
                Priorizar circulação
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Root>
          <OptButton variant="outlined" className="h-6 border-none p-0" onClick={() => setIsOpen(true)}>
            <img src="/optmove-icons-svg/tile020.svg" width={24} />
          </OptButton>
          <OptButton variant="outlined" className="h-6 border-none p-0">
            <OptMoveIcon name="FTPBarrierYellowIcon" height={24} width={24} />
          </OptButton>
          <Dropdown.Root placement="bottom">
            <Dropdown.Trigger>
              <OptMoveIcon name="FTPEoCircleMinus" height={24} width={24} />
            </Dropdown.Trigger>
            <Dropdown.Content>
              <Dropdown.Item onClick={() => setIsOpenPanelTabBarLeft((prev) => !prev)}>Criar interdição</Dropdown.Item>
              <Dropdown.Item onClick={() => setIsOpenPanelTabBarLeft((prev) => !prev)}>Criar retenção</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Root>
          <OptButton variant="outlined" className="h-6 border-none p-0">
            <img src="/optmove-icons-svg/tile015.svg" width={24} />
          </OptButton>
          <OptButton variant="outlined" className="h-6 border-none p-0">
            <OptMoveIcon name="FTPGraphProgress" height={24} width={24} />
          </OptButton>
          <OptButton variant="outlined" className="h-6 border-none p-0">
            <img src="/optmove-icons-svg/tile035.svg" width={24} />
          </OptButton>
          <OptButton variant="outlined" className="h-6 border-none p-0">
            <img src="/optmove-icons-svg/tile008.svg" width={24} />
          </OptButton>
          {/** Ocupação de patios */}
          <OptButton
            variant="outlined"
            className="h-6 border-none p-0"
            onClick={() => setIsPanelOpenDown((prev) => !prev)}
          >
            <img src="/optmove-icons-svg/tile031.svg" width={24} />
          </OptButton>
          <OptButton variant="outlined" className="h-6 border-none p-0">
            <OptMoveIcon name="FTPSaveDisk" height={24} width={24} />
          </OptButton>
          <OptButton variant="outlined" className="h-6 border-none p-0">
            <OptMoveIcon name="FTPClosedLockIcon" height={24} width={24} color="red" />
          </OptButton>
          <OptButton variant="outlined" className="h-6 border-none p-0">
            <OptMoveIcon name="FTPHandGivingBeauty" height={24} width={24} />
          </OptButton>
          <OptButton variant="outlined" className="h-6 border-none p-0">
            <OptMoveIcon name="FTPExcel" height={24} width={24} />
          </OptButton>
          <Dropdown.Root placement="bottom">
            <Dropdown.Trigger>
              <img src={"/optmove-icons-svg/tile025.svg"} height={24} width={24} />
            </Dropdown.Trigger>

            <Dropdown.Content>
              <Dropdown.Item onClick={() => setIsOpenPanelTabBarLeft((prev) => !prev)}>
                Monitoramento de planos
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setIsOpenPanelTabBarLeft((prev) => !prev)}>
                Atividades alteradas
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Root>
        </SecurityComponent>

        <SecurityComponent allowed={new ConditionChain([selectZoneParams.profileZone]).is("2").result}>
          <OptButton variant="outlined" className="h-6 border-none p-0">
            <OptMoveIcon name="FTPGraphProgress" height={24} width={24} />
          </OptButton>
          <img src="/optmove-icons-svg/tile034.svg" alt="tile034" className="h-6 w-6" />
          <img src="/optmove-icons-svg/tile031.svg" alt="tile031" className="h-6 w-6" />
          <img src="/optmove-icons-svg/tile035.svg" alt="tile035" className="h-6 w-6" />
          <Text.Label
            variant="1"
            className="flex !w-auto cursor-pointer items-center justify-start gap-1 whitespace-nowrap xl:text-xs"
          >
            <input type="checkbox" name="viewTrainInfo" className="w-[20px]" />
            Visualizar info's do trem
          </Text.Label>

          <Text.Label
            variant="1"
            className="flex !w-auto cursor-pointer items-center justify-start gap-1 whitespace-nowrap xl:text-xs"
          >
            <input type="checkbox" name="viewRealized" className="w-[20px]" />
            Exibir realizados
          </Text.Label>

          <Text.Label
            variant="1"
            className="flex !w-auto cursor-pointer items-center justify-start gap-1 whitespace-nowrap xl:text-xs"
          >
            <input type="checkbox" name="viewTimeLine" className="w-[20px]" />
            Ate a linha do tempo
          </Text.Label>
        </SecurityComponent>
      </GroupBoxFieldset.Root>

      <TesteModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export { ControlFieldsetGroupBox };
