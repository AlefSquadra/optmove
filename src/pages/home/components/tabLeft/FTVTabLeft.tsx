import { useFTLayout } from "../../../../shared/layouts/FTLayout";
import { GridSelectRailwayTrain } from "./GridSelectRailwayTrain/GridSelectRailwayTrain";

type SideLabelContainerProps = {
  label: string;
  children: React.ReactNode;
};

export const SideLabelContainer: React.FC<SideLabelContainerProps> = ({ label, children }) => {
  const { setSelectedPanelTabBarLeft } = useFTLayout();
  return (
    <div className="relative">
      <div className="flex flex-col gap-0">
        {["Trens", "Atividades alteradas"].map((label, index) => (
          <div
            key={index}
            className="group relative flex cursor-pointer items-center justify-center rounded-s-lg border border-r-0 border-gray-200 bg-white p-3"
            onClick={() => {
              setSelectedPanelTabBarLeft((prev) => ({
                isOpen: true,
                openTabName: prev.openTabName === label.toLocaleLowerCase() ? "" : label?.toLocaleLowerCase(),
              }));
            }}
          >
            <div className="text-black text-sm [text-orientation:sideways] [writing-mode:sideways-lr]">{label}</div>
          </div>
        ))}
      </div>
      <div className="absolute left-full top-0 h-full">{children}</div>
    </div>
  );
};

interface ITabLeftProps {}

const FTVTabLeft = (props: ITabLeftProps) => {
  const { selectedPanelTabBarLeft } = useFTLayout();
  return (
    <>
      {selectedPanelTabBarLeft.isOpen && (
        <>
          <SideLabelContainer label="Trens">
            {selectedPanelTabBarLeft.openTabName === "trens" && <GridSelectRailwayTrain />}
          </SideLabelContainer>
          <SideLabelContainer label="Atividades alteradas">
            {selectedPanelTabBarLeft.openTabName === "Atividades alteradas" && <GridSelectRailwayTrain />}
          </SideLabelContainer>
        </>
      )}
    </>
  );
};

export { FTVTabLeft };
