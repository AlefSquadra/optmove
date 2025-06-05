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
  {
    registration: "67890",
    name: "Ana Souza",
    headquarters: "Leste",
    position: "Operadora de Trem",
    destination: "Estação Sul",
    logbookOpening: "2025-06-04 07:00",
    serviceStart: "2025-06-04 07:10",
    activityStart: "2025-06-04 07:20",
    intraJourney: "00:20",
  },
  {
    registration: "11223",
    name: "Marcos Lima",
    headquarters: "Oeste",
    position: "Supervisor de Operações",
    destination: "Estação Central",
    logbookOpening: "2025-06-04 05:30",
    serviceStart: "2025-06-04 05:45",
    activityStart: "2025-06-04 06:00",
    intraJourney: "00:25",
  },
  {
    registration: "44556",
    name: "Juliana Alves",
    headquarters: "Sul",
    position: "Fiscal de Tráfego",
    destination: "Estação Leste",
    logbookOpening: "2025-06-04 08:00",
    serviceStart: "2025-06-04 08:15",
    activityStart: "2025-06-04 08:30",
    intraJourney: "00:35",
  },
  {
    registration: "77889",
    name: "Fernando Rocha",
    headquarters: "Norte",
    position: "Maquinista",
    destination: "Pátio de Manutenção",
    logbookOpening: "2025-06-04 09:00",
    serviceStart: "2025-06-04 09:15",
    activityStart: "2025-06-04 09:30",
    intraJourney: "00:40",
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
