import { useFTLayout } from "@features/home/providers/HomeFTLayoutProvider/useFtLayout";
import { Search20Regular } from "@fluentui/react-icons";
import { OptButton, OptField, OptInput } from "@shared/components/fluentui";
import { OptGridTable } from "@shared/components/gridTable/GridTable";
import { TabWindowHeader } from "@shared/components/tabWindowHeader/tabWindowHeader";
import { useQuery } from "@tanstack/react-query";
import type { MRT_ColumnDef } from "mantine-react-table";
import { MRT_Localization_PT_BR } from "mantine-react-table/locales/pt-BR/index.cjs";
import { useCallback, useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface IActivitiesAltersData {
  id: string;
  trem: string;
  location: string;
  endDate: string;
  duration: string;
}

interface ISearchFormData {
  prefix: string;
  destination: string;
}

const columns = [
  {
    accessorKey: "trem",
    header: "Trem",
    size: 100,
    minSize: 80,
    maxSize: 120,
  },
  {
    accessorKey: "location",
    header: "Local",
    size: 120,
    minSize: 100,
    maxSize: 150,
  },
  {
    accessorKey: "duration",
    header: "Duração",
    size: 100,
    minSize: 80,
    maxSize: 120,
  },
  {
    accessorKey: "endDate",
    header: "Data Fim",
    size: 120,
    minSize: 100,
    grow: true,
  },
] as MRT_ColumnDef<IActivitiesAltersData>[];

const GridChangedActivities = () => {
  const [selectedRows, setSelectedRows] = useState<IActivitiesAltersData[]>([]);
  const { setSelectedPanelTabBarLeft } = useFTLayout();
  const contentRef = useRef<HTMLDivElement>(null);
  const lastSelectionRef = useRef<Set<string>>(new Set());

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISearchFormData>({
    defaultValues: { prefix: "", destination: "" },
  });

  const { data } = useQuery({
    queryKey: ["GridActivitiesAlters"],
    queryFn: async () => {
      return [
        {
          id: "1",
          trem: "T123",
          location: "Estação A",
          endDate: "2024-01-15",
          duration: "2h 30m",
        },
        {
          id: "2",
          trem: "T456",
          location: "Estação B",
          endDate: "2024-01-15",
          duration: "1h 45m",
        },
      ];
    },
  });

  const [filteredData, setFilteredData] = useState<IActivitiesAltersData[]>([]);

  useEffect(() => {
    setFilteredData(data || []);
  }, [data]);

  const onSelectionChange = useCallback((rows: IActivitiesAltersData[]) => {
    const currentSelectionIds = new Set(rows.map((row) => row.id));

    const lastSelection = lastSelectionRef.current;
    const hasChanged =
      currentSelectionIds.size !== lastSelection.size || ![...currentSelectionIds].every((id) => lastSelection.has(id));

    if (!hasChanged) {
      return;
    }

    lastSelectionRef.current = currentSelectionIds;
    setSelectedRows(rows);
  }, []);

  const handleUnselectAll = () => setSelectedRows([]);

  const onSearch = (formData: ISearchFormData) => {
    if (!data) return;

    const filtered = data.filter((item) => {
      const prefixMatch = !formData.prefix || item.trem.toLowerCase().includes(formData.prefix.toLowerCase());
      const destinationMatch =
        !formData.destination || item.location.toLowerCase().includes(formData.destination.toLowerCase());

      return prefixMatch && destinationMatch;
    });

    setFilteredData(filtered);
  };

  return (
    <div className="box-border flex h-full w-full max-w-[500px] flex-col">
      <TabWindowHeader
        title={"Atividades alteradas"}
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
                <OptInput {...field} placeholder="Prefixo trem" style={{ width: 100 }} />
              </OptField>
            )}
          />

          <Controller
            name="destination"
            control={control}
            render={({ field }) => (
              <OptField validationMessage={errors.destination?.message}>
                <OptInput {...field} placeholder="Local" style={{ width: 100 }} />
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
            preSelectedItems={selectedRows}
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

export { GridChangedActivities };
