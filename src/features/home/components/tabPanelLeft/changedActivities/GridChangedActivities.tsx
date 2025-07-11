import { useFTLayout } from "@features/home/providers/HomeFTLayoutProvider/useFtLayout";
import {
  OptButton,
  OptDataGrid,
  OptDataGridBody,
  OptDataGridCell,
  OptDataGridHeader,
  OptDataGridHeaderCell,
  OptDataGridRow,
  OptField,
  OptInput,
  OptMenu,
  OptMenuItem,
  OptMenuList,
  OptMenuPopover,
  OptMenuTrigger,
  OptTableCellLayout,
  optCreateTableColumn,
  type OptDataGridProps,
  type OptTableColumnDefinition,
  type OptTableRowId,
} from "@shared/components/fluentui";
import { ArrowSyncRegular, Search20Regular } from "@fluentui/react-icons";
import { TabWindowHeader } from "@shared/components/tabWindowHeader/tabWindowHeader";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
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

const columns: OptTableColumnDefinition<IActivitiesAltersData>[] = [
  optCreateTableColumn<IActivitiesAltersData>({
    columnId: "trem",
    compare: (a, b) => {
      return a.trem.localeCompare(b.trem);
    },
    renderHeaderCell: () => {
      return "Trem";
    },
    renderCell: (item) => {
      return <OptTableCellLayout truncate>{item.trem}</OptTableCellLayout>;
    },
  }),
  optCreateTableColumn<IActivitiesAltersData>({
    columnId: "location",
    compare: (a, b) => {
      return a.location.localeCompare(b.location);
    },
    renderHeaderCell: () => {
      return "location";
    },
    renderCell: (item) => {
      return <OptTableCellLayout truncate>{item.location}</OptTableCellLayout>;
    },
  }),
  optCreateTableColumn<IActivitiesAltersData>({
    columnId: "duration",
    compare: (a, b) => {
      return a.duration.localeCompare(b.duration);
    },
    renderHeaderCell: () => {
      return "duration";
    },
    renderCell: (item) => {
      return <OptTableCellLayout truncate>{item.duration}</OptTableCellLayout>;
    },
  }),
  optCreateTableColumn<IActivitiesAltersData>({
    columnId: "endDate",
    compare: (a, b) => {
      return a.endDate.localeCompare(b.endDate);
    },
    renderHeaderCell: () => {
      return "Destino";
    },
    renderCell: (item) => {
      return <OptTableCellLayout truncate>{item.endDate}</OptTableCellLayout>;
    },
  }),
];

const GridChangedActivities = () => {
  const [selectedRows, setSelectedRows] = useState(new Set<OptTableRowId>([]));
  const { setSelectedPanelTabBarLeft } = useFTLayout();
  const refMap = React.useRef<Record<string, HTMLElement | null>>({});

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISearchFormData>({
    defaultValues: {
      prefix: "",
      destination: "",
    },
  });

  const { data, refetch } = useQuery({
    queryKey: ["GridActivitiesAlters"],
    queryFn: async () => {
      return [
        {
          id: "1",
          prefix: "123",
          type: "123",
          dateOfficialization: "123",
        },
      ];
    },
  });

  const stabilizedData = data || [];

  const onSelectionChange: OptDataGridProps["onSelectionChange"] = (_, data) => {
    setSelectedRows(data.selectedItems);
  };

  const onSearch = (formData: ISearchFormData) => {
    console.log("Search data:", formData);
    // Implementar lógica de busca aqui
    refetch();
  };

  return (
    <div className="box-border flex h-full w-[500px] flex-col bg-white">
      <TabWindowHeader
        title={"Atividades alteradas"}
        onClose={() => {
          setSelectedPanelTabBarLeft((prev) => ({ ...prev, openTabName: "" }));
        }}
      />
      <div className="flex h-full w-auto flex-col gap-4 border p-4">
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
                <OptInput {...field} placeholder="local" style={{ width: 100 }} />
              </OptField>
            )}
          />

          <OptButton type="submit" appearance="primary" icon={<Search20Regular />} />

          <OptButton type="button" appearance="secondary" onClick={() => {}} icon={<ArrowSyncRegular />}></OptButton>
        </form>

        <div style={{ height: "100%", overflow: "auto" }}>
          <OptDataGrid
            items={stabilizedData}
            columns={columns}
            sortable
            getRowId={(item) => item.id}
            selectionMode="multiselect"
            resizableColumns
            resizableColumnsOptions={{
              autoFitColumns: true,
            }}
            selectedItems={selectedRows}
            onSelectionChange={onSelectionChange}
          >
            <OptDataGridHeader>
              <OptDataGridRow
                selectionCell={{
                  checkboxIndicator: { "aria-label": "Select all rows" },
                }}
              >
                {({ renderHeaderCell, columnId }, dataGrid) =>
                  dataGrid.resizableColumns ?
                    <OptMenu openOnContext>
                      <OptMenuTrigger>
                        <OptDataGridHeaderCell>
                          <div ref={(el: any) => (refMap.current[columnId] = el)}>{renderHeaderCell()}</div>
                        </OptDataGridHeaderCell>
                      </OptMenuTrigger>
                      <OptMenuPopover>
                        <OptMenuList>
                          <OptMenuItem onClick={dataGrid.columnSizing_unstable.enableKeyboardMode(columnId)}>
                            Keyboard Column Resizing
                          </OptMenuItem>
                        </OptMenuList>
                      </OptMenuPopover>
                    </OptMenu>
                  : <OptDataGridHeaderCell>{renderHeaderCell()}</OptDataGridHeaderCell>
                }
              </OptDataGridRow>
            </OptDataGridHeader>
            <OptDataGridBody>
              {({ item, rowId }) => (
                <OptDataGridRow
                  key={rowId}
                  selectionCell={{
                    checkboxIndicator: { "aria-label": "Select row" },
                  }}
                >
                  {({ renderCell }) => <OptDataGridCell>{renderCell(item)}</OptDataGridCell>}
                </OptDataGridRow>
              )}
            </OptDataGridBody>
          </OptDataGrid>
        </div>
      </div>
    </div>
  );
};

export { GridChangedActivities };
