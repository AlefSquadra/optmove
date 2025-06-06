import { Checkbox } from "@fluentui/react-components";
import { MantineProvider } from "@mantine/core";
import { IconsGridTableIMantineToFluent } from "@styles/iconsGridTableIMantineToFluent/iconsGridTableIMantineToFluent";
import { MantineReactTable, type MRT_RowSelectionState, type MRT_TableOptions } from "mantine-react-table";
import { MRT_Localization_PT_BR } from "mantine-react-table/locales/pt-BR/index.cjs";
import { useCallback, useMemo, useState } from "react";

export interface ISelectOfficializationDataGrid {
  id: string;
  trainsOfficialization: string;
  user: string;
  dateOfficialization: string;
  mesa: string;
  timeline: string;
  officializationType: string;
  versionModel: string;
}

export interface IGridTableProps<T extends Record<string, any>> extends MRT_TableOptions<T> {
  defaultId: keyof T;
  onSelectionChange: (prop: T[]) => void;
  preSelectedItems?: T[];
}

export const OptGridTable = <T extends Record<string, any>>(props: IGridTableProps<T>) => {
  const { defaultId, onSelectionChange, preSelectedItems, ...optGridProps } = props;

  const initialRowSelection = useMemo(() => {
    if (!preSelectedItems || preSelectedItems.length === 0) return {};

    return preSelectedItems.reduce((acc, item) => {
      acc[String(item[defaultId])] = true;
      return acc;
    }, {} as MRT_RowSelectionState);
  }, [preSelectedItems, defaultId]);

  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>(initialRowSelection);

  const dataLookup = useMemo(() => {
    const map = new Map<string, T>();
    optGridProps.data?.forEach((row) => {
      map.set(String(row[defaultId]), row);
    });
    return map;
  }, [optGridProps.data, defaultId]);

  const handleRowSelectionChange = useCallback(
    (updater: any) => {
      setRowSelection((prev) => {
        const newSelection = typeof updater === "function" ? updater(prev) : updater;

        if (onSelectionChange) {
          const selectedRowIds = Object.keys(newSelection);
          const selectedRows = selectedRowIds.map((id) => dataLookup.get(id)!).filter(Boolean);
          onSelectionChange(selectedRows);
        }

        return newSelection;
      });
    },
    [onSelectionChange, dataLookup],
  );

  return (
    <MantineProvider>
      <MantineReactTable
        getRowId={(row) => row[defaultId]}
        enableExpanding={false}
        enableExpandAll={false}
        enableColumnResizing
        selectAllMode="all"
        enableSelectAll
        enableRowSelection
        onRowSelectionChange={handleRowSelectionChange}
        enableBottomToolbar={false}
        enableTopToolbar={false}
        enablePagination={false}
        enableFilters={false}
        layoutMode="grid"
        localization={MRT_Localization_PT_BR}
        {...optGridProps}
        state={{ rowSelection, ...optGridProps.state }}
        icons={IconsGridTableIMantineToFluent}
        initialState={{
          density: "xs",
          ...optGridProps.initialState,
        }}
        displayColumnDefOptions={{
          "mrt-row-select": {
            Cell: ({ row }) => (
              <Checkbox
                checked={row.getIsSelected()}
                onChange={() => {
                  row.toggleSelected();
                }}
              />
            ),
            Header: ({ table }) => {
              const isAllSelected = table.getIsAllRowsSelected();
              const isSomeSelected = table.getIsSomeRowsSelected();

              return (
                <Checkbox
                  checked={
                    isAllSelected ? true
                    : isSomeSelected ?
                      "mixed"
                    : false
                  }
                  onChange={() => {
                    table.toggleAllRowsSelected();
                  }}
                />
              );
            },
          },
        }}
      />
    </MantineProvider>
  );
};
