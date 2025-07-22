import { useApplicationContext } from "@app/providers/ApplicationProvider/useApplication";
import type { TrainData } from "@features/home/components/charts/GHTChartD3/GHTChartD3";
import { useFTLayout } from "@features/home/providers/HomeFTLayoutProvider/useFtLayout";
import { Search20Regular } from "@fluentui/react-icons";
import { OptButton, OptField, OptInput } from "@shared/components/fluentui";
import { OptGridTable } from "@shared/components/gridTable/GridTable";
import { TabWindowHeader } from "@shared/components/tabWindowHeader/tabWindowHeader";
import type { MRT_ColumnDef } from "mantine-react-table";
import { MRT_Localization_PT_BR } from "mantine-react-table/locales/pt-BR/index.cjs";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface ISearchFormData {
  prefix: string;
  destination: string;
}

const columns = [
  {
    accessorKey: "prefixo",
    header: "Prefixo",
    size: 100,
    minSize: 80,
    maxSize: 120,
  },
  {
    accessorKey: "tipoTrem",
    header: "Tipo",
    size: 80,
    minSize: 70,
    maxSize: 100,
  },
  {
    accessorKey: "destino",
    header: "Destino",
    size: 150,
    minSize: 100,
    grow: true,
  },
] as MRT_ColumnDef<TrainData>[];

const STORAGE_KEY = "gridSelectRailwayTrain_selectedItems";

const GridSelectRailwayTrain = () => {
  // Initialize gridSelectedItems from localStorage
  const [gridSelectedItems, setGridSelectedItems] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const { setSelectedPanelTabBarLeft } = useFTLayout();
  const { trainsInGhtChart, setTrainsInGhtChart } = useApplicationContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const lastSelectionRef = useRef<Set<string>>(new Set());

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISearchFormData>({
    defaultValues: { prefix: "", destination: "" },
  });

  const [filteredData, setFilteredData] = useState<TrainData[]>([]);

  useEffect(() => {
    setFilteredData(trainsInGhtChart ?? []);
  }, [trainsInGhtChart]);

  // Save gridSelectedItems to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(gridSelectedItems));
    } catch (error) {
      console.warn("Failed to save selected items to localStorage:", error);
    }
  }, [gridSelectedItems]);

  // Create preSelectedItems based on gridSelectedItems
  const preSelectedItems = useMemo(() => {
    if (!filteredData?.length || !gridSelectedItems?.length) return [];
    return filteredData.filter((train) => gridSelectedItems.includes(train.id));
  }, [filteredData, gridSelectedItems]);

  const onSelectionChange = useCallback(
    (rows: TrainData[]) => {
      const currentSelectionIds = rows.map((row) => row.id);
      const currentSelectionSet = new Set(currentSelectionIds);

      const lastSelection = lastSelectionRef.current;
      const hasChanged =
        currentSelectionSet.size !== lastSelection.size ||
        ![...currentSelectionSet].every((id) => lastSelection.has(id));

      if (!hasChanged) {
        return;
      }

      lastSelectionRef.current = currentSelectionSet;
      setGridSelectedItems(currentSelectionIds);

      setTimeout(() => {
        setTrainsInGhtChart((prevTrains) =>
          prevTrains.map((train) => ({
            ...train,
            showTrain: currentSelectionSet.size > 0 ? currentSelectionSet.has(train.id) : true,
          })),
        );
      }, 0);
    },
    [setTrainsInGhtChart],
  );

  const handleUnselectAll = () => {
    setGridSelectedItems([]);
  };

  const onSearch = (formData: ISearchFormData) => {
    if (!trainsInGhtChart) return;

    const filtered = trainsInGhtChart.filter((item) => {
      const prefixMatch = !formData.prefix || item.prefixo.toLowerCase().includes(formData.prefix.toLowerCase());
      const destinationMatch =
        !formData.destination || item.destino.toLowerCase().includes(formData.destination.toLowerCase());

      return prefixMatch && destinationMatch;
    });

    setFilteredData(filtered);
  };

  return (
    <div className="box-border flex h-full w-full max-w-[500px] flex-col">
      <TabWindowHeader
        title={"Trens"}
        onClose={() => {
          setSelectedPanelTabBarLeft((prev) => ({ ...prev, openTabName: "" }));
        }}
      />
      <div className="flex h-full w-full flex-col gap-4 overflow-hidden border p-4">
        <form onSubmit={handleSubmit(onSearch)} className="flex flex-wrap items-end gap-2">
          <Controller
            name="prefix"
            control={control}
            render={({ field }) => (
              <OptField validationMessage={errors.prefix?.message}>
                <OptInput {...field} placeholder="Prefixo" style={{ width: 100 }} />
              </OptField>
            )}
          />

          <Controller
            name="destination"
            control={control}
            render={({ field }) => (
              <OptField validationMessage={errors.destination?.message}>
                <OptInput {...field} placeholder="Destino" style={{ width: 100 }} />
              </OptField>
            )}
          />

          <OptButton type="submit" appearance="primary" icon={<Search20Regular />} />

          <OptButton type="button" appearance="secondary" onClick={handleUnselectAll}>
            Desmarcar todos
          </OptButton>
        </form>

        <div className="flex h-full min-h-0 flex-col overflow-hidden" ref={contentRef}>
          <OptGridTable
            defaultId="id"
            columns={columns}
            data={filteredData}
            preSelectedItems={preSelectedItems}
            onSelectionChange={onSelectionChange}
            localization={MRT_Localization_PT_BR}
            mantineTableContainerProps={{
              style: {
                height: contentRef.current?.clientHeight + "px",
                flex: 1,
                overflowX: "hidden",
                width: "100%",
                maxWidth: "100%",
              },
            }}
            enableColumnResizing={true}
            columnResizeMode="onChange"
            layoutMode="grid-no-grow"
          />
        </div>
      </div>
    </div>
  );
};

export { GridSelectRailwayTrain };
