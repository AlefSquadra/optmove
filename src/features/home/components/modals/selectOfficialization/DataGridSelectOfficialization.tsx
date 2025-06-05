import { MantineProvider } from "@mantine/core";
import { MantineReactTable, type MRT_ColumnDef, type MRT_RowSelectionState } from "mantine-react-table";
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

interface ISelectOfficializationDataGridProps {
  data: ISelectOfficializationDataGrid[];
  handleSelectionChange?: (a: ISelectOfficializationDataGrid[]) => void;
  isLoading?: boolean;
}

const DataGridSelectOfficialization = (props: ISelectOfficializationDataGridProps) => {
  const { data, isLoading } = props;

  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  const columns = useMemo<MRT_ColumnDef<ISelectOfficializationDataGrid>[]>(
    () => [
      {
        accessorKey: "trainsOfficialization",
        header: "Trens oficializados",
      },
      {
        accessorKey: "user",
        header: "Usuário",
      },
      {
        accessorKey: "dateOfficialization",
        header: "Data oficialização",
      },
      {
        accessorKey: "mesa",
        header: "Mesa",
      },
      {
        accessorKey: "timeline",
        header: "Linha do tempo",
      },
      {
        accessorKey: "officializationType",
        header: "Tipo de oficialização",
      },
      {
        accessorKey: "versionModel",
        header: "Modelo de versão",
        enableResizing: false,
      },
    ],
    [],
  );

  const dataMap = useMemo(() => {
    const map = new Map(data.map((item) => [item.id, item]));
    return map;
  }, [data]);

  const selectedRowsMap = Object.keys(rowSelection).map((rowId) => dataMap.get(rowId)!);

  useEffect(() => {
    if (selectedRowsMap) {
      console.log(selectedRowsMap);
      props?.handleSelectionChange?.(selectedRowsMap!);
    }
  }, [selectedRowsMap]);

  return (
    <MantineProvider>
      <MantineReactTable
        columns={columns}
        data={data}
        getRowId={(row) => row.id}
        enableExpanding={false}
        enableExpandAll={false}
        enableColumnResizing
        selectAllMode="all"
        enableSelectAll
        enableRowSelection
        initialState={{
          density: "xs",
          columnSizing: {
            trainsOfficialization: 50,
            user: 50,
            dateOfficialization: 50,
            mesa: 30,
            timeline: 50,
            officializationType: 80,
            versionModel: 20,
          },
        }}
        onRowSelectionChange={setRowSelection}
        state={{ rowSelection, isLoading }}
        enableBottomToolbar={false}
        enableTopToolbar={false}
        enablePagination={false}
        enableFilters={false}
        layoutMode="grid"
        localization={MRT_Localization_PT_BR}
      />
    </MantineProvider>
  );
};

export { DataGridSelectOfficialization };
