import { useFTLayout } from "@features/home/providers/HomeFTLayoutProvider/useFtLayout";
import {
  Button,
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  Field,
  Input,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  TableCellLayout,
  createTableColumn,
  type DataGridProps,
  type TableColumnDefinition,
  type TableRowId,
} from "@fluentui/react-components";
import { Search20Regular } from "@fluentui/react-icons";
import { TabWindowHeader } from "@shared/components/tabWindowHeader/tabWindowHeader";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface IRailwayTrainData {
  id: string;
  prefix: string;
  type: string;
  dateOfficialization: string;
}

interface ISearchFormData {
  prefix: string;
  destination: string;
}

const columns: TableColumnDefinition<IRailwayTrainData>[] = [
  createTableColumn<IRailwayTrainData>({
    columnId: "prefix",
    compare: (a, b) => {
      return a.prefix.localeCompare(b.prefix);
    },
    renderHeaderCell: () => {
      return "Prefixo";
    },
    renderCell: (item) => {
      return <TableCellLayout truncate>{item.prefix}</TableCellLayout>;
    },
  }),
  createTableColumn<IRailwayTrainData>({
    columnId: "type",
    compare: (a, b) => {
      return a.type.localeCompare(b.type);
    },
    renderHeaderCell: () => {
      return "Tipo";
    },
    renderCell: (item) => {
      return <TableCellLayout truncate>{item.type}</TableCellLayout>;
    },
  }),
  createTableColumn<IRailwayTrainData>({
    columnId: "dateOfficialization",
    compare: (a, b) => {
      return a.dateOfficialization.localeCompare(b.dateOfficialization);
    },
    renderHeaderCell: () => {
      return "Destino";
    },
    renderCell: (item) => {
      return <TableCellLayout truncate>{item.dateOfficialization}</TableCellLayout>;
    },
  }),
];

const GridSelectRailwayTrain = () => {
  const [selectedRows, setSelectedRows] = useState(new Set<TableRowId>([]));
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
    queryKey: ["gridSelectRailwayTrain"],
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

  const onSelectionChange: DataGridProps["onSelectionChange"] = (_, data) => {
    setSelectedRows(data.selectedItems);
  };

  const onSearch = (formData: ISearchFormData) => {
    console.log("Search data:", formData);
    refetch();
  };

  const handleUnselectAll = () => {
    setSelectedRows(new Set());
  };

  return (
    <div className="box-border flex h-full w-[500px] flex-col">
      <TabWindowHeader
        title={"Trens"}
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
              <Field validationMessage={errors.prefix?.message}>
                <Input {...field} placeholder="Prefixo" style={{ width: 100 }} />
              </Field>
            )}
          />

          <Controller
            name="destination"
            control={control}
            render={({ field }) => (
              <Field validationMessage={errors.destination?.message}>
                <Input {...field} placeholder="Destino" style={{ width: 100 }} />
              </Field>
            )}
          />

          <Button type="submit" appearance="primary" icon={<Search20Regular />} />

          <Button type="button" appearance="secondary" onClick={handleUnselectAll}>
            Desmarcar todos
          </Button>
        </form>

        <div style={{ height: "100%", overflow: "auto" }}>
          <DataGrid
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
            <DataGridHeader>
              <DataGridRow
                selectionCell={{
                  checkboxIndicator: { "aria-label": "Select all rows" },
                }}
              >
                {({ renderHeaderCell, columnId }, dataGrid) =>
                  dataGrid.resizableColumns ?
                    <Menu openOnContext>
                      <MenuTrigger>
                        <DataGridHeaderCell ref={(el) => (refMap.current[columnId] = el)}>
                          {renderHeaderCell()}
                        </DataGridHeaderCell>
                      </MenuTrigger>
                      <MenuPopover>
                        <MenuList>
                          <MenuItem onClick={dataGrid.columnSizing_unstable.enableKeyboardMode(columnId)}>
                            Keyboard Column Resizing
                          </MenuItem>
                        </MenuList>
                      </MenuPopover>
                    </Menu>
                  : <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
                }
              </DataGridRow>
            </DataGridHeader>
            <DataGridBody<IRailwayTrainData>>
              {({ item, rowId }) => (
                <DataGridRow<IRailwayTrainData>
                  key={rowId}
                  selectionCell={{
                    checkboxIndicator: { "aria-label": "Select row" },
                  }}
                >
                  {({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}
                </DataGridRow>
              )}
            </DataGridBody>
          </DataGrid>
        </div>
      </div>
    </div>
  );
};

export { GridSelectRailwayTrain };
