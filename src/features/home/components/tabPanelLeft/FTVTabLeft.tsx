import { GridChangedActivities } from "@features/home/components/tabPanelLeft/changedActivities/GridChangedActivities";
import { useFTLayout } from "@features/home/providers/HomeFTLayoutProvider/useFtLayout";
import { GridSelectRailwayTrain } from "./GridSelectRailwayTrain/GridSelectRailwayTrain";

type TabItem = {
  label: string;
  content: React.ReactNode;
};

type SideLabelContainerProps = {
  tabs: TabItem[];
  activeLabel: string;
  onClick: (label: string) => void;
};

export const SideLabelContainer: React.FC<SideLabelContainerProps> = ({ tabs, activeLabel, onClick }) => {
  return (
    <div className="relative z-10">
      <div className="flex flex-col gap-0">
        {tabs.map((tab) => {
          const isActive = activeLabel === tab.label.toLowerCase();
          return (
            <div
              key={tab.label}
              className={`group relative flex cursor-pointer items-center justify-center rounded-s-lg border border-r-0 border-gray-200 p-3 transition-colors ${
                isActive ? "bg-gray-100" : "bg-white"
              } ${isActive ? "border-r-transparent" : ""}`}
              onClick={() => onClick(tab.label)}
            >
              <div className="text-sm text-black [text-orientation:sideways] [writing-mode:sideways-lr]">
                {tab.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FTVTabLeft = () => {
  const { selectedPanelTabBarLeft, setSelectedPanelTabBarLeft } = useFTLayout();

  const tabs: TabItem[] = [
    {
      label: "Trens",
      content: <GridSelectRailwayTrain />,
    },
    {
      label: "Atividades alteradas",
      content: <GridChangedActivities />,
    },
  ];

  const handleClick = (label: string) => {
    const lowerLabel = label.toLowerCase();
    setSelectedPanelTabBarLeft((prev) => ({
      isOpen: true,
      openTabName: prev.openTabName?.toLocaleLowerCase() === lowerLabel ? "" : lowerLabel,
    }));
  };

  const activeTab = tabs.find((tab) => tab.label.toLowerCase() === selectedPanelTabBarLeft.openTabName);

  if (!selectedPanelTabBarLeft.isOpen) {
    return null;
  }

  return (
    <div className="relative z-10">
      {/* Sidebar */}
      <SideLabelContainer
        tabs={tabs}
        activeLabel={selectedPanelTabBarLeft.openTabName as string}
        onClick={handleClick}
      />

      {/* Conteúdo sobreposto */}
      {activeTab && (
        <div className="absolute top-0 left-full h-full">
          <div
            className={`h-full rounded-e-lg border border-s-0 border-gray-200 bg-white p-1 shadow-lg transition-all`}
          >
            {activeTab.content}
          </div>
        </div>
      )}
    </div>
  );
};

export { FTVTabLeft };
