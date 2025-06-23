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

  // Callback de mudança de seleção: atualiza estado e dispara callback
  const handleRowSelectionChange = useCallback(
    (updaterOrValue: MRT_RowSelectionState | ((prev: MRT_RowSelectionState) => MRT_RowSelectionState)) => {
      setRowSelection((prev) => {
        const newSelection = typeof updaterOrValue === "function" ? updaterOrValue(prev) : updaterOrValue;

        if (onSelectionChange) {
          const selectedRows = Object.keys(newSelection)
            .map((id) => dataLookup.get(id)!)
            .filter(Boolean);
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
        {...optGridProps}
        getRowId={(row) => row[defaultId]}
        state={{ rowSelection, ...optGridProps.state }}
        onRowSelectionChange={handleRowSelectionChange}
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
            Cell: ({ row }) => (
              <Checkbox
                checked={row.getIsSelected()}
                onChange={() => {
                  const id = row.id;
                  handleRowSelectionChange((prev) => ({
                    ...prev,
                    [id]: !row.getIsSelected(),
                  }));
                }}
              />
            ),
            Header: ({ table }) => {
              const isAll = table.getIsAllRowsSelected();
              const isSome = table.getIsSomeRowsSelected();
              const rowIds = table.getRowModel().rows.map((r) => r.id);
              // Use 'mixed' for indeterminate state via checked prop
              const checkedProp =
                isAll ? true
                : isSome ? "mixed"
                : false;
              return (
                <Checkbox
                  checked={checkedProp}
                  onChange={() => {
                    if (isAll) {
                      handleRowSelectionChange({});
                    } else {
                      const newSel: MRT_RowSelectionState = {};
                      rowIds.forEach((id) => {
                        newSel[id] = true;
                      });
                      handleRowSelectionChange(newSel);
                    }
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
