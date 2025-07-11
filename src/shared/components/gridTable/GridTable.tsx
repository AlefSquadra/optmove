import { OptCheckbox } from "@shared/components/fluentui";
import { MantineProvider } from "@mantine/core";
import { IconsGridTableIMantineToFluent } from "@styles/iconsGridTableIMantineToFluent/iconsGridTableIMantineToFluent";
import { MantineReactTable, type MRT_RowSelectionState, type MRT_TableOptions } from "mantine-react-table";
import { MRT_Localization_PT_BR } from "mantine-react-table/locales/pt-BR/index.cjs";
import { useEffect, useMemo, useState } from "react";

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
  onSelectionChange?: (rows: T[]) => void;
  preSelectedItems?: T[];
}

export const OptGridTable = <T extends Record<string, any>>(props: IGridTableProps<T>) => {
  const { defaultId, onSelectionChange, preSelectedItems, ...optGridProps } = props;

  // Estado inicial baseado em preSelectedItems
  const initialRowSelection = useMemo(() => {
    if (!preSelectedItems?.length) return {};
    return preSelectedItems.reduce((acc, item) => {
      acc[String(item[defaultId])] = true;
      return acc;
    }, {} as MRT_RowSelectionState);
  }, [preSelectedItems, defaultId]);

  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>(initialRowSelection);

  // Lookup para converter id em row data
  const dataLookup = useMemo(() => {
    const map = new Map<string, T>();
    optGridProps.data?.forEach((row) => {
      map.set(String(row[defaultId]), row);
    });
    return map;
  }, [optGridProps.data, defaultId]);

  useEffect(() => {
    if (onSelectionChange) {
      const selectedRows = Object.keys(rowSelection)
        .filter((id) => rowSelection[id] === true)
        .map((id) => dataLookup.get(id)!)
        .filter(Boolean);
      onSelectionChange(selectedRows);
    }
  }, [onSelectionChange, rowSelection, dataLookup]);

  return (
    <MantineProvider>
      <MantineReactTable
        {...optGridProps}
        getRowId={(row) => row[defaultId]}
        state={{ rowSelection, ...optGridProps.state }}
        onRowSelectionChange={setRowSelection}
        enableRowSelection
        enableSelectAll
        selectAllMode="all"
        enableColumnResizing
        enableFilters={false}
        enablePagination={false}
        enableBottomToolbar={false}
        enableTopToolbar={false}
        layoutMode="grid"
        localization={MRT_Localization_PT_BR}
        icons={IconsGridTableIMantineToFluent}
        initialState={{ density: "xs", ...optGridProps.initialState }}
        displayColumnDefOptions={{
          "mrt-row-select": {
            Cell: ({ row }) => <OptCheckbox checked={row.getIsSelected()} onChange={row.getToggleSelectedHandler()} />,
            Header: ({ table }) => {
              const checkedProp =
                table.getIsAllRowsSelected() ? true
                : table.getIsSomeRowsSelected() ? "mixed"
                : false;
              return (
                <OptCheckbox
                  checked={checkedProp}
                  onChange={table.getToggleAllRowsSelectedHandler()} // <-- Usar handler da própria tabela
                />
              );
            },
          },
        }}
      />
    </MantineProvider>
  );
};
