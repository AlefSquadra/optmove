import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineReactTable, type MRT_ColumnDef } from "mantine-react-table";
import { MRT_Localization_PT_BR } from "mantine-react-table/locales/pt-BR/index.cjs";
import "mantine-react-table/styles.css";
import { useMemo } from "react";

const data = [
  {
    registration: "12345",
    name: "Carlos Silva",
    headquarters: "Central",
    position: "Maquinista",
    destination: "Estação Norte",
    logbookOpening: "2025-06-04 06:00",
    serviceStart: "2025-06-04 06:15",
    activityStart: "2025-06-04 06:30",
    intraJourney: "00:30",
  },
];

const GridEquipage = () => {
  const columns = useMemo<MRT_ColumnDef<typeof data>[]>(
    () => [
      {
        accessorKey: "registration",
        header: "Matrícula",
      },
      {
        accessorKey: "name",
        header: "Nome",
      },
      {
        accessorKey: "headquarters",
        header: "Sede",
      },
      {
        accessorKey: "position",
        header: "Cargo",
      },
      {
        accessorKey: "destination",
        header: "Destino",
      },
      {
        accessorKey: "logbookOpening",
        header: "Abertura Caderno",
      },
      {
        accessorKey: "serviceStart",
        header: "Início Serviço",
      },
      {
        accessorKey: "activityStart",
        header: "Início Atividade",
      },
      {
        accessorKey: "intraJourney",
        header: "Intrajornada",
      },
    ],
    [],
  );

  return (
    <MantineReactTable
      columns={columns}
      data={data as any}
      enableExpanding={false}
      enableExpandAll={false}
      enableColumnResizing
      selectAllMode="all"
      enableSelectAll
      enableRowSelection
      initialState={{ density: "xs" }}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      enablePagination={false}
      enableFilters={false}
      layoutMode="grid"
      localization={MRT_Localization_PT_BR}
    />
  );
};

export { GridEquipage };
